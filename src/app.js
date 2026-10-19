import express from "express";

// middleware che aggiunge gli header CORS alle risposte
import cors from "cors";

// rotte dei lavori (src/routes/works.js)
import worksRouter from "./routes/works.js";

// gestione di indirizzi inesistenti ed errori (src/middleware/errors.js)
import { notFound, errorHandler } from "./middleware/errors.js";

// crea l'applicazione Express
const app = express();

// siti autorizzati a leggere l'API dal browser (protocollo + dominio + porta, senza / finale):
// il portfolio in sviluppo (Vite) e online, con e senza www
const allowedOrigins = ["http://localhost:5173", "https://www.odon-airoldi.com", "https://odon-airoldi.com"];

// registro middleware json
app.use(express.json());

// se l'Origin della richiesta è nella lista, aggiunge Access-Control-Allow-Origin.
// Prima delle rotte, così l'header c'è anche nelle risposte di errore (400, 404, 500)
app.use(cors({ origin: allowedOrigins }));

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
