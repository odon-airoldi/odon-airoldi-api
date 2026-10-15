DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS works;

CREATE TABLE works (
    id INTEGER PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL CHECK (type IN ('website', 'graphic')),
    url TEXT,
    url_text TEXT,
    position INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE images (
    id INTEGER PRIMARY KEY,
    work_id INTEGER NOT NULL REFERENCES works(id) ON DELETE CASCADE,
    path TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX images_work_id ON images (work_id);