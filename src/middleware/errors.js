// 404 per gli indirizzi che nessuna rotta gestisce (es. /api/pippo).
// In app.js va registrato dopo tutte le rotte: Express ci arriva solo se nessuna ha risposto.
// Senza, Express risponderebbe con una pagina HTML invece che in JSON
export function notFound(req, res) {
    // req.originalUrl: l'indirizzo completo richiesto, utile per capire cosa è stato chiesto
    res.status(404).json({ error: `Percorso non trovato: ${req.originalUrl}` });
}

// gestore degli errori imprevisti (bug, query sbagliate, database danneggiato).
// I 4 argomenti sono obbligatori, anche se next non si usa: è dal loro numero che
// Express lo riconosce come gestore degli errori. Va registrato per ultimo in app.js
export function errorHandler(err, req, res, next) {
    // per te: l'errore completo nel terminale in locale e nei log su Vercel
    console.error(err);

    // per il client: un messaggio generico, senza dettagli interni (tabelle, file, righe di codice)
    res.status(500).json({ error: "Errore interno del server" });
}