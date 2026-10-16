// libreria per usare SQLite da Node
import Database from "better-sqlite3";

// converte un indirizzo file:///… in un percorso del disco
import { fileURLToPath } from "node:url";

// percorso del database calcolato a partire da questo file (src/db.js), non dalla
// cartella da cui si avvia il server: così il file si trova sempre, anche su Vercel.
// - import.meta.url: l'indirizzo di questo file (file:///…/src/db.js)
// - new URL("../db/portfolio.sqlite", …): da src/ sale di una cartella (../) ed entra in db/
// - fileURLToPath(…): trasforma l'indirizzo file:///… in un percorso del disco (/Users/…)
const dbPath = fileURLToPath(new URL("../db/portfolio.sqlite", import.meta.url));

// apre il database una sola volta:
// readonly: l'API può solo leggere, nessuna query può modificare i dati
// fileMustExist: se il file manca dà subito errore, invece di creare un database vuoto
const db = new Database(dbPath, { readonly: true, fileMustExist: true });

// connessione condivisa da tutte le rotte
export default db;
