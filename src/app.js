import express from "express";
// rotte dei lavori (src/routes/works.js)
import worksRouter from "./routes/works.js";
// gestione di indirizzi inesistenti ed errori (src/middleware/errors.js)
import { notFound, errorHandler } from "./middleware/errors.js";

// crea l'applicazione Express
const app = express();

// registro middleware json
app.use(express.json());

// tutte le richieste che iniziano con /api/works passano al router dei lavori
app.use("/api/works", worksRouter);

// rotta di controllo: risponde se l'API è attiva
app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

// in fondo, dopo tutte le rotte: l'ordine conta.
// notFound: 404 se nessuna rotta ha risposto. errorHandler: 500 se qualcosa ha lanciato un errore
app.use(notFound);
app.use(errorHandler);

// esportata senza listen(): in locale la avvia dev.js, su Vercel la piattaforma
export default app;
