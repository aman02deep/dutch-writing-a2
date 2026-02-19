const formTasks = [
    {
        id: 1,
        title: "Opdracht 11: Krantabonnement",
        header: "HET OMROEPERTJE - Abonnementsformulier",
        promptNL: "Je wilt een krantabonnement vanaf 1 oktober. Vul je persoonlijke gegevens correct in.",
        promptEN: "You want a newspaper subscription starting October 1st. Fill in your personal details correctly.",
        fields: [
            { label: "Voornaam", name: "voornaam", type: "text", required: true },
            { label: "Achternaam", name: "achternaam", type: "text", required: true },
            { label: "Geboortedatum", name: "geboortedatum", type: "text", placeholder: "DD-MM-JJJJ", required: true },
            { label: "Adres", name: "adres", type: "text", required: true },
            { label: "Postcode", name: "postcode", type: "text", placeholder: "1234 AB", required: true },
            { label: "Woonplaats", name: "woonplaats", type: "text", required: true },
            { label: "Ingangsdatum", name: "ingangsdatum", type: "text", placeholder: "01-10-2026", required: true }
        ]
    },
    {
        id: 2,
        title: "Opdracht 12: Bibliotheek lidmaatschap",
        header: "BIBLIOTHEEK AMSTERDAM - Aanmeldformulier",
        promptNL: "Je wilt lid worden van de bibliotheek. Vul het aanmeldformulier in.",
        promptEN: "You want to become a library member. Fill in the registration form.",
        fields: [
            { label: "Voornaam", name: "voornaam", type: "text", required: true },
            { label: "Achternaam", name: "achternaam", type: "text", required: true },
            { label: "Geboortedatum", name: "geboortedatum", type: "text", placeholder: "DD-MM-JJJJ", required: true },
            { label: "Telefoonnummer", name: "telefoon", type: "text", placeholder: "06-12345678", required: true },
            { label: "E-mailadres", name: "email", type: "email", required: true },
            { label: "Adres", name: "adres", type: "text", required: true },
            { label: "Postcode", name: "postcode", type: "text", placeholder: "1234 AB", required: true }
        ]
    },
    {
        id: 3,
        title: "Opdracht 13: Sportschool inschrijving",
        header: "FITLIFE SPORTSCHOOL - Inschrijfformulier",
        promptNL: "Je wilt lid worden van de sportschool. Je wilt beginnen op 15 september. Vul het formulier in.",
        promptEN: "You want to join the gym. You want to start on September 15th. Fill in the form.",
        fields: [
            { label: "Voornaam", name: "voornaam", type: "text", required: true },
            { label: "Achternaam", name: "achternaam", type: "text", required: true },
            { label: "Geboortedatum", name: "geboortedatum", type: "text", placeholder: "DD-MM-JJJJ", required: true },
            { label: "Telefoonnummer", name: "telefoon", type: "text", placeholder: "06-12345678", required: true },
            { label: "E-mailadres", name: "email", type: "email", required: true },
            { label: "Startdatum", name: "startdatum", type: "text", placeholder: "15-09-2026", required: true }
        ]
    },
    {
        id: 4,
        title: "Opdracht 14: Cursus aanmelding",
        header: "TALENCENTRUM - Cursusaanmelding Nederlands A2",
        promptNL: "Je wilt je aanmelden voor een Nederlandse cursus niveau A2. Je wilt op dinsdag en donderdag 's avonds. Vul het formulier in.",
        promptEN: "You want to register for a Dutch course level A2. You prefer Tuesday and Thursday evenings. Fill in the form.",
        fields: [
            { label: "Voornaam", name: "voornaam", type: "text", required: true },
            { label: "Achternaam", name: "achternaam", type: "text", required: true },
            { label: "Geboortedatum", name: "geboortedatum", type: "text", placeholder: "DD-MM-JJJJ", required: true },
            { label: "Telefoonnummer", name: "telefoon", type: "text", placeholder: "06-12345678", required: true },
            { label: "E-mailadres", name: "email", type: "email", required: true },
            { label: "Gewenste dagen", name: "dagen", type: "text", placeholder: "dinsdag, donderdag", required: true },
            { label: "Gewenste tijd", name: "tijd", type: "text", placeholder: "'s avonds", required: true }
        ]
    },
    {
        id: 5,
        title: "Opdracht 15a: Doktersafspraak",
        header: "HUISARTSENPRAKTIJK VAN DIJK - Afspraakformulier",
        promptNL: "Je wilt een afspraak maken bij de huisarts. Je hebt last van hoofdpijn en koorts. Je kunt op woensdag of vrijdag. Vul het formulier in.",
        promptEN: "You want to make an appointment with the doctor. You have a headache and fever. You can come on Wednesday or Friday. Fill in the form.",
        fields: [
            { label: "Voornaam", name: "voornaam", type: "text", required: true },
            { label: "Achternaam", name: "achternaam", type: "text", required: true },
            { label: "Geboortedatum", name: "geboortedatum", type: "text", placeholder: "DD-MM-JJJJ", required: true },
            { label: "Telefoonnummer", name: "telefoon", type: "text", placeholder: "06-12345678", required: true },
            { label: "Klachten", name: "klachten", type: "text", placeholder: "hoofdpijn, koorts", required: true },
            { label: "Gewenste dag", name: "dag", type: "text", placeholder: "woensdag of vrijdag", required: true }
        ]
    },
    {
        id: 6,
        title: "Opdracht 15b: Kinderopvang aanmelding",
        header: "KINDERDAGVERBLIJF DE REGENBOOG - Aanmeldformulier",
        promptNL: "Je wilt je kind aanmelden voor de kinderopvang. Je kind heet Emma en is 2 jaar oud. Je hebt opvang nodig op maandag, woensdag en vrijdag. Vul het formulier in.",
        promptEN: "You want to register your child for daycare. Your child's name is Emma and she is 2 years old. You need care on Monday, Wednesday, and Friday. Fill in the form.",
        fields: [
            { label: "Naam ouder/verzorger", name: "ouder", type: "text", required: true },
            { label: "Telefoonnummer", name: "telefoon", type: "text", placeholder: "06-12345678", required: true },
            { label: "E-mailadres", name: "email", type: "email", required: true },
            { label: "Naam kind", name: "kind_naam", type: "text", placeholder: "Emma", required: true },
            { label: "Geboortedatum kind", name: "kind_geboortedatum", type: "text", placeholder: "DD-MM-JJJJ", required: true },
            { label: "Gewenste dagen", name: "dagen", type: "text", placeholder: "maandag, woensdag, vrijdag", required: true }
        ]
    },
    {
        id: 7,
        title: "Opdracht 15c: Zwembad abonnement",
        header: "ZWEMBAD DE GOLF - Abonnementsformulier",
        promptNL: "Je wilt een zwembadabonnement. Je wilt graag 's ochtends zwemmen. Je wilt beginnen op 1 november. Vul het formulier in.",
        promptEN: "You want a swimming pool membership. You prefer to swim in the mornings. You want to start on November 1st. Fill in the form.",
        fields: [
            { label: "Voornaam", name: "voornaam", type: "text", required: true },
            { label: "Achternaam", name: "achternaam", type: "text", required: true },
            { label: "Geboortedatum", name: "geboortedatum", type: "text", placeholder: "DD-MM-JJJJ", required: true },
            { label: "Adres", name: "adres", type: "text", required: true },
            { label: "Telefoonnummer", name: "telefoon", type: "text", placeholder: "06-12345678", required: true },
            { label: "Gewenste tijd", name: "tijd", type: "text", placeholder: "'s ochtends", required: true },
            { label: "Startdatum", name: "startdatum", type: "text", placeholder: "01-11-2026", required: true }
        ]
    },
    {
        id: 8,
        title: "Opdracht 15d: Parkeervergunning aanvraag",
        header: "GEMEENTE AMSTERDAM - Aanvraag Parkeervergunning",
        promptNL: "Je wilt een parkeervergunning aanvragen voor je auto. Je kenteken is AB-123-CD. Je woont in Amsterdam Centrum. Vul het formulier in.",
        promptEN: "You want to apply for a parking permit for your car. Your license plate is AB-123-CD. You live in Amsterdam Center. Fill in the form.",
        fields: [
            { label: "Voornaam", name: "voornaam", type: "text", required: true },
            { label: "Achternaam", name: "achternaam", type: "text", required: true },
            { label: "Adres", name: "adres", type: "text", required: true },
            { label: "Postcode", name: "postcode", type: "text", placeholder: "1234 AB", required: true },
            { label: "Woonplaats", name: "woonplaats", type: "text", placeholder: "Amsterdam", required: true },
            { label: "Kenteken", name: "kenteken", type: "text", placeholder: "AB-123-CD", required: true },
            { label: "Telefoonnummer", name: "telefoon", type: "text", placeholder: "06-12345678", required: true }
        ]
    }
];