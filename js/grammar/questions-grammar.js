// Grammar Practice Exercises - Lingua Incognita
// Source: Inburgering Writing Exam Assignments PDF
// © Ellen Oostenbrink, www.lingua-incognita.nl

var grammarExercises = [
    // OPDRACHT 1: Simple Sentence Completion
    {
        id: 1,
        title: "Opdracht 1: Zinnen afmaken",
        titleEN: "Exercise 1: Complete the Sentences",
        type: "simple",
        instructionNL: "Maak de zinnen af.",
        instructionEN: "Complete the sentences.",
        grammarTip: "Subject + Verb + Rest (Object/Time/Place)",
        exercises: [
            { prompt: "Ik drink ...", example: "Ik drink koffie.", exampleEN: "I drink coffee." },
            { prompt: "Jij eet ...", example: "Jij eet brood.", exampleEN: "You eat bread." },
            { prompt: "Hij werkt ...", example: "Hij werkt in een winkel.", exampleEN: "He works in a store." },
            { prompt: "Zij leest ...", example: "Zij leest een boek.", exampleEN: "She reads a book." },
            { prompt: "Het kind speelt ...", example: "Het kind speelt buiten.", exampleEN: "The child plays outside." },
            { prompt: "Wij wonen ...", example: "Wij wonen in Amsterdam.", exampleEN: "We live in Amsterdam." },
            { prompt: "Jullie leren ...", example: "Jullie leren Nederlands.", exampleEN: "You (plural) learn Dutch." },
            { prompt: "Zij slapen ...", example: "Zij slapen in bed.", exampleEN: "They sleep in bed." },
            { prompt: "Zij eet ...", example: "Zij eet een appel.", exampleEN: "She eats an apple." },
            { prompt: "Wij koken ...", example: "Wij koken eten.", exampleEN: "We cook food." },
            { prompt: "De baby ...", example: "De baby huilt.", exampleEN: "The baby cries." },
            { prompt: "Mijn zoon ...", example: "Mijn zoon studeert.", exampleEN: "My son studies." },
            { prompt: "Onze buren ...", example: "Onze buren zijn aardig.", exampleEN: "Our neighbors are nice." },
            { prompt: "De bomen in mijn tuin ...", example: "De bomen in mijn tuin zijn groot.", exampleEN: "The trees in my garden are big." },
            { prompt: "De kinderen van de buren ...", example: "De kinderen van de buren spelen buiten.", exampleEN: "The neighbors' children play outside." },
            { prompt: "De auto voor de deur ...", example: "De auto voor de deur is rood.", exampleEN: "The car in front of the door is red." },
            { prompt: "De winkels in het winkelcentrum ...", example: "De winkels in het winkelcentrum zijn open.", exampleEN: "The stores in the shopping center are open." },
            { prompt: "Mijn bril ...", example: "Mijn bril ligt op tafel.", exampleEN: "My glasses are on the table." }
        ]
    },

    // OPDRACHT 2: Sentences with Two Verbs (Modal Verbs)
    {
        id: 2,
        title: "Opdracht 2: Zinnen met twee werkwoorden",
        titleEN: "Exercise 2: Sentences with Two Verbs",
        type: "modal",
        instructionNL: "Maak de zinnen af (gebruik twee werkwoorden: wil, mag, moet, kan, ga, zal).",
        instructionEN: "Complete the sentences (use two verbs: want to, may, must, can, going to, will).",
        grammarTip: "Modal verb + rest + infinitive at the end",
        exercises: [
            { prompt: "Mijn moeder wil ...", example: "Mijn moeder wil morgen boodschappen doen.", exampleEN: "My mother wants to do shopping tomorrow." },
            { prompt: "De jongen mag ...", example: "De jongen mag buiten spelen.", exampleEN: "The boy may play outside." },
            { prompt: "Vader kan ...", example: "Vader kan goed koken.", exampleEN: "Father can cook well." },
            { prompt: "Jan en Kees moeten ...", example: "Jan en Kees moeten naar school gaan.", exampleEN: "Jan and Kees must go to school." },
            { prompt: "Wij gaan het huiswerk ...", example: "Wij gaan het huiswerk maken.", exampleEN: "We are going to do the homework." },
            { prompt: "De docenten willen ...", example: "De docenten willen de toets nakijken.", exampleEN: "The teachers want to grade the test." },
            { prompt: "Jammer, ik kan niet mee. Ik moet morgen ...", example: "Ik moet morgen werken.", exampleEN: "I must work tomorrow." },
            { prompt: "Het jongetje kan ...", example: "Het jongetje kan al lopen.", exampleEN: "The little boy can already walk." },
            { prompt: "Ik wil vandaag niet ...", example: "Ik wil vandaag niet werken.", exampleEN: "I don't want to work today." },
            { prompt: "Ik mag van mijn moeder ...", example: "Ik mag van mijn moeder naar het feest gaan.", exampleEN: "My mother allows me to go to the party." },
            { prompt: "De kinderen mogen ...", example: "De kinderen mogen televisie kijken.", exampleEN: "The children may watch television." },
            { prompt: "Wij gaan ...", example: "Wij gaan morgen naar de markt gaan.", exampleEN: "We are going to the market tomorrow." },
            { prompt: "Koning Willem Alexander moet ...", example: "Koning Willem Alexander moet veel reizen.", exampleEN: "King Willem Alexander must travel a lot." },
            { prompt: "De kinderen van de koning mogen ...", example: "De kinderen van de koning mogen naar een speciale school gaan.", exampleEN: "The king's children may go to a special school." },
            { prompt: "Het is mooi weer. Wij willen vandaag ...", example: "Wij willen vandaag naar het park gaan.", exampleEN: "We want to go to the park today." },
            { prompt: "Het is buiten koud. Ik zal ...", example: "Ik zal een warme jas aantrekken.", exampleEN: "I will put on a warm coat." },
            { prompt: "Sinterklaas is in Nederland. Ik zal ...", example: "Ik zal mijn schoen zetten.", exampleEN: "I will put out my shoe." }
        ]
    },

    // OPDRACHT 3: Conjunctions (want, en, maar, dus)
    {
        id: 3,
        title: "Opdracht 3: Zinnen met want, en, maar, dus",
        titleEN: "Exercise 3: Sentences with Conjunctions",
        type: "conjunction",
        instructionNL: "Maak de zinnen af met want (because), en (and), maar (but), of dus (so).",
        instructionEN: "Complete the sentences with want (because), en (and), maar (but), or dus (so).",
        grammarTip: "Main clause + conjunction + main clause",
        exercises: [
            { prompt: "Ik koop een cadeau voor mijn vrouw en ...", example: "... zij koopt een cadeau voor mij.", exampleEN: "... she buys a present for me." },
            { prompt: "Zij neemt een paracetamol in, want ...", example: "... zij heeft hoofdpijn.", exampleEN: "... she has a headache." },
            { prompt: "De vrouw gaat naar bed, maar ...", example: "... zij kan niet slapen.", exampleEN: "... she cannot sleep." },
            { prompt: "De gasten eten beschuit met muisjes, want ...", example: "... er is een baby geboren.", exampleEN: "... a baby was born." },
            { prompt: "Zij kopen sinaasappels op de markt en ...", example: "... zij kopen ook appels.", exampleEN: "... they also buy apples." },
            { prompt: "De groente is duur, maar ...", example: "... het is wel vers.", exampleEN: "... it is fresh." },
            { prompt: "Ik ga dit jaar niet op vakantie, dus ...", example: "... ik blijf thuis.", exampleEN: "... I stay home." },
            { prompt: "De koningin komt dit jaar niet naar onze stad, want ...", example: "... zij is ziek.", exampleEN: "... she is sick." },
            { prompt: "Buiten is het erg nat en ...", example: "... het is koud.", exampleEN: "... it is cold." },
            { prompt: "De kinderen krijgen een nieuwe jas, maar ...", example: "... zij willen een nieuwe broek.", exampleEN: "... they want new pants." },
            { prompt: "Ik kan de jas met korting kopen en ...", example: "... dat is goedkoop.", exampleEN: "... that is cheap." },
            { prompt: "Ik kan niet slapen, dus ...", example: "... ik lees een boek.", exampleEN: "... I read a book." },
            { prompt: "De tomaten zijn heel erg lekker, maar ...", example: "... zij zijn duur.", exampleEN: "... they are expensive." },
            { prompt: "Ik ga na het inburgeringsexamen op vakantie, want ...", example: "... ik ben moe.", exampleEN: "... I am tired." },
            { prompt: "Zij studeert hard, maar ...", example: "... zij haalt geen goede cijfers.", exampleEN: "... she doesn't get good grades." },
            { prompt: "De collega's geven een feest, maar ...", example: "... ik kan niet komen.", exampleEN: "... I cannot come." },
            { prompt: "Het feest is heel laat, dus ...", example: "... ik ga morgen laat naar bed.", exampleEN: "... I will go to bed late tomorrow." },
            { prompt: "Wij willen niet naar bed, want ...", example: "... de film is nog niet klaar.", exampleEN: "... the movie is not finished yet." },
            { prompt: "Het restaurant is goed en ...", example: "... het eten is lekker.", exampleEN: "... the food is delicious." },
            { prompt: "Mijn broertje slaapt boven en ...", example: "... ik slaap beneden.", exampleEN: "... I sleep downstairs." }
        ]
    },

    // OPDRACHT 4: Sentences with "omdat" (because - subordinate clause)
    {
        id: 4,
        title: "Opdracht 4: Zinnen met omdat",
        titleEN: "Exercise 4: Sentences with 'omdat' (because)",
        type: "omdat",
        instructionNL: "Maak de zinnen af met 'omdat' (let op: werkwoord aan het einde!).",
        instructionEN: "Complete the sentences with 'omdat' (note: verb at the end!).",
        grammarTip: "Main clause + omdat + subject + ... + verb(s)",
        exercises: [
            { prompt: "Ik koop een cadeau voor mijn vrouw, omdat ...", example: "... zij morgen jarig is.", exampleEN: "... it's her birthday tomorrow." },
            { prompt: "Zij neemt een paracetamol in, omdat ...", example: "... zij hoofdpijn heeft.", exampleEN: "... she has a headache." },
            { prompt: "De vrouw gaat naar bed, omdat ...", example: "... zij moe is.", exampleEN: "... she is tired." },
            { prompt: "De gasten eten beschuit met muisjes, omdat ...", example: "... er een baby is geboren.", exampleEN: "... a baby was born." },
            { prompt: "Zij kopen sinaasappels op de markt, omdat ...", example: "... die daar goedkoop zijn.", exampleEN: "... they are cheap there." },
            { prompt: "De winkels zijn vandaag gesloten, omdat ...", example: "... het zondag is.", exampleEN: "... it is Sunday." },
            { prompt: "Ik ga dit jaar niet op vakantie, omdat ...", example: "... ik geen geld heb.", exampleEN: "... I have no money." },
            { prompt: "De koningin komt dit jaar niet naar onze stad, omdat ...", example: "... zij ziek is.", exampleEN: "... she is sick." },
            { prompt: "Buiten is het erg nat, omdat ...", example: "... het regent.", exampleEN: "... it is raining." },
            { prompt: "De kinderen krijgen een nieuwe jas, omdat ...", example: "... hun oude jas te klein is.", exampleEN: "... their old coat is too small." },
            { prompt: "Ik kan de jas met korting kopen, omdat ...", example: "... er uitverkoop is.", exampleEN: "... there is a sale." },
            { prompt: "Ik kan niet slapen, omdat ...", example: "... het te warm is.", exampleEN: "... it is too hot." },
            { prompt: "De tomaten zijn heel erg lekker, omdat ...", example: "... zij vers zijn.", exampleEN: "... they are fresh." },
            { prompt: "Ik ga na het inburgeringsexamen op vakantie, omdat ...", example: "... ik dan vrij heb.", exampleEN: "... I will be free then." },
            { prompt: "Ik koop een cadeau voor mijn moeder, omdat ...", example: "... zij jarig is.", exampleEN: "... it's her birthday." },
            { prompt: "Wij gaan naar Spanje, omdat ...", example: "... het daar warm is.", exampleEN: "... it is warm there." },
            { prompt: "Zij maken het huis schoon, omdat ...", example: "... er gasten komen.", exampleEN: "... guests are coming." },
            { prompt: "De kinderen huilen, omdat ...", example: "... zij verdrietig zijn.", exampleEN: "... they are sad." },
            { prompt: "Mijn kamer is vies, omdat ...", example: "... ik hem niet heb schoongemaakt.", exampleEN: "... I haven't cleaned it." },
            { prompt: "Opa werkt in de tuin, omdat ...", example: "... hij van tuinieren houdt.", exampleEN: "... he loves gardening." },
            { prompt: "De baby drinkt veel, omdat ...", example: "... hij dorst heeft.", exampleEN: "... he is thirsty." }
        ]
    },

    // OPDRACHT 5: Sentences with "als" (if/when - conditional)
    {
        id: 5,
        title: "Opdracht 5: Zinnen met als",
        titleEN: "Exercise 5: Sentences with 'als' (if/when)",
        type: "als",
        instructionNL: "Maak de zinnen af met 'als' (let op: werkwoord aan het einde!).",
        instructionEN: "Complete the sentences with 'als' (note: verb at the end!).",
        grammarTip: "Main clause + als + subject + ... + verb(s)",
        exercises: [
            { prompt: "Ik koop een cadeau voor mijn vrouw, als ...", example: "... zij jarig is.", exampleEN: "... it's her birthday." },
            { prompt: "Zij neemt een paracetamol in, als ...", example: "... zij hoofdpijn heeft.", exampleEN: "... she has a headache." },
            { prompt: "De vrouw gaat naar bed, als ...", example: "... zij moe is.", exampleEN: "... she is tired." },
            { prompt: "De gasten eten beschuit met muisjes, als ...", example: "... er een baby is geboren.", exampleEN: "... a baby is born." },
            { prompt: "Zij kopen sinaasappels op de markt, als ...", example: "... die goedkoop zijn.", exampleEN: "... they are cheap." },
            { prompt: "Ik maak mijn huiswerk, als ...", example: "... ik thuis ben.", exampleEN: "... I am home." },
            { prompt: "Ik ga dit jaar niet op vakantie, als ...", example: "... ik geen geld heb.", exampleEN: "... I have no money." },
            { prompt: "De koningin komt dit jaar niet naar onze stad, als ...", example: "... zij ziek is.", exampleEN: "... she is sick." },
            { prompt: "Buiten is het erg nat, als ...", example: "... het regent.", exampleEN: "... it rains." },
            { prompt: "De kinderen krijgen een nieuwe jas, als ...", example: "... hun oude jas te klein is.", exampleEN: "... their old coat is too small." },
            { prompt: "Ik kan de jas met korting kopen, als ...", example: "... er uitverkoop is.", exampleEN: "... there is a sale." },
            { prompt: "Ik kan niet slapen, als ...", example: "... het te warm is.", exampleEN: "... it is too hot." },
            { prompt: "De tomaten zijn heel erg lekker, als ...", example: "... zij vers zijn.", exampleEN: "... they are fresh." },
            { prompt: "Ik ga op vakantie, als ...", example: "... ik geld heb.", exampleEN: "... I have money." },
            { prompt: "Ik koop een cadeau voor mijn moeder, als ...", example: "... zij jarig is.", exampleEN: "... it's her birthday." },
            { prompt: "Wij gaan naar het strand, als ...", example: "... het mooi weer is.", exampleEN: "... the weather is nice." },
            { prompt: "Zij eten, als ...", example: "... zij honger hebben.", exampleEN: "... they are hungry." },
            { prompt: "De vogels vliegen naar het zuiden, als ...", example: "... het winter wordt.", exampleEN: "... it becomes winter." },
            { prompt: "De studenten leren de woorden, als ...", example: "... zij een toets hebben.", exampleEN: "... they have a test." },
            { prompt: "De school sluit, als ...", example: "... het vakantie is.", exampleEN: "... it is vacation." },
            { prompt: "Je moet naar de dokter, als ...", example: "... je ziek bent.", exampleEN: "... you are sick." },
            { prompt: "Wij slapen lang uit, als ...", example: "... het weekend is.", exampleEN: "... it is the weekend." },
            { prompt: "Ik ga naar buiten, als ...", example: "... het mooi weer is.", exampleEN: "... the weather is nice." }
        ]
    }
];
