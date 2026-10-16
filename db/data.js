const works = [
    {
        id: 1,
        slug: "tuttocialde",
        title: "Tuttocialde",
        type: "website",
        description: "Redesign UI di un e-commerce basato su nopCommerce. Ho sviluppato i template frontend in HTML e CSS e li ho integrati nelle view Razor della piattaforma, adattando il layout ai componenti nativi di catalogo, carrello e checkout.",
        url_text: "www.tuttocialde.it",
        url: "https://www.tuttocialde.it",
        position: 0
    },
    {
        id: 2,
        slug: "caffe-agostani",
        title: "Caffè Agostani",
        type: "website",
        description: "Sviluppo frontend da zero di un e-commerce su nopCommerce. Ho convertito il design in template HTML e CSS responsive e li ho integrati nelle view Razor, collegandoli ai componenti e ai dati gestiti dalla piattaforma.",
        url_text: "www.caffeagostani.com",
        url: "https://www.caffeagostani.com",
        position: 0
    },
    {
        id: 3,
        slug: "run-club",
        title: "Run Club",
        type: "website",
        description: "Applicazione full stack con frontend in React e backend in Laravel, comunicanti tramite API RESTful. Ho implementato l'autenticazione degli utenti con Laravel Sanctum, progettato lo schema relazionale su MySQL e gestito migrazioni e relazioni tra entità con Eloquent ORM, strutturando gli endpoint secondo un'architettura MVC.",
        url_text: "Repo on Github",
        url: "https://github.com/odon-airoldi/run-club-api",
        position: 0
    },
    {
        id: 4,
        slug: "geomont",
        title: "Geomont",
        type: "website",
        description: "Sito corporate su WordPress con tema custom sviluppato da zero. Ho strutturato i template secondo la template hierarchy di WordPress e implementato in JavaScript un layout a griglia dinamico per la presentazione grafica dei contenuti.",
        url_text: "www.geomont.com",
        url: "https://www.geomont.com",
        position: 0
    },
    {
        id: 5,
        slug: "essense-magazine",
        title: "Essense Magazine",
        type: "website",
        description: "Portale editoriale su WordPress con tema custom sviluppato da zero. Ho implementato i template per articoli, categorie e archivi secondo la template hierarchy, ottimizzando la presentazione dei contenuti e l'integrazione con il flusso editoriale del CMS.",
        url_text: "essense-magazine.com",
        url: "https://essense-magazine.com",
        position: 0
    },
    {
        id: 6,
        slug: "studio-lops",
        title: "Studio Lops",
        type: "website",
        description: "Sito per uno studio fotografico su WordPress con tema custom sviluppato da zero. Ho realizzato template dedicati alla presentazione di gallerie e contenuti visivi, con layout responsive e gestione delle immagini integrata nel CMS.",
        url_text: "www.studiofotograficolops.it",
        url: "https://www.studiofotograficolops.it",
        position: 0
    },
    {
        id: 7,
        slug: "swiss-rd-sa",
        title: "Swiss R&D SA",
        type: "website",
        description: "Sito corporate per una società svizzera. Ho trasposto il progetto grafico in pagine PHP con template fedeli al design, sviluppando un layout responsive che mantiene leggibilità e coerenza visiva.",
        url_text: "www.swiss-redsa.ch",
        url: "https://swiss-redsa.ch",
        position: 0
    },
    {
        id: 11,
        slug: "tenuta-casa-virginia",
        title: "Tenuta Casa Virginia",
        type: "graphic",
        description: null,
        url: null,
        url_text: null,
        position: 0,
        images: [
            "/images/odon-airoldi-tenuta-casa-virginia-01.webp",
            "/images/odon-airoldi-tenuta-casa-virginia-02.webp",
            "/images/odon-airoldi-tenuta-casa-virginia-03.webp",
            "/images/odon-airoldi-tenuta-casa-virginia-04.webp",
            "/images/odon-airoldi-tenuta-casa-virginia-05.webp",
            "/images/odon-airoldi-tenuta-casa-virginia-06.webp"
        ]
    },
    {
        id: 12,
        slug: "le-corne",
        title: "Le Corne",
        type: "graphic",
        description: null,
        url: null,
        url_text: null,
        position: 0,
        images: [
            "/images/odon-airoldi-le-corne-01.webp",
            "/images/odon-airoldi-le-corne-02.webp",
            "/images/odon-airoldi-le-corne-03.webp",
            "/images/odon-airoldi-le-corne-04.webp",
            "/images/odon-airoldi-le-corne-05.webp"
        ]
    },
    {
        id: 13,
        slug: "nove-lune",
        title: "Nove Lune",
        type: "graphic",
        description: null,
        url: null,
        url_text: null,
        position: 0,
        images: [
            "/images/odon-airoldi-nove-lune-01.webp",
            "/images/odon-airoldi-nove-lune-02.webp",
            "/images/odon-airoldi-nove-lune-03.webp",
            "/images/odon-airoldi-nove-lune-04.webp",
            "/images/odon-airoldi-nove-lune-05.webp",
            "/images/odon-airoldi-nove-lune-06.webp"
        ]
    },
    {
        id: 14,
        slug: "eb-arredamenti",
        title: "EB Arredamenti",
        type: "graphic",
        description: null,
        url: null,
        url_text: null,
        position: 0,
        images: [
            "/images/odon-airoldi-eb-arredamenti-01.webp",
            "/images/odon-airoldi-eb-arredamenti-02.webp",
            "/images/odon-airoldi-eb-arredamenti-03.webp",
            "/images/odon-airoldi-eb-arredamenti-04.webp"
        ]
    },
    {
        id: 15,
        slug: "formenti",
        title: "Formenti MR",
        type: "graphic",
        description: null,
        url: null,
        url_text: null,
        position: 0,
        images: [
            "/images/odon-airoldi-formenti-01.webp",
            "/images/odon-airoldi-formenti-02.webp",
            "/images/odon-airoldi-formenti-03.webp",
            "/images/odon-airoldi-formenti-04.webp",
            "/images/odon-airoldi-formenti-05.webp"
        ]
    },
    {
        id: 16,
        slug: "jval",
        title: "J-Val",
        type: "graphic",
        description: null,
        url: null,
        url_text: null,
        position: 0,
        images: [
            "/images/odon-airoldi-jval-01.webp",
            "/images/odon-airoldi-jval-02.webp",
            "/images/odon-airoldi-jval-03.webp",
            "/images/odon-airoldi-jval-04.webp",
            "/images/odon-airoldi-jval-05.webp",
            "/images/odon-airoldi-jval-06.webp"
        ]
    },
    {
        id: 17,
        slug: "mgs",
        title: "Mgs Thermal",
        type: "graphic",
        description: null,
        url: null,
        url_text: null,
        position: 0,
        images: [
            "/images/odon-airoldi-mgs-01.webp",
            "/images/odon-airoldi-mgs-02.webp",
            "/images/odon-airoldi-mgs-03.webp",
            "/images/odon-airoldi-mgs-04.webp"
        ]
    }
]

export { works }
