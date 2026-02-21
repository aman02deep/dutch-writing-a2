/**
 * Sentence Bank — 80 reusable Dutch/English sentence pairs for A2 writing exam.
 * Organized in 13 categories covering all common exam scenarios.
 */

// Exam context tips for each category
const categoryTips = {
    "Opening (Formal)": "Every formal email starts this way — complaints, requests, registrations, cancellations.",
    "Opening (Informal)": "Messages to friends, family, neighbors — invitations, thank-you notes, asking for help.",
    "Reason for Writing": "Almost every exam task starts with: 'Schrijf waarom je schrijft' — explain your purpose.",
    "Asking Questions": "Tasks like 'Stel 3 korte vragen' — garage rental, gym info, course details.",
    "Apologising": "Sick notes to boss, cancelling doctor appointments, can't attend school meetings.",
    "Requesting": "Making appointments, registering for courses, asking for refunds, requesting help.",
    "Giving Info": "'Geef je naam, adres en telefoonnummer' — appears on nearly every exam task.",
    "Inviting": "Birthday parties, dinners, barbecues, housewarming — common long email topics.",
    "Complaining": "Broken products, bad service, course complaints — formal emails with receipt details.",
    "Thanking": "Thank-you notes to neighbors, friends, or formal replies to helpful services.",
    "Closing (Formal)": "Every formal email needs a proper closing — 'Met vriendelijke groet' is essential.",
    "Closing (Informal)": "Casual sign-offs for messages to friends and family.",
    "Connectors": "Glue words (daarom, helaas, ook, omdat) to link sentences and hit the word count.",
    "Time & Date": "Slot these into almost any sentence — complaints need 'al X weken lang', requests need 'zo snel mogelijk', availability needs day/time fragments.",
    "Reason Clause": "'Omdat' clauses are the most reusable fragments — one clause plugs into apologies, complaints, cancellations, and explanations.",
    "Verb Ending": "These are the second half of 'Ik wil graag...' and 'Is het mogelijk om...' — keep these handy to complete any request or question.",
    "Degree Words": "Single words that change the tone of any sentence — 'helaas' makes it an apology, 'heel graag' makes it enthusiastic, 'misschien' softens a request."
};

const sentenceBankData = [
    // ─── 1. OPENING FORMAL ────────────────────────────────────────────
    { id: 1, cat: "Opening (Formal)", nl: "Geachte heer/mevrouw,", en: "Dear sir/madam," },
    { id: 2, cat: "Opening (Formal)", nl: "Beste meneer Van Dijk,", en: "Dear Mr. Van Dijk," },
    { id: 3, cat: "Opening (Formal)", nl: "Beste mevrouw Jansen,", en: "Dear Mrs. Jansen," },
    { id: 4, cat: "Opening (Formal)", nl: "Mijn naam is [naam] en ik schrijf u deze e-mail omdat...", en: "My name is [name] and I write you this email because..." },
    { id: 5, cat: "Opening (Formal)", nl: "Ik schrijf u omdat ik een vraag heb.", en: "I write to you because I have a question." },
    { id: 6, cat: "Opening (Formal)", nl: "Ik schrijf deze brief naar aanleiding van uw advertentie.", en: "I write this letter in response to your advertisement." },

    // ─── 2. OPENING INFORMAL ──────────────────────────────────────────
    { id: 7, cat: "Opening (Informal)", nl: "Hoi [naam]!", en: "Hi [name]!" },
    { id: 8, cat: "Opening (Informal)", nl: "Hallo [naam], hoe gaat het?", en: "Hello [name], how are you?" },
    { id: 9, cat: "Opening (Informal)", nl: "Lieve [naam],", en: "Dear [name]," },
    { id: 10, cat: "Opening (Informal)", nl: "Ik hoop dat het goed met je gaat.", en: "I hope you are doing well." },
    { id: 11, cat: "Opening (Informal)", nl: "Leuk om van je te horen!", en: "Nice to hear from you!" },

    // ─── 3. REASON FOR WRITING ────────────────────────────────────────
    { id: 12, cat: "Reason for Writing", nl: "Ik schrijf omdat ik informatie nodig heb over...", en: "I write because I need information about..." },
    { id: 13, cat: "Reason for Writing", nl: "Ik schrijf u omdat ik een afspraak wil maken.", en: "I write to you because I want to make an appointment." },
    { id: 14, cat: "Reason for Writing", nl: "Ik schrijf omdat ik een probleem heb.", en: "I write because I have a problem." },
    { id: 15, cat: "Reason for Writing", nl: "Ik heb uw advertentie gezien en ik ben geïnteresseerd.", en: "I saw your advertisement and I am interested." },
    { id: 16, cat: "Reason for Writing", nl: "Ik neem contact met u op omdat...", en: "I am contacting you because..." },
    { id: 17, cat: "Reason for Writing", nl: "De reden dat ik schrijf is...", en: "The reason I write is..." },

    // ─── 4. ASKING QUESTIONS ──────────────────────────────────────────
    { id: 18, cat: "Asking Questions", nl: "Kunt u mij meer informatie geven over...?", en: "Can you give me more information about...?" },
    { id: 19, cat: "Asking Questions", nl: "Wat zijn de openingstijden?", en: "What are the opening hours?" },
    { id: 20, cat: "Asking Questions", nl: "Wat kost het per maand?", en: "How much does it cost per month?" },
    { id: 21, cat: "Asking Questions", nl: "Wanneer kan ik een afspraak maken?", en: "When can I make an appointment?" },
    { id: 22, cat: "Asking Questions", nl: "Is het mogelijk om...?", en: "Is it possible to...?" },
    { id: 23, cat: "Asking Questions", nl: "Kunt u mij helpen?", en: "Can you help me?" },
    { id: 24, cat: "Asking Questions", nl: "Heeft u ook...?", en: "Do you also have...?" },
    { id: 25, cat: "Asking Questions", nl: "Wanneer begint de cursus?", en: "When does the course start?" },

    // ─── 5. APOLOGISING / EXPLAINING ──────────────────────────────────
    { id: 26, cat: "Apologising", nl: "Helaas kan ik niet komen omdat ik moet werken.", en: "Unfortunately I cannot come because I have to work." },
    { id: 27, cat: "Apologising", nl: "Het spijt me, maar ik kan de afspraak niet nakomen.", en: "I'm sorry, but I cannot keep the appointment." },
    { id: 28, cat: "Apologising", nl: "Sorry voor het ongemak.", en: "Sorry for the inconvenience." },
    { id: 29, cat: "Apologising", nl: "Ik ben ziek en kan niet naar mijn werk komen.", en: "I am sick and cannot come to work." },
    { id: 30, cat: "Apologising", nl: "Ik moet helaas mijn afspraak afzeggen.", en: "I unfortunately have to cancel my appointment." },
    { id: 31, cat: "Apologising", nl: "Ik kan vandaag niet komen omdat ik koorts heb.", en: "I cannot come today because I have a fever." },

    // ─── 6. REQUESTING SOMETHING ──────────────────────────────────────
    { id: 32, cat: "Requesting", nl: "Ik wil graag een afspraak maken.", en: "I would like to make an appointment." },
    { id: 33, cat: "Requesting", nl: "Kunt u mij een nieuwe afspraak geven?", en: "Can you give me a new appointment?" },
    { id: 34, cat: "Requesting", nl: "Ik wil me graag inschrijven voor de cursus.", en: "I would like to register for the course." },
    { id: 35, cat: "Requesting", nl: "Ik wil graag mijn geld terug.", en: "I would like my money back." },
    { id: 36, cat: "Requesting", nl: "Kunt u het probleem oplossen?", en: "Can you solve the problem?" },
    { id: 37, cat: "Requesting", nl: "Ik wil graag meer informatie ontvangen.", en: "I would like to receive more information." },
    { id: 38, cat: "Requesting", nl: "Kun je mij helpen met verhuizen?", en: "Can you help me with moving?" },

    // ─── 7. GIVING PERSONAL INFORMATION ───────────────────────────────
    { id: 39, cat: "Giving Info", nl: "Mijn naam is [voornaam achternaam].", en: "My name is [first name last name]." },
    { id: 40, cat: "Giving Info", nl: "Ik woon op [straatnaam] [nummer] in [stad].", en: "I live at [street name] [number] in [city]." },
    { id: 41, cat: "Giving Info", nl: "Mijn telefoonnummer is [nummer].", en: "My phone number is [number]." },
    { id: 42, cat: "Giving Info", nl: "Mijn e-mailadres is [adres].", en: "My email address is [address]." },
    { id: 43, cat: "Giving Info", nl: "Ik ben [leeftijd] jaar oud.", en: "I am [age] years old." },
    { id: 44, cat: "Giving Info", nl: "Ik kan op maandag en woensdag.", en: "I am available on Monday and Wednesday." },
    { id: 45, cat: "Giving Info", nl: "Ik kan 's avonds komen, na 17:00 uur.", en: "I can come in the evening, after 17:00." },

    // ─── 8. INVITING ──────────────────────────────────────────────────
    { id: 46, cat: "Inviting", nl: "Ik wil je graag uitnodigen voor een feestje.", en: "I would like to invite you to a party." },
    { id: 47, cat: "Inviting", nl: "Het feest is op [datum] om [tijd].", en: "The party is on [date] at [time]." },
    { id: 48, cat: "Inviting", nl: "Je bent van harte welkom!", en: "You are most welcome!" },
    { id: 49, cat: "Inviting", nl: "Kom je ook? Laat het me weten.", en: "Are you coming too? Let me know." },
    { id: 50, cat: "Inviting", nl: "Je mag je partner ook meenemen.", en: "You can bring your partner too." },
    { id: 51, cat: "Inviting", nl: "We gaan eten en drinken.", en: "We are going to eat and drink." },
    { id: 52, cat: "Inviting", nl: "Komen jullie morgen koffie drinken?", en: "Will you come for coffee tomorrow?" },

    // ─── 9. COMPLAINING ───────────────────────────────────────────────
    { id: 53, cat: "Complaining", nl: "Ik ben niet tevreden over het product.", en: "I am not satisfied with the product." },
    { id: 54, cat: "Complaining", nl: "Ik heb een klacht over de service.", en: "I have a complaint about the service." },
    { id: 55, cat: "Complaining", nl: "Het product dat ik heb ontvangen is kapot.", en: "The product I received is broken." },
    { id: 56, cat: "Complaining", nl: "Ik heb vorige week een [product] gekocht voor [bedrag] euro.", en: "I bought a [product] last week for [amount] euros." },
    { id: 57, cat: "Complaining", nl: "Ik wil graag een oplossing voor dit probleem.", en: "I would like a solution to this problem." },
    { id: 58, cat: "Complaining", nl: "Ik heb de bon nog.", en: "I still have the receipt." },

    // ─── 10. THANKING ─────────────────────────────────────────────────
    { id: 59, cat: "Thanking", nl: "Bedankt voor je hulp!", en: "Thanks for your help!" },
    { id: 60, cat: "Thanking", nl: "Hartelijk dank voor uw snelle reactie.", en: "Thank you very much for your quick response." },
    { id: 61, cat: "Thanking", nl: "Dat was heel aardig van je.", en: "That was very kind of you." },
    { id: 62, cat: "Thanking", nl: "Ik waardeer uw hulp zeer.", en: "I appreciate your help very much." },
    { id: 63, cat: "Thanking", nl: "Alvast bedankt voor uw antwoord.", en: "Thank you in advance for your reply." },

    // ─── 11. CLOSING FORMAL ───────────────────────────────────────────
    { id: 64, cat: "Closing (Formal)", nl: "Met vriendelijke groet,", en: "Kind regards," },
    { id: 65, cat: "Closing (Formal)", nl: "Ik hoor graag van u.", en: "I look forward to hearing from you." },
    { id: 66, cat: "Closing (Formal)", nl: "Ik wacht op uw antwoord.", en: "I await your reply." },
    { id: 67, cat: "Closing (Formal)", nl: "Bij voorbaat dank.", en: "Thank you in advance." },
    { id: 68, cat: "Closing (Formal)", nl: "U kunt mij bereiken op [telefoonnummer].", en: "You can reach me at [phone number]." },

    // ─── 12. CLOSING INFORMAL ─────────────────────────────────────────
    { id: 69, cat: "Closing (Informal)", nl: "Groetjes,", en: "Cheers," },
    { id: 70, cat: "Closing (Informal)", nl: "Tot snel!", en: "See you soon!" },
    { id: 71, cat: "Closing (Informal)", nl: "Tot zaterdag!", en: "See you Saturday!" },
    { id: 72, cat: "Closing (Informal)", nl: "Kusjes,", en: "Kisses," },
    { id: 73, cat: "Closing (Informal)", nl: "Laat me weten of je kunt komen.", en: "Let me know if you can come." },
    { id: 74, cat: "Closing (Informal)", nl: "Bel me als je vragen hebt.", en: "Call me if you have questions." },

    // ─── 13. CONNECTORS & TRANSITIONS ─────────────────────────────────
    { id: 75, cat: "Connectors", nl: "Daarom wil ik graag...", en: "Therefore I would like to..." },
    { id: 76, cat: "Connectors", nl: "Helaas is het niet mogelijk om...", en: "Unfortunately it is not possible to..." },
    { id: 77, cat: "Connectors", nl: "Ook wil ik graag weten...", en: "I would also like to know..." },
    { id: 78, cat: "Connectors", nl: "Bovendien heb ik nog een vraag.", en: "Furthermore, I have another question." },
    { id: 79, cat: "Connectors", nl: "Omdat ik ziek ben, kan ik niet komen.", en: "Because I am sick, I cannot come." },
    { id: 80, cat: "Connectors", nl: "Ik hoop dat u mij kunt helpen.", en: "I hope you can help me." },
    { id: 81, cat: "Connectors", nl: "Verder wil ik u laten weten dat...", en: "Furthermore, I want to let you know that..." },
    { id: 82, cat: "Connectors", nl: "Ten slotte wil ik zeggen dat...", en: "Finally, I would like to say that..." },

    // ─── 14. TIME & DATE FRAGMENTS ────────────────────────────────────
    { id: 83, cat: "Time & Date", nl: "zo snel mogelijk", en: "as soon as possible" },
    { id: 84, cat: "Time & Date", nl: "volgende week", en: "next week" },
    { id: 85, cat: "Time & Date", nl: "op maandag of dinsdag", en: "on Monday or Tuesday" },
    { id: 86, cat: "Time & Date", nl: "om 10 uur 's ochtends", en: "at 10 o'clock in the morning" },
    { id: 87, cat: "Time & Date", nl: "in de ochtend / 's middags / 's avonds", en: "in the morning / afternoon / evening" },
    { id: 88, cat: "Time & Date", nl: "vanaf [datum]", en: "from [date] onwards" },
    { id: 89, cat: "Time & Date", nl: "voor [datum]", en: "before [date]" },
    { id: 90, cat: "Time & Date", nl: "al [X] weken lang", en: "for [X] weeks already" },

    // ─── 15. REASON CLAUSES ───────────────────────────────────────────
    { id: 91, cat: "Reason Clause", nl: "omdat ik ziek ben", en: "because I am sick" },
    { id: 92, cat: "Reason Clause", nl: "omdat ik moet werken", en: "because I have to work" },
    { id: 93, cat: "Reason Clause", nl: "omdat ik geen tijd heb", en: "because I don't have time" },
    { id: 94, cat: "Reason Clause", nl: "omdat ik het niet wist", en: "because I didn't know" },
    { id: 95, cat: "Reason Clause", nl: "want ik heb een afspraak", en: "because I have an appointment" },
    { id: 96, cat: "Reason Clause", nl: "omdat mijn kind ziek is", en: "because my child is sick" },
    { id: 97, cat: "Reason Clause", nl: "omdat het product kapot is", en: "because the product is broken" },
    { id: 98, cat: "Reason Clause", nl: "omdat ik een nieuwe baan heb", en: "because I have a new job" },

    // ─── 16. VERB ENDINGS ─────────────────────────────────────────────
    { id: 99, cat: "Verb Ending", nl: "een afspraak maken", en: "make an appointment" },
    { id: 100, cat: "Verb Ending", nl: "meer informatie ontvangen", en: "receive more information" },
    { id: 101, cat: "Verb Ending", nl: "het probleem oplossen", en: "solve the problem" },
    { id: 102, cat: "Verb Ending", nl: "mij terugbellen", en: "call me back" },
    { id: 103, cat: "Verb Ending", nl: "een formulier invullen", en: "fill in a form" },
    { id: 104, cat: "Verb Ending", nl: "mijn geld terugkrijgen", en: "get my money back" },
    { id: 105, cat: "Verb Ending", nl: "inschrijven voor de cursus", en: "register for the course" },
    { id: 106, cat: "Verb Ending", nl: "een nieuwe datum afspreken", en: "agree on a new date" },
    { id: 107, cat: "Verb Ending", nl: "het product terugsturen", en: "send the product back" },
    { id: 108, cat: "Verb Ending", nl: "langs komen", en: "come by / drop in" },

    // ─── 17. DEGREE & SOFTENING WORDS ────────────────────────────────
    { id: 109, cat: "Degree Words", nl: "heel graag", en: "very much / really like to" },
    { id: 110, cat: "Degree Words", nl: "misschien", en: "maybe / perhaps" },
    { id: 111, cat: "Degree Words", nl: "helaas", en: "unfortunately" },
    { id: 112, cat: "Degree Words", nl: "graag", en: "gladly / I'd like to" },
    { id: 113, cat: "Degree Words", nl: "zeker", en: "certainly / definitely" },
    { id: 114, cat: "Degree Words", nl: "misschien kunt u...", en: "perhaps you could..." },
    { id: 115, cat: "Degree Words", nl: "nog even", en: "just quickly / for a moment" },
    { id: 116, cat: "Degree Words", nl: "ook nog", en: "also / as well" }
];
