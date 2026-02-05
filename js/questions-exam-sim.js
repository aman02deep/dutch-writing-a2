var examTasks = [
    // SHORT MESSAGES (40-50 words) - Opdracht 16-18
    {
        id: 1,
        title: "Opdracht 1: Garage huren",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je hebt een nieuwe auto en je wilt een garage huren van Zayaz. Je hebt een advertentie in de krant gezien.",
        contextEN: "You have a new car and want to rent a garage from Zayaz. You saw an ad in the newspaper.",
        tasksNL: [
            "Schrijf waarom je schrijft.",
            "Stel 3 korte vragen over de garage.",
            "Geef je naam, adres en telefoonnummer."
        ],
        tasksEN: [
            "Tell them why you are writing.",
            "Ask 3 short questions about the garage.",
            "Give your name, address, and phone number."
        ],
        modelAnswer: "Beste Zayaz,\n\nIk schrijf deze e-mail omdat ik een garage wil huren. Ik heb een nieuwe auto.\n\nIk heb drie vragen:\n- Hoe groot is de garage?\n- Wat is de huur per maand?\n- Is de garage direct beschikbaar?\n\nMijn naam is [Naam]. Ik woon in [Adres]. Mijn telefoonnummer is [Nummer].\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 2,
        title: "Opdracht 2: Kinderen ophalen",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je bent op je werk en moet tot 17:00 uur blijven. Je moet je man Robert vragen om Tanja en Patrick om 15:15 uur op te halen.",
        contextEN: "You are at work and must stay until 17:00. You need to ask your husband Robert to pick up Tanja and Patrick at 15:15.",
        tasksNL: [
            "Schrijf dat je moet overwerken.",
            "Vraag hem de kinderen op te halen.",
            "Zeg hoe laat ze klaar zijn en wanneer je thuis bent."
        ],
        tasksEN: [
            "Write that you have to work late.",
            "Ask him to pick up the children.",
            "State what time they finish and when you will be home."
        ],
        modelAnswer: "Hoi Robert,\n\nIk moet vandaag overwerken tot vijf uur. Kun jij de kinderen ophalen van school?\n\nTanja en Patrick zijn om kwart over drie klaar. Ik ben om half zes thuis.\n\nKusjes,\nEllen"
    },
    {
        id: 3,
        title: "Opdracht 3: Afspraak maken",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je moet een afspraak maken met je dokter. Je bent al 3 dagen ziek met koorts en hoofdpijn.",
        contextEN: "You need to make an appointment with your doctor. You have been sick for 3 days with a fever and headache.",
        tasksNL: [
            "Zeg dat je een afspraak wilt maken.",
            "Leg uit wat er met je aan de hand is.",
            "Vraag wanneer je kunt komen."
        ],
        tasksEN: [
            "Say that you want to make an appointment.",
            "Explain what is wrong with you.",
            "Ask when you can come."
        ],
        modelAnswer: "Beste dokter,\n\nIk wil graag een afspraak maken. Ik ben al drie dagen ziek. Ik heb koorts en hoofdpijn.\n\nWanneer kan ik komen?\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 4,
        title: "Opdracht 16b: School uitnodiging",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "De school van je dochter heeft volgende week een ouderavond. Je kunt niet komen omdat je moet werken. Schrijf naar de leraar.",
        contextEN: "Your daughter's school is having a parent meeting next week. You cannot come because you have to work. Write to the teacher.",
        tasksNL: [
            "Zeg dat je de uitnodiging hebt ontvangen.",
            "Leg uit waarom je niet kunt komen.",
            "Vraag of er een andere mogelijkheid is."
        ],
        tasksEN: [
            "Say you received the invitation.",
            "Explain why you cannot come.",
            "Ask if there is another possibility."
        ],
        modelAnswer: "Beste meester/juffrouw,\n\nIk heb de uitnodiging voor de ouderavond ontvangen. Helaas kan ik niet komen omdat ik moet werken.\n\nIs er een andere mogelijkheid? Kan ik op een ander moment komen?\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 5,
        title: "Opdracht 17b: Ziek melden werk",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je bent vandaag ziek en kunt niet naar je werk komen. Schrijf naar je baas.",
        contextEN: "You are sick today and cannot come to work. Write to your boss.",
        tasksNL: [
            "Zeg dat je ziek bent.",
            "Zeg dat je niet naar je werk kunt komen.",
            "Zeg wanneer je hoopt weer beter te zijn."
        ],
        tasksEN: [
            "Say that you are sick.",
            "Say you cannot come to work.",
            "Say when you hope to be back."
        ],
        modelAnswer: "Beste [Naam baas],\n\nIk ben vandaag ziek. Ik kan niet naar mijn werk komen.\n\nIk hoop dat ik morgen weer beter ben.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 6,
        title: "Opdracht 18b: Bedankje buren",
        type: "short note",
        wordTarget: "40-50 words",
        contextNL: "Je buren hebben je gisteren geholpen met meubels verhuizen. Schrijf een bedankje.",
        contextEN: "Your neighbors helped you move furniture yesterday. Write them a thank you note.",
        tasksNL: [
            "Bedank hen voor de hulp.",
            "Zeg dat het heel aardig was.",
            "Nodig hen uit voor koffie."
        ],
        tasksEN: [
            "Thank them for helping.",
            "Say it was very kind.",
            "Invite them for coffee."
        ],
        modelAnswer: "Beste buren,\n\nBedankt voor jullie hulp gisteren! Het was heel aardig van jullie.\n\nKomen jullie morgen koffie drinken?\n\nGroetjes,\n[Naam]"
    },

    // LONG MESSAGES (80-90 words) - Opdracht 19-20
    {
        id: 7,
        title: "Opdracht 7: Klacht winkel",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je hebt vorige week een jas gekocht in een winkel voor €89. Toen je thuiskwam, zag je een gat in de mouw. Je wilt de jas terugbrengen en je geld terug. Je hebt nog de bon.",
        contextEN: "You bought a jacket in a store last week for €89. When you got home, you saw it has a hole in the sleeve. You want to return it and get your money back. You still have the receipt.",
        tasksNL: [
            "Zeg wat je hebt gekocht, wanneer en voor hoeveel.",
            "Leg uit wat het probleem is.",
            "Zeg wat je wilt (geld terug).",
            "Zeg dat je de bon hebt.",
            "Vraag wanneer je naar de winkel kunt komen."
        ],
        tasksEN: [
            "Say what you bought, when, and for how much.",
            "Explain what the problem is.",
            "Say what you want (money back).",
            "Say that you have the receipt.",
            "Ask when you can come to the store."
        ],
        modelAnswer: "Beste winkel,\n\nVorige week dinsdag heb ik een jas gekocht in uw winkel. De jas kostte 89 euro. Toen ik thuiskwam, zag ik dat er een gat in de mouw zit.\n\nIk ben niet tevreden met de jas. Ik wil de jas terugbrengen en mijn geld terug. Ik heb de bon nog.\n\nWanneer kan ik naar de winkel komen? Ik kan op woensdag of donderdag.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 8,
        title: "Opdracht 8: Sportschool abonnement",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je hebt een advertentie gezien voor een sportschool 'FitLife'. Je wilt meer informatie voordat je lid wordt. Je bent geïnteresseerd in zwemmen en fitnessen. Je kunt op maandag, woensdag en vrijdag 's avonds komen.",
        contextEN: "You saw an advertisement for a gym called 'FitLife'. You want to know more information before joining. You are interested in swimming and fitness. You can come on Monday, Wednesday, and Friday evenings.",
        tasksNL: [
            "Zeg dat je de advertentie hebt gezien.",
            "Zeg dat je geïnteresseerd bent in een abonnement.",
            "Vraag naar de prijs per maand.",
            "Vraag naar de openingstijden.",
            "Zeg op welke dagen je kunt komen.",
            "Vraag of ze een zwembad hebben."
        ],
        tasksEN: [
            "Say you saw the advertisement.",
            "Say you are interested in a membership.",
            "Ask about the price per month.",
            "Ask about opening hours.",
            "Say which days you can come.",
            "Ask if they have a swimming pool."
        ],
        modelAnswer: "Beste FitLife,\n\nIk heb uw advertentie gezien. Ik ben geïnteresseerd in een abonnement bij uw sportschool.\n\nIk wil graag meer informatie. Wat kost een abonnement per maand? Wat zijn de openingstijden?\n\nIk kan op maandag, woensdag en vrijdag 's avonds komen. Ik wil graag zwemmen en fitnessen. Heeft u een zwembad?\n\nIk hoor graag van u.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 7,
        title: "Opdracht 19b: Verloren voorwerp",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Gisteren ben je je portemonnee verloren in bus lijn 12 rond 14:00 uur. De portemonnee is zwart en klein. Er zitten je identiteitskaart, bankpas en €50 in. Je hebt het dringend nodig. Schrijf naar de busmaatschappij.",
        contextEN: "Yesterday you lost your wallet on bus line 12 around 14:00. The wallet is black and small. It contains your ID card, bank card, and €50. You need it urgently. Write to the bus company.",
        tasksNL: [
            "Zeg wat je verloren bent en waar.",
            "Zeg wanneer het gebeurde.",
            "Beschrijf hoe het eruitziet.",
            "Zeg wat erin zit.",
            "Zeg dat je het dringend nodig hebt.",
            "Geef je contactgegevens."
        ],
        tasksEN: [
            "Say what you lost and where.",
            "Say when it happened.",
            "Describe what it looks like.",
            "Say what is inside.",
            "Say you need it urgently.",
            "Give your contact information."
        ],
        modelAnswer: "Beste busmaatschappij,\n\nGisteren ben ik mijn portemonnee verloren in de bus. Het was lijn 12, om ongeveer twee uur 's middags.\n\nDe portemonnee is zwart en klein. Er zitten mijn identiteitskaart, mijn bankpas en vijftig euro in.\n\nIk heb de portemonnee dringend nodig. Heeft iemand hem gevonden?\n\nMijn telefoonnummer is [Nummer]. Mijn e-mailadres is [Email].\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 8,
        title: "Opdracht 20b: Cursus inschrijving",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je wilt je inschrijven voor een Nederlandse cursus bij 'Talencentrum'. Je niveau is A2. Je wilt graag 's avonds les op dinsdag en donderdag. Je wilt in september beginnen. Je wilt weten wat de prijs is en of de boeken inbegrepen zijn.",
        contextEN: "You want to register for a Dutch language course at 'Talencentrum'. You are level A2. You prefer evening classes on Tuesday and Thursday. You want to start in September. You want to know the price and if there are books included.",
        tasksNL: [
            "Zeg dat je je wilt inschrijven voor een Nederlandse cursus.",
            "Zeg wat je niveau is.",
            "Zeg welke dagen je wilt.",
            "Zeg wanneer je wilt beginnen.",
            "Vraag naar de prijs.",
            "Vraag of de boeken inbegrepen zijn."
        ],
        tasksEN: [
            "Say you want to register for a Dutch course.",
            "Say what level you are.",
            "Say which days you prefer.",
            "Say when you want to start.",
            "Ask about the price.",
            "Ask if books are included."
        ],
        modelAnswer: "Beste Talencentrum,\n\nIk wil me graag inschrijven voor een Nederlandse cursus. Mijn niveau is A2.\n\nIk wil graag 's avonds les. Ik kan op dinsdag en donderdag. Ik wil in september beginnen.\n\nWat kost de cursus? Zijn de boeken bij de prijs inbegrepen?\n\nIk wacht op uw antwoord.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 9,
        title: "Opdracht 19c: Huisarts afzeggen",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je hebt morgen (dinsdag) om 10:00 uur een afspraak bij dokter Van Dijk. Je moet afzeggen omdat je moet werken. Je wilt een nieuwe afspraak volgende week, bij voorkeur woensdag of vrijdag 's middags.",
        contextEN: "You have an appointment with doctor Van Dijk tomorrow (Tuesday) at 10:00. You need to cancel because you have to work. You want a new appointment next week, preferably Wednesday or Friday afternoon.",
        tasksNL: [
            "Zeg dat je morgen een afspraak hebt.",
            "Zeg het tijdstip en bij welke dokter.",
            "Leg uit waarom je moet afzeggen.",
            "Vraag om een nieuwe afspraak.",
            "Zeg welke dagen je kunt.",
            "Excuseer je voor het ongemak."
        ],
        tasksEN: [
            "Say you have an appointment tomorrow.",
            "Say the time and with which doctor.",
            "Explain why you need to cancel.",
            "Ask for a new appointment.",
            "Say which days you prefer.",
            "Apologize for the inconvenience."
        ],
        modelAnswer: "Beste dokter Van Dijk,\n\nIk heb morgen (dinsdag) om tien uur een afspraak bij u. Helaas moet ik deze afspraak afzeggen omdat ik moet werken.\n\nKan ik een nieuwe afspraak maken? Ik kan volgende week woensdag of vrijdag 's middags.\n\nSorry voor het ongemak.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 10,
        title: "Opdracht 20c: Verjaardag uitnodiging",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Volgende week zaterdag (15 maart) ben je jarig. Je wilt je vriendin Maria uitnodigen voor je feestje. Het feest begint om 19:00 uur bij jou thuis. Je gaat eten en er is taart. Ze mag haar man meenemen als ze wil.",
        contextEN: "It's your birthday next Saturday (March 15th). You want to invite your friend Maria to your party. The party starts at 19:00 at your house. You will have dinner and cake. She can bring her husband if she wants.",
        tasksNL: [
            "Zeg dat je volgende week zaterdag jarig bent.",
            "Nodig haar uit voor het feestje.",
            "Geef de datum en tijd.",
            "Geef je adres.",
            "Zeg wat je gaat doen (eten en taart).",
            "Zeg dat ze haar man mag meenemen."
        ],
        tasksEN: [
            "Say it's your birthday next Saturday.",
            "Invite her to the party.",
            "Give the date and time.",
            "Give your address.",
            "Say what you will do (dinner and cake).",
            "Say she can bring her husband."
        ],
        modelAnswer: "Beste Maria,\n\nVolgende week zaterdag (15 maart) ben ik jarig! Ik geef een feestje en ik wil je graag uitnodigen.\n\nHet feest begint om zeven uur 's avonds. Mijn adres is [Adres]. We gaan eten en daarna is er taart.\n\nJe mag je man ook meenemen als je wilt.\n\nTot zaterdag!\n\nGroetjes,\n[Naam]"
    },

    // NEW TASKS - More Variety
    {
        id: 13,
        title: "Opdracht 13: Klacht over product",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je hebt vorige week een lamp gekocht bij Ikea, maar hij werkt niet. Je wilt je geld terug.",
        contextEN: "You bought a lamp at Ikea last week, but it doesn't work. You want your money back.",
        tasksNL: [
            "Zeg wat je gekocht hebt en wanneer.",
            "Leg uit wat het probleem is.",
            "Vraag om je geld terug."
        ],
        tasksEN: [
            "Say what you bought and when.",
            "Explain what the problem is.",
            "Ask for your money back."
        ],
        modelAnswer: "Geachte heer/mevrouw,\n\nIk heb vorige week dinsdag een lamp bij u gekocht. Helaas werkt de lamp niet. Ik heb alles geprobeerd, maar hij gaat niet aan.\n\nIk wil graag mijn geld terug. Ik heb de bon nog.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 14,
        title: "Opdracht 14: Bedankje voor hulp",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je buurman heeft je geholpen met je verhuizing. Je wilt hem bedanken.",
        contextEN: "Your neighbor helped you with your move. You want to thank him.",
        tasksNL: [
            "Bedank hem voor zijn hulp.",
            "Zeg wat hij heeft gedaan.",
            "Nodig hem uit voor koffie."
        ],
        tasksEN: [
            "Thank him for his help.",
            "Say what he did.",
            "Invite him for coffee."
        ],
        modelAnswer: "Beste Peter,\n\nBedankt voor je hulp met de verhuizing! Je hebt me echt geholpen met de zware dozen en de kast.\n\nKom je morgen koffie drinken? Dan kan ik je bedanken.\n\nGroeten,\n[Naam]"
    },
    {
        id: 15,
        title: "Opdracht 15: Sportles annuleren",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je hebt je aangemeld voor yogales op donderdag, maar je kunt niet komen omdat je ziek bent.",
        contextEN: "You signed up for yoga class on Thursday, but you can't come because you're sick.",
        tasksNL: [
            "Zeg dat je niet kunt komen.",
            "Leg uit waarom niet.",
            "Vraag of je volgende week kunt komen."
        ],
        tasksEN: [
            "Say you can't come.",
            "Explain why not.",
            "Ask if you can come next week."
        ],
        modelAnswer: "Beste Yoga Studio,\n\nIk kan morgen helaas niet komen naar de yogales. Ik ben ziek en heb koorts.\n\nKan ik volgende week donderdag komen? Laat het me weten.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 16,
        title: "Opdracht 16: Informatie over cursus",
        type: "short email",
        wordTarget: "40-50 words",
        contextNL: "Je wilt een Nederlandse cursus volgen. Je hebt een advertentie gezien van een taalschool.",
        contextEN: "You want to take a Dutch course. You saw an ad from a language school.",
        tasksNL: [
            "Zeg dat je geïnteresseerd bent.",
            "Vraag naar de prijs.",
            "Vraag wanneer de cursus begint."
        ],
        tasksEN: [
            "Say you are interested.",
            "Ask about the price.",
            "Ask when the course starts."
        ],
        modelAnswer: "Geachte heer/mevrouw,\n\nIk ben geïnteresseerd in de Nederlandse cursus. Ik heb uw advertentie gezien.\n\nWat kost de cursus? En wanneer begint hij? Ik kan op maandag en woensdag.\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 17,
        title: "Opdracht 17: Uitnodiging voor barbecue",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je organiseert een barbecue in je tuin volgende maand. Je wilt je collega's uitnodigen.",
        contextEN: "You're organizing a barbecue in your garden next month. You want to invite your colleagues.",
        tasksNL: [
            "Zeg dat je een barbecue organiseert.",
            "Geef de datum en tijd.",
            "Geef je adres.",
            "Zeg wat je gaat doen.",
            "Vraag of ze kunnen komen.",
            "Zeg dat ze hun partner mogen meenemen."
        ],
        tasksEN: [
            "Say you're organizing a barbecue.",
            "Give the date and time.",
            "Give your address.",
            "Say what you will do.",
            "Ask if they can come.",
            "Say they can bring their partner."
        ],
        modelAnswer: "Beste collega's,\n\nIk organiseer een barbecue in mijn tuin! Het is op zaterdag 20 juni om 15:00 uur. Mijn adres is [Adres].\n\nWe gaan lekker eten, drinken en muziek luisteren. Er is vlees, vis en ook vegetarisch eten. Jullie hoeven niets mee te nemen.\n\nKunnen jullie komen? Laat het me voor 15 juni weten. Jullie mogen je partner ook meenemen!\n\nTot dan!\n\nGroeten,\n[Naam]"
    },
    {
        id: 18,
        title: "Opdracht 18: Advies vragen over vakantie",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je vriend heeft vorig jaar in Spanje gewoond. Je gaat daar op vakantie en wilt advies.",
        contextEN: "Your friend lived in Spain last year. You're going on vacation there and want advice.",
        tasksNL: [
            "Zeg dat je naar Spanje gaat.",
            "Vraag om advies over leuke plaatsen.",
            "Vraag naar goede restaurants.",
            "Vraag over het weer.",
            "Vraag wat je moet meenemen."
        ],
        tasksEN: [
            "Say you're going to Spain.",
            "Ask for advice about nice places.",
            "Ask about good restaurants.",
            "Ask about the weather.",
            "Ask what you should bring."
        ],
        modelAnswer: "Hoi Marco,\n\nIk ga volgende maand naar Spanje! Ik weet dat jij daar vorig jaar hebt gewoond. Kun je me helpen?\n\nWelke plaatsen moet ik zeker bezoeken? En ken je goede restaurants in Barcelona? Ik hou van vis en tapas.\n\nHoe is het weer in augustus? Is het erg warm? Wat moet ik meenemen?\n\nBedankt voor je hulp!\n\nGroetjes,\n[Naam]"
    },
    {
        id: 19,
        title: "Opdracht 19: Sollicitatie bijbaan",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je zoekt een bijbaan in een supermarkt. Je hebt een advertentie gezien.",
        contextEN: "You're looking for a part-time job in a supermarket. You saw an advertisement.",
        tasksNL: [
            "Zeg waarom je schrijft.",
            "Vertel over jezelf (leeftijd, studie).",
            "Zeg waarom je deze baan wilt.",
            "Zeg wanneer je kunt werken.",
            "Vraag om een gesprek."
        ],
        tasksEN: [
            "Say why you're writing.",
            "Tell about yourself (age, studies).",
            "Say why you want this job.",
            "Say when you can work.",
            "Ask for an interview."
        ],
        modelAnswer: "Geachte heer/mevrouw,\n\nIk schrijf deze brief omdat ik geïnteresseerd ben in de bijbaan bij uw supermarkt. Ik heb de advertentie gezien.\n\nIk ben 22 jaar oud en ik studeer aan de universiteit. Ik zoek een bijbaan omdat ik graag werk en mensen wil helpen. Ik ben vriendelijk en ik werk hard.\n\nIk kan werken op zaterdag en zondag, en ook 's avonds.\n\nKan ik langskomen voor een gesprek?\n\nMet vriendelijke groet,\n[Naam]"
    },
    {
        id: 20,
        title: "Opdracht 20: Verhuizing melden",
        type: "long email",
        wordTarget: "80-90 words",
        contextNL: "Je gaat verhuizen naar een nieuw huis. Je wilt je vrienden uitnodigen om te helpen.",
        contextEN: "You're moving to a new house. You want to invite your friends to help.",
        tasksNL: [
            "Zeg dat je gaat verhuizen.",
            "Geef de datum.",
            "Vraag of ze kunnen helpen.",
            "Zeg wat ze moeten doen.",
            "Zeg dat je pizza koopt voor iedereen.",
            "Geef je nieuwe adres."
        ],
        tasksEN: [
            "Say you're moving.",
            "Give the date.",
            "Ask if they can help.",
            "Say what they need to do.",
            "Say you'll buy pizza for everyone.",
            "Give your new address."
        ],
        modelAnswer: "Hoi allemaal,\n\nIk ga verhuizen! Op zaterdag 10 mei verhuis ik naar mijn nieuwe huis. Kunnen jullie me helpen?\n\nWe beginnen om 9:00 uur 's ochtends. Jullie moeten dozen dragen en meubels tillen. Het is niet zwaar werk, maar ik heb hulp nodig.\n\nIk koop pizza en drinken voor iedereen! Mijn nieuwe adres is [Nieuw Adres].\n\nLaat me weten of je kunt komen!\n\nGroeten,\n[Naam]"
    }
];

