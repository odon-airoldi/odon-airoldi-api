// i dati da inserire nel database
import { works } from "./data.js";

// libreria per usare SQLite da Node
import Database from "better-sqlite3";

// modulo Node per lettura file (schema.sql)
import fs from "node:fs";

// apre il database e lo crea se il file non esiste ancora
const db = new Database("db/portfolio.sqlite");

// attiva il controllo delle chiavi esterne (in SQLite è spento di default)
db.pragma("foreign_keys = ON");

// legge schema.sql come testo
const schema = fs.readFileSync("db/schema.sql", "utf8");

// esegue tutti i comandi SQL dello schema: elimina e ricrea le tabelle
db.exec(schema);


// query preparata: scritta una volta e riusata per ogni lavoro.
// @slug, @title… sono segnaposto, sostituiti in modo sicuro con le proprietà dell'oggetto passato a run()
const insertWork = db.prepare(`
    INSERT INTO works (slug, title, type, description, url, url_text, position)
    VALUES (@slug, @title, @type, @description, @url, @url_text, @position)
`);

const insertImage = db.prepare(`
    INSERT INTO images (work_id, path, position)
    VALUES (@work_id, @path, @position)
`);

// transazione: gli inserimenti vanno a buon fine tutti insieme, oppure nessuno
const insertAll = db.transaction(() => {
    // per ogni lavoro esegue la query con i suoi dati (le proprietà in più, come id, sono ignorate)
    works.forEach((w) => {
        const result = insertWork.run(w);
        const workId = result.lastInsertRowid;

        w.images?.forEach((image, i) => {
            insertImage.run({
                work_id: workId,
                path: image,
                position: i + 1
            });
        });

    })
});

// esegue la transazione
insertAll();

console.log("Database creato");

// chiude il collegamento al database
db.close();
