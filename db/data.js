const works = [
    {
        id: 1,
        slug: "tuttocialde",
        title: "Tuttocialde",
        type: "website",
        description: "Restyling di uno shop nopCommerce multimarca, con un catalogo articolato e un’esperienza d’acquisto pensata per facilitare la navigazione tra prodotti e offerte. Ho riprogettato UX e UI e sviluppato il front-end responsive in HTML, CSS e JavaScript, integrandolo nelle view Razor del tema.",
        url_text: "www.tuttocialde.it",
        url: "https://www.tuttocialde.it",
        position: 0
    },
    {
        id: 2,
        slug: "caffe-agostani",
        title: "Caffè Agostani",
        type: "website",
        description: "Progettazione e sviluppo di uno shop nopCommerce dedicato al singolo brand. Ho definito un’esperienza d’acquisto coerente con l’identità visiva di Caffè Agostani e realizzato l’interfaccia responsive in HTML, CSS e JavaScript, integrandola nei template del tema.",
        url_text: "www.caffeagostani.com",
        url: "https://www.caffeagostani.com",
        position: 0
    },
    {
        id: 3,
        slug: "cialda-mia",
        title: "Cialda Mia",
        type: "website",
        description: "Restyling dello shop nopCommerce, con interventi sull’interfaccia e sul percorso d’acquisto per rendere la navigazione più chiara e funzionale. Ho sviluppato il front-end responsive in HTML, CSS e JavaScript e l’ho integrato nei template del tema.",
        url_text: "www.cialdamia.it",
        url: "https://www.cialdamia.it",
        position: 0
    },
    {
        id: 4,
        slug: "run-club",
        title: "Run Club",
        type: "website",
        description: "Web app full-stack realizzata come progetto finale del corso Boolean, con front-end in React e back-end in Laravel. Ho implementato la comunicazione tramite API REST, l’autenticazione con Sanctum e la struttura dei dati in MySQL, definendo modelli e relazioni con Eloquent e organizzando gli endpoint secondo il pattern MVC.",
        url_text: "Repo on Github",
        url: "https://github.com/odon-airoldi/run-club-api",
        position: 0
    },
    {
        id: 5,
        slug: "geomont",
        title: "Geomont",
        type: "website",
        description: "Sito WordPress con tema personalizzato. Ho convertito il progetto grafico in template WordPress e sviluppato in JavaScript una griglia dinamica per disporre i contenuti in modo flessibile e coerente con il design.",
        url_text: "www.geomont.com",
        url: "https://www.geomont.com",
        position: 0
    },
    {
        id: 6,
        slug: "essense-magazine",
        title: "Essense Magazine",
        type: "website",
        description: "Magazine online realizzato su WordPress con tema personalizzato. Ho sviluppato i template per articoli, categorie e archivi e configurato con ACF campi personalizzati per comporre articoli modulari con testi e gallery.",
        url_text: "www.essense-magazine.com",
        url: "https://essense-magazine.com",
        position: 0
    },
    // {
    //     id: 7,
    //     slug: "studio-lops",
    //     title: "Studio Lops",
    //     type: "website",
    //     description: "Sito per uno studio fotografico su WordPress. Ho sviluppato template dedicati alla presentazione di gallerie e contenuti visivi, con layout responsive e gestione delle immagini integrata nel CMS.",
    //     url_text: "www.studiofotograficolops.it",
    //     url: "https://www.studiofotograficolops.it",
    //     position: 0
    // },
    {
        id: 7,
        slug: "swiss-rd-sa",
        title: "Swiss R&D SA",
        type: "website",
        description: "Sito corporate sviluppato su misura. Ho tradotto il progetto grafico in pagine PHP modulari, realizzando template aderenti al design e un layout responsive per mantenere leggibilità e coerenza visiva sui diversi dispositivi.",
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
