/**
 * Wijkkrant Tasks — 4 neighbourhood newspaper writing exercises.
 * This is a distinct exam component with its own format rules:
 *  - NO "Beste..." greeting — starts with "Hallo allemaal,"
 *  - Template opener: "Mijn naam is [naam] en ik schrijf deze week over [onderwerp]."
 *  - Closing: "Fijne dag allemaal!"
 *  - Target: 80-90 words
 *  - Topics: eten, vakantie, familie, huishoudelijk apparaat
 */

const wijkkrantTasks = [
    {
        id: 1,
        title: "Wijkkrant 1: Mijn favoriete eten",
        topic: "Eten (Food)",
        icon: "🍽️",
        contextNL: "Schrijf een stukje voor de wijkkrant over jouw favoriete eten. Vertel wat het is, waar het vandaan komt en hoe je het maakt of eet.",
        contextEN: "Write a piece for the neighbourhood newspaper about your favourite food. Tell what it is, where it comes from and how you make or eat it.",
        tasksNL: [
            "Begin met 'Hallo allemaal,' en stel jezelf voor.",
            "Vertel wat jouw favoriete eten is.",
            "Vertel waar dit eten vandaan komt.",
            "Beschrijf hoe het smaakt of hoe je het eet.",
            "Sluit af met 'Fijne dag allemaal!'"
        ],
        tasksEN: [
            "Start with 'Hallo allemaal,' and introduce yourself.",
            "Tell what your favourite food is.",
            "Tell where this food comes from.",
            "Describe how it tastes or how you eat it.",
            "Close with 'Fijne dag allemaal!'"
        ],
        rulesNL: [
            "❌ Geen 'Beste...' — dit is voor de hele buurt, niet één persoon",
            "✅ Begin met: 'Hallo allemaal,'",
            "✅ Gebruik de template-zin: 'Mijn naam is ... en ik schrijf deze week over ...'",
            "✅ Eindig met: 'Fijne dag allemaal!'",
            "📝 Doel: 80-90 woorden"
        ],
        modelAnswer: "Hallo allemaal,\n\nIk schrijf over [topic].\nMijn naam is [naam] en ik woon in [straat] in [stad].\nMijn favoriete gerecht is [food].\nHet is heel lekker.\nHet is heel makkelijk om te maken.\nIk maak het elke week.\nJe kan het thuis maken.\nProbeer het ook!\nIk vind het heel leuk!\n\nFijne dag allemaal!\n[naam]"
    },
    {
        id: 2,
        title: "Wijkkrant 2: Mijn mooiste vakantie",
        topic: "Vakantie (Holiday)",
        icon: "✈️",
        contextNL: "Schrijf een stukje voor de wijkkrant over je mooiste of laatste vakantie. Vertel waar je naartoe ging, wat je deed en wat je het leukste vond.",
        contextEN: "Write a piece for the neighbourhood newspaper about your best or most recent holiday. Tell where you went, what you did and what you liked most.",
        tasksNL: [
            "Begin met 'Hallo allemaal,' en stel jezelf voor.",
            "Vertel waar je op vakantie bent geweest.",
            "Vertel wat je hebt gedaan.",
            "Zeg wat je het mooiste of leukste vond.",
            "Sluit af met 'Fijne dag allemaal!'"
        ],
        tasksEN: [
            "Start with 'Hallo allemaal,' and introduce yourself.",
            "Tell where you went on holiday.",
            "Tell what you did.",
            "Say what you liked the most.",
            "Close with 'Fijne dag allemaal!'"
        ],
        rulesNL: [
            "❌ Geen 'Beste...' — dit is voor de hele buurt, niet één persoon",
            "✅ Begin met: 'Hallo allemaal,'",
            "✅ Gebruik de template-zin: 'Mijn naam is ... en ik schrijf deze week over ...'",
            "✅ Eindig met: 'Fijne dag allemaal!'",
            "📝 Doel: 80-90 woorden"
        ],
        modelAnswer: "Hallo allemaal,\n\nIk schrijf over mijn vakantie.\nMijn naam is [naam] en ik woon in [straat] in [stad].\nIk ben naar [land] gegaan.\nHet was heel leuk.\nIk heb [activiteit] gedaan.\nHet weer was heel mooi.\nIk wil weer gaan!\nProbeer het ook!\n\nFijne dag allemaal!\n[naam]"
    },
    {
        id: 3,
        title: "Wijkkrant 3: Mijn familie",
        topic: "Familie (Family)",
        icon: "👨‍👩‍👧",
        contextNL: "Schrijf een stukje voor de wijkkrant over jouw familie. Vertel hoe groot je familie is, waar je familie vandaan komt en wat jullie graag samen doen.",
        contextEN: "Write a piece for the neighbourhood newspaper about your family. Tell how big your family is, where your family comes from and what you like to do together.",
        tasksNL: [
            "Begin met 'Hallo allemaal,' en stel jezelf voor.",
            "Vertel hoe groot je familie is.",
            "Vertel waar je familie vandaan komt of woont.",
            "Vertel wat jullie graag samen doen.",
            "Sluit af met 'Fijne dag allemaal!'"
        ],
        tasksEN: [
            "Start with 'Hallo allemaal,' and introduce yourself.",
            "Tell how big your family is.",
            "Tell where your family comes from or lives.",
            "Tell what you like to do together.",
            "Close with 'Fijne dag allemaal!'"
        ],
        rulesNL: [
            "❌ Geen 'Beste...' — dit is voor de hele buurt, niet één persoon",
            "✅ Begin met: 'Hallo allemaal,'",
            "✅ Gebruik de template-zin: 'Mijn naam is ... en ik schrijf deze week over ...'",
            "✅ Eindig met: 'Fijne dag allemaal!'",
            "📝 Doel: 80-90 woorden"
        ],
        modelAnswer: "Hallo allemaal,\n\nMijn naam is [Naam] en ik schrijf deze week over mijn familie.\n\nIk heb een grote familie. Wij zijn met zijn allen [aantal] personen. Mijn ouders wonen in [land/stad] en mijn broers en zussen wonen ook ver weg. Ik mis ze soms.\n\nAls we bij elkaar zijn, eten we samen, lachen we veel en praten we over vroeger. Familie is voor mij het allerbelangrijkste in het leven.\n\nFijne dag allemaal!\n\n[Naam]"
    },
    {
        id: 4,
        title: "Wijkkrant 4: Mijn huishoudelijk apparaat",
        topic: "Apparaat (Appliance)",
        icon: "🏠",
        contextNL: "Schrijf een stukje voor de wijkkrant over een handig huishoudelijk apparaat dat jij gebruikt. Vertel welk apparaat het is, waarvoor je het gebruikt en waarom het zo handig is.",
        contextEN: "Write a piece for the neighbourhood newspaper about a useful household appliance that you use. Tell which appliance it is, what you use it for and why it is so useful.",
        tasksNL: [
            "Begin met 'Hallo allemaal,' en stel jezelf voor.",
            "Vertel welk apparaat je hebt.",
            "Vertel waarvoor je het gebruikt.",
            "Zeg waarom het zo handig is.",
            "Sluit af met 'Fijne dag allemaal!'"
        ],
        tasksEN: [
            "Start with 'Hallo allemaal,' and introduce yourself.",
            "Tell which appliance you have.",
            "Tell what you use it for.",
            "Say why it is so useful.",
            "Close with 'Fijne dag allemaal!'"
        ],
        rulesNL: [
            "❌ Geen 'Beste...' — dit is voor de hele buurt, niet één persoon",
            "✅ Begin met: 'Hallo allemaal,'",
            "✅ Gebruik de template-zin: 'Mijn naam is ... en ik schrijf deze week over ...'",
            "✅ Eindig met: 'Fijne dag allemaal!'",
            "📝 Doel: 80-90 woorden"
        ],
        modelAnswer: "Hallo allemaal,\n\nMijn naam is [Naam] en ik schrijf deze week over een handig apparaat in mijn huis.\n\nIk heb een [apparaat]. Ik gebruik het elke dag. Met dit apparaat kan ik [functie]. Het werkt heel goed en het is niet moeilijk te gebruiken.\n\nVroeger deed ik dit altijd met de hand, maar nu gaat het veel sneller. Ik ben heel blij met dit apparaat. Ik raad het iedereen aan!\n\nFijne dag allemaal!\n\n[Naam]"
    }
];
