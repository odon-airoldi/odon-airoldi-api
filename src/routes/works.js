import { Router } from "express";
// connessione al database in sola lettura
import db from "../db.js";

// raccoglie le rotte dei lavori; in app.js è collegato a /api/works
const router = Router();

// valori ammessi per il filtro ?type=
const allowedTypes = ["website", "graphic"];

// GET /api/works: tutti i lavori con tutti i dati (immagini comprese), con filtro facoltativo ?type=website | graphic.
// Il portfolio la scarica una volta durante la splash: pochi KB, e i click sui lavori non aspettano altre richieste
// "/" è relativo al punto in cui il router è collegato, quindi vale /api/works.
// La query string (?type=…) non fa parte del percorso: Express la mette in req.query
router.get("/", (req, res) => {
    // valore del filtro: una stringa, oppure undefined se nell'indirizzo non c'è
    const { type } = req.query;

    // se il filtro c'è ma non è tra i valori ammessi: 400 Bad Request.
    // return interrompe la funzione: una risposta si può inviare una volta sola
    if (type && !allowedTypes.includes(type)) {
        return res.status(400).json({ error: "type deve essere website o graphic" });
    }

    // query 1: i lavori. id serve per collegarli alle immagini, ma non verrà inviato nella risposta.
    // WHERE: se @type è NULL passano tutte le righe, altrimenti solo quelle di quel tipo.
    // Ordine: prima i lavori con una position (1, 2, 3…), poi quelli a 0, per id
    // all() restituisce tutte le righe come array di oggetti
    const works = db.prepare(`
        SELECT id, slug, title, type, description, url, url_text
        FROM works
        WHERE @type IS NULL OR type = @type
        ORDER BY position = 0, position, id
    `).all({ type: type ?? null }); // better-sqlite3 accetta null ma non undefined

    // query 2: tutte le immagini, nell'ordine della gallery (lo stesso del dettaglio).
    // Due query in tutto, quanti che siano i lavori: una per lavoro sarebbe il problema "N+1".
    // Senza WHERE: con ?type=website arrivano anche quelle dei graphic, inutilizzate (poche righe, va bene così)
    const images = db.prepare(`
        SELECT work_id, path
        FROM images
        ORDER BY position = 0, position, id
    `).all();

    // raggruppa le immagini per lavoro: { "8": [ {work_id, path}, … ], "9": [ … ] }.
    // Le chiavi di un oggetto sono stringhe, ma imagesByWork[9] trova comunque "9".
    // L'ordine dentro ogni gruppo resta quello della query
    const imagesByWork = Object.groupBy(images, (image) => image.work_id)

    // per ogni lavoro un nuovo oggetto: tutti i campi tranne id (separato nei parametri) più images.
    // Chi non ha immagini (i website) non ha un gruppo in imagesByWork: ?? [] evita undefined.map().
    // map() non modifica works: restituisce un nuovo array, salvato in worksImages
    const worksImages = works.map(({ id, ...work }) => (
        {
            ...work,
            images: (imagesByWork[id] ?? []).map((image) => image.path)
        }
    ));

    // invia l'array come risposta JSON
    res.json(worksImages);
});


// GET /api/works/:slug: dettaglio di un lavoro con le sue immagini
// :slug è un parametro di percorso: per /api/works/le-corne vale "le-corne"
router.get("/:slug", (req, res) => {
    // valore del parametro, letto da req.params
    const { slug } = req.params;

    // il lavoro con quello slug. get() restituisce una riga sola, o undefined se non esiste.
    // id serve per cercare le immagini, ma non verrà inviato nella risposta
    const work = db.prepare(`
        SELECT id, slug, title, type, description, url, url_text
        FROM works
        WHERE slug = @slug
    `).get({ slug });

    // lavoro inesistente: 404 Not Found. Va controllato prima di usare work.id
    if (!work) {
        return res.status(404).json({ error: "Work non trovato" });
    }

    // separa id dal resto dei campi: workData contiene tutto tranne id
    const { id, ...workData } = work;

    // le immagini del lavoro, nell'ordine della gallery. all() restituisce un array di righe
    // query 2: tutte le immagini, nell'ordine della gallery (lo stesso del dettaglio).
    // Due query in tutto, quanti che siano i lavori: una per lavoro sarebbe il problema "N+1".
    // Senza WHERE: con ?type=website arrivano anche quelle dei graphic, inutilizzate (poche righe, va bene così)
    const images = db.prepare(`
        SELECT path
        FROM images
        WHERE work_id = @work_id
        ORDER BY position = 0, position, id
    `).all({ work_id: id });

    // risposta: i campi del lavoro più images come array di percorsi.
    // map() trasforma [{ path: "…" }, …] in ["…", …]
    const workImages = {
        ...workData,
        images: images.map((image) => image.path),
    };

    res.json(workImages);
});





export default router;
