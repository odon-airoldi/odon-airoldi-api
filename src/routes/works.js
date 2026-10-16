import { Router } from "express";
// connessione al database in sola lettura
import db from "../db.js";

// raccoglie le rotte dei lavori; in app.js è collegato a /api/works
const router = Router();

// valori ammessi per il filtro ?type=
const allowedTypes = ["website", "graphic"];

// GET /api/works: lista dei lavori, con filtro facoltativo ?type=website | graphic
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

    // solo i campi che servono per una lista: descrizione e immagini sono nel dettaglio.
    // WHERE: se @type è NULL passano tutte le righe, altrimenti solo quelle di quel tipo.
    // Ordine: prima i lavori con una position (1, 2, 3…), poi quelli a 0, per id
    // all() restituisce tutte le righe come array di oggetti
    const works = db.prepare(`
        SELECT slug, title, type
        FROM works
        WHERE @type IS NULL OR type = @type
        ORDER BY position = 0, position, id
    `).all({ type: type ?? null }); // better-sqlite3 accetta null ma non undefined

    // invia l'array come risposta JSON
    res.json(works);
});


export default router;
