// Sample answers for writing tasks
var sampleAnswers = {
    1: {
        nl: `Beste mevrouw De Vries,

Ik wil graag een afspraak maken voor volgende week dinsdag of woensdag. Ik kan tussen 10:00 en 15:00 uur. Kunt u mij laten weten welke tijd mogelijk is?

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Mrs. De Vries, I would like to make an appointment for next week Tuesday or Wednesday. I can come between 10:00 and 15:00. Can you let me know which time is possible? Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ Clear request | ✓ Specific times | ✓ Polite closing | ✓ 45 words"
    },
    2: {
        nl: `Hoi Lisa,

Bedankt voor je uitnodiging! Ik kom graag naar je verjaardag op zaterdag. Mag ik iets te eten meenemen? Laat het me weten. Tot zaterdag!

Groetjes,
[Uw naam]`,
        en: "Hi Lisa, Thanks for your invitation! I'd love to come to your birthday on Saturday. Can I bring something to eat? Let me know. See you Saturday! Greetings, [Your name]",
        notes: "✓ Informal greeting | ✓ Accept invitation | ✓ Offer to help | ✓ Friendly tone | ✓ 42 words"
    },
    3: {
        nl: `Geachte heer/mevrouw,

Ik heb vorige week een blauwe jas in de trein laten liggen. Het was op lijn 5 van Amsterdam naar Utrecht, op dinsdag 15 maart om 14:30 uur. In de jas zit mijn portemonnee met mijn ID-kaart. Kunt u mij helpen? Mijn telefoonnummer is 06-12345678.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I left a blue jacket in the train last week. It was on line 5 from Amsterdam to Utrecht, on Tuesday March 15 at 14:30. My wallet with my ID card is in the jacket. Can you help me? My phone number is 06-12345678. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ Clear description | ✓ Specific details | ✓ Contact info | ✓ 82 words"
    },
    4: {
        nl: `Beste Jan,

Wat leuk dat je naar Nederland komt! Je kunt bij mij logeren. Ik woon in Amsterdam, dicht bij het centrum. Er zijn veel musea en restaurants. We kunnen samen naar het Van Gogh Museum en de grachten. Ik kan je ook Nederlandse gerechten laten proeven. Wanneer kom je precies? Laat het me snel weten!

Groeten,
[Uw naam]`,
        en: "Dear Jan, How nice that you're coming to the Netherlands! You can stay with me. I live in Amsterdam, close to the center. There are many museums and restaurants. We can go to the Van Gogh Museum and the canals together. I can also let you taste Dutch dishes. When exactly are you coming? Let me know soon! Greetings, [Your name]",
        notes: "✓ Friendly greeting | ✓ Offer accommodation | ✓ Suggest activities | ✓ Ask for details | ✓ 88 words"
    },
    5: {
        nl: `Hoi Robert,

Ik moet vandaag overwerken tot vijf uur. Kun jij de kinderen ophalen van school?

Tanja en Patrick zijn om kwart over drie klaar. Ik ben om half zes thuis.

Kusjes,
[Uw naam]`,
        en: "Hi Robert, I have to work late until five o'clock today. Can you pick up the children from school? Tanja and Patrick finish at quarter past three. I'll be home at half past five. Kisses, [Your name]",
        notes: "✓ Informal greeting | ✓ Explain situation | ✓ Make request | ✓ Give specific times | ✓ 42 words"
    },
    6: {
        nl: `Beste buren,

Bedankt voor jullie hulp gisteren! Het was heel aardig van jullie.

Komen jullie morgen koffie drinken?

Groetjes,
[Uw naam]`,
        en: "Dear neighbors, Thank you for your help yesterday! It was very kind of you. Would you like to come for coffee tomorrow? Greetings, [Your name]",
        notes: "✓ Friendly greeting | ✓ Express gratitude | ✓ Invitation | ✓ Warm closing | ✓ 38 words"
    },
    7: {
        nl: `Geachte heer/mevrouw,

Vorige week dinsdag heb ik een jas gekocht in uw winkel. De jas kostte 89 euro. Toen ik thuiskwam, zag ik dat er een gat in de mouw zit.

Ik ben niet tevreden met de jas. Ik wil de jas terugbrengen en mijn geld terug. Ik heb de bon nog.

Wanneer kan ik naar de winkel komen? Ik kan op woensdag of donderdag.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, Last Tuesday I bought a jacket in your store. The jacket cost 89 euros. When I got home, I saw there's a hole in the sleeve. I'm not satisfied with the jacket. I want to return it and get my money back. I still have the receipt. When can I come to the store? I can come on Wednesday or Thursday. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ Specific details | ✓ Clear complaint | ✓ State desired outcome | ✓ 85 words"
    },
    8: {
        nl: `Geachte FitLife,

Ik heb uw advertentie gezien. Ik ben geïnteresseerd in een abonnement bij uw sportschool.

Ik wil graag zwemmen en fitnessen. Wat kost een abonnement per maand? Zijn er speciale aanbiedingen voor nieuwe leden?

Ik kan op maandag, woensdag en vrijdag 's avonds komen. Welke tijden zijn er dan?

Kunt u mij meer informatie sturen?

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear FitLife, I saw your advertisement. I'm interested in a membership at your gym. I would like to swim and do fitness. What does a membership cost per month? Are there special offers for new members? I can come on Monday, Wednesday and Friday evenings. What times are available then? Can you send me more information? Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ Express interest | ✓ Ask specific questions | ✓ State availability | ✓ 82 words"
    },
    9: {
        nl: `Beste Maria,

Volgende week zaterdag (15 maart) ben ik jarig! Ik geef een feestje en ik wil je graag uitnodigen.

Het feest begint om zeven uur 's avonds. Mijn adres is [Adres]. We gaan eten en daarna is er taart.

Je mag je man ook meenemen als je wilt.

Tot zaterdag!

Groetjes,
[Uw naam]`,
        en: "Dear Maria, Next Saturday (March 15) is my birthday! I'm having a party and I'd like to invite you. The party starts at seven o'clock in the evening. My address is [Address]. We'll have dinner and then cake. You can bring your husband too if you want. See you Saturday! Greetings, [Your name]",
        notes: "✓ Friendly greeting | ✓ Clear invitation | ✓ Date, time, address | ✓ Activity details | ✓ 86 words"
    },
    10: {
        nl: `Geachte heer/mevrouw,

Ik heb vorige week dinsdag een lamp bij u gekocht. Helaas werkt de lamp niet. Ik heb alles geprobeerd, maar hij gaat niet aan.

Ik wil graag mijn geld terug. Ik heb de bon nog.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I bought a lamp from you last Tuesday. Unfortunately the lamp doesn't work. I've tried everything, but it won't turn on. I would like my money back. I still have the receipt. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ State problem clearly | ✓ Request refund | ✓ Mention receipt | ✓ 48 words"
    },
    11: {
        nl: `Beste Peter,

Bedankt voor je hulp met de verhuizing! Je hebt me echt geholpen met de zware dozen en de kast.

Kom je morgen koffie drinken? Dan kan ik je bedanken.

Groeten,
[Uw naam]`,
        en: "Dear Peter, Thanks for your help with the move! You really helped me with the heavy boxes and the closet. Would you like to come for coffee tomorrow? Then I can thank you properly. Greetings, [Your name]",
        notes: "✓ Friendly greeting | ✓ Specific thanks | ✓ Invitation to show gratitude | ✓ 44 words"
    },
    12: {
        nl: `Beste Yoga Studio,

Ik kan morgen helaas niet komen naar de yogales. Ik ben ziek en heb koorts.

Kan ik volgende week donderdag komen? Laat het me weten.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Yoga Studio, Unfortunately I can't come to yoga class tomorrow. I'm sick and have a fever. Can I come next Thursday instead? Let me know. Kind regards, [Your name]",
        notes: "✓ Polite greeting | ✓ Explain absence | ✓ Request alternative | ✓ 40 words"
    },
    13: {
        nl: `Geachte heer/mevrouw,

Ik heb vorige week dinsdag een lamp bij u gekocht. Helaas werkt de lamp niet. Ik heb alles geprobeerd, maar hij gaat niet aan.

Ik wil graag mijn geld terug. Ik heb de bon nog.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I bought a lamp from you last Tuesday. Unfortunately the lamp doesn't work. I've tried everything, but it won't turn on. I would like my money back. I still have the receipt. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ State problem clearly | ✓ Request refund | ✓ Mention receipt | ✓ 48 words"
    },
    14: {
        nl: `Beste Peter,

Bedankt voor je hulp met de verhuizing! Je hebt me echt geholpen met de zware dozen en de kast.

Kom je morgen koffie drinken? Dan kan ik je bedanken.

Groeten,
[Uw naam]`,
        en: "Dear Peter, Thanks for your help with the move! You really helped me with the heavy boxes and the closet. Would you like to come for coffee tomorrow? Then I can thank you properly. Greetings, [Your name]",
        notes: "✓ Friendly greeting | ✓ Specific thanks | ✓ Invitation to show gratitude | ✓ 44 words"
    },
    15: {
        nl: `Beste Yoga Studio,

Ik kan morgen helaas niet komen naar de yogales. Ik ben ziek en heb koorts.

Kan ik volgende week donderdag komen? Laat het me weten.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Yoga Studio, Unfortunately I can't come to yoga class tomorrow. I'm sick and have a fever. Can I come next Thursday instead? Let me know. Kind regards, [Your name]",
        notes: "✓ Polite greeting | ✓ Explain absence | ✓ Request alternative | ✓ 40 words"
    },
    16: {
        nl: `Geachte heer/mevrouw,

Ik ben geïnteresseerd in de Nederlandse cursus. Ik heb uw advertentie gezien.

Wat kost de cursus? En wanneer begint hij? Ik kan op maandag en woensdag.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I'm interested in the Dutch course. I saw your advertisement. How much does the course cost? And when does it start? I can come on Mondays and Wednesdays. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ Express interest | ✓ Ask key questions | ✓ State availability | ✓ 45 words"
    },
    17: {
        nl: `Beste collega's,

Ik organiseer een barbecue in mijn tuin! Het is op zaterdag 20 juni om 15:00 uur. Mijn adres is [Adres].

We gaan lekker eten, drinken en muziek luisteren. Er is vlees, vis en ook vegetarisch eten. Jullie hoeven niets mee te nemen.

Kunnen jullie komen? Laat het me voor 15 juni weten. Jullie mogen je partner ook meenemen!

Tot dan!

Groeten,
[Uw naam]`,
        en: "Dear colleagues, I'm organizing a barbecue in my garden! It's on Saturday June 20th at 3:00 PM. My address is [Address]. We're going to eat, drink and listen to music. There is meat, fish and vegetarian food. You don't need to bring anything. Can you come? Let me know before June 15th. You can bring your partner too! See you then! Greetings, [Your name]",
        notes: "✓ Friendly greeting | ✓ Clear invitation details | ✓ Menu info | ✓ RSVP request | ✓ 87 words"
    },
    18: {
        nl: `Hoi Marco,

Ik ga volgende maand naar Spanje! Ik weet dat jij daar vorig jaar hebt gewoond. Kun je me helpen?

Welke plaatsen moet ik zeker bezoeken? En ken je goede restaurants in Barcelona? Ik hou van vis en tapas.

Hoe is het weer in augustus? Is het erg warm? Wat moet ik meenemen?

Bedankt voor je hulp!

Groetjes,
[Uw naam]`,
        en: "Hi Marco, I'm going to Spain next month! I know you lived there last year. Can you help me? Which places should I definitely visit? And do you know good restaurants in Barcelona? I love fish and tapas. How is the weather in August? Is it very hot? What should I bring? Thanks for your help! Greetings, [Your name]",
        notes: "✓ Informal greeting | ✓ Contextual introduction | ✓ Specific questions | ✓ Express appreciation | ✓ 84 words"
    },
    19: {
        nl: `Geachte heer/mevrouw,

Ik schrijf deze brief omdat ik geïnteresseerd ben in de bijbaan bij uw supermarkt. Ik heb de advertentie gezien.

Ik ben 22 jaar oud en ik studeer aan de universiteit. Ik zoek een bijbaan omdat ik graag werk en mensen wil helpen. Ik ben vriendelijk en ik werk hard.

Ik kan werken op zaterdag en zondag, en ook 's avonds.

Kan ik langskomen voor een gesprek?

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I am writing this letter because I am interested in the part-time job at your supermarket. I saw the advertisement. I am 22 years old and I study at the university. I am looking for a part-time job because I like to work and help people. I am friendly and hard-working. I can work on Saturday and Sunday, and also in the evenings. Can I come for an interview? Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ State motivation | ✓ Personal attributes | ✓ Availability | ✓ Request interview | ✓ 92 words"
    },
    20: {
        nl: `Hoi allemaal,

Ik ga verhuizen! Op zaterdag 10 mei verhuis ik naar mijn nieuwe huis. Kunnen jullie me helpen?

We beginnen om 9:00 uur 's ochtends. Jullie moeten dozen dragen en meubels tillen. Het is niet zwaar werk, maar ik heb hulp nodig.

Ik koop pizza en drinken voor iedereen! Mijn nieuwe adres is [Nieuw Adres].

Laat me weten of je kunt komen!

Groeten,
[Uw naam]`,
        en: "Hi everyone, I'm moving! On Saturday May 10th I'm moving to my new house. Can you help me? We start at 9:00 AM. You have to carry boxes and lift furniture. It's not heavy work, but I need help. I'll buy pizza and drinks for everyone! My new address is [New Address]. Let me know if you can come! Greetings, [Your name]",
        notes: "✓ Enthusiastic opening | ✓ Clear date/time | ✓ Explain tasks | ✓ Mention reward (pizza) | ✓ 86 words"
    },
    21: {
        nl: `Hoi Marco,

Ik ga volgende maand naar Spanje! Ik weet dat jij daar vorig jaar hebt gewoond. Kun je me helpen?

Welke plaatsen moet ik zeker bezoeken? En ken je goede restaurants in Barcelona? Ik hou van vis en tapas.

Hoe is het weer in augustus? Is het erg warm? Wat moet ik meenemen?

Bedankt voor je hulp!

Groetjes,
[Uw naam]`,
        en: "Hi Marco, I am going to Spain next month! I know you lived there last year. Can you help me? Which places should I definitely visit? And do you know any good restaurants in Barcelona? I love fish and tapas. How is the weather in August? Is it very hot? What should I bring? Thanks for your help! Greetings, [Your name]",
        notes: "✓ Informal greeting | ✓ Contextual introduction | ✓ Specific questions | ✓ Express appreciation | ✓ 60 words"
    },
    22: {
        nl: `Geachte heer/mevrouw,

Ik schrijf deze brief omdat ik geïnteresseerd ben in de bijbaan bij uw supermarkt. Ik heb de advertentie gezien.

Ik ben 22 jaar oud en ik studeer aan de universiteit. Ik zoek een bijbaan omdat ik graag werk en mensen wil helpen. Ik ben vriendelijk en ik werk hard.

Ik kan werken op zaterdag en zondag, en ook 's avonds.

Kan ik langskomen voor een gesprek?

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I am writing this letter because I am interested in the part-time job at your supermarket. I saw the advertisement. I am 22 years old and I study at the university. I am looking for a part-time job because I like to work and help people. I am friendly and hard-working. I can work on Saturday and Sunday, and also in the evenings. Can I come by for an interview? Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ State motivation | ✓ Personal attributes | ✓ Availability | ✓ Request interview | ✓ 74 words"
    },
    23: {
        nl: `Hoi allemaal,

Ik ga verhuizen! Op zaterdag 10 mei verhuis ik naar mijn nieuwe huis. Kunnen jullie me helpen?

We beginnen om 9:00 uur 's ochtends. Jullie moeten dozen dragen en meubels tillen. Het is niet zwaar werk, maar ik heb hulp nodig.

Ik koop pizza en drinken voor iedereen! Mijn nieuwe adres is [Nieuw Adres].

Laat me weten of je kunt komen!

Groeten,
[Uw naam]`,
        en: "Hi everyone, I'm moving! On Saturday May 10th I'm moving to my new house. Can you help me? We start at 9:00 AM. You have to carry boxes and lift furniture. It's not heavy work, but I need help. I'll buy pizza and drinks for everyone! My new address is [New Address]. Let me know if you can come! Greetings, [Your name]",
        notes: "✓ Enthusiastic opening | ✓ Clear date/time | ✓ Explain tasks | ✓ Mention reward (pizza) | ✓ 65 words"
    },
    24: {
        nl: `Geachte heer/mevrouw,

Ik heb morgen een afspraak bij de gemeente. Helaas kan ik niet komen, want ik ben ziek.

Kan ik een nieuwe afspraak maken? Ik kan volgende week.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I have an appointment at the municipality tomorrow. Unfortunately I cannot come, because I am sick. Can I make a new appointment? I can come next week. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ Direct explanation | ✓ Ask for new appointment | ✓ 32 words"
    },
    25: {
        nl: `Beste baas,

Mijn werkbroek is kapot. Er zit een groot gat in. Ik weet dat ik geen eigen kleding mag dragen op het werk.

Kan ik een nieuwe werkbroek krijgen?

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear boss, My work trousers are broken. There is a big hole in them. I know I am not allowed to wear my own clothes at work. Can I get a new pair of work trousers? Kind regards, [Your name]",
        notes: "✓ Appropriate greeting | ✓ Explain problem | ✓ Show understanding of rules | ✓ Clear request | ✓ 33 words"
    },
    26: {
        nl: `Hoi Anna,

Ik denk dat ik mijn tas bij jou heb vergeten! In de tas zitten mijn sleutels en mijn portemonnee. Ik heb ze nodig.

Wanneer kan ik de tas ophalen? Kun je me bellen?

Groetjes,
[Uw naam]`,
        en: "Hi Anna, I think I forgot my bag at your place! My keys and wallet are in the bag. I need them. When can I pick up the bag? Can you call me? Greetings, [Your name]",
        notes: "✓ Informal greeting | ✓ Identify missing items | ✓ Urgent but friendly tone | ✓ Ask to pick up | ✓ 36 words"
    },
    27: {
        nl: `Geachte heer/mevrouw,

Ik volg nu de cursus 'Computergebruik gevorderd' bij uw opleidingscentrum. Helaas is de cursus te moeilijk voor mij. Ik begrijp veel dingen niet.

Ik wil graag stoppen met deze cursus. Kunt u mij veranderen naar de cursus 'Computer voor beginners'? Is dit mogelijk?

Wat kost de nieuwe cursus? Ik wacht op uw antwoord.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Sir/Madam, I am currently taking the 'Advanced Computer Use' course at your training centre. Unfortunately, the course is too difficult for me. I don't understand many things. I would like to stop this course. Can you change me to the 'Computers for beginners' course? Is this possible? What does the new course cost? I await your reply. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ Explain problem honestly | ✓ Propose solution | ✓ Ask about price | ✓ 56 words"
    },
    28: {
        nl: `Hoi Sara,

Ik moet volgende week donderdag naar het ziekenhuis. Ik heb een operatie. De afspraak is om 10:00 uur.

Ik heb geen auto. Kun je me naar het ziekenhuis brengen? Wil je met me meegaan?

Ik denk dat ik om 13:00 uur klaar ben. Kun je me dan ook ophalen?

Bedankt alvast!

Groetjes,
[Uw naam]`,
        en: "Hi Sara, I have to go to the hospital next Thursday. I am having an operation. The appointment is at 10:00. I don't have a car. Can you take me to the hospital? Do you want to go with me? I think I'll be done at 13:00. Can you pick me up then too? Thanks in advance! Greetings, [Your name]",
        notes: "✓ Friendly greeting | ✓ Give exact date/time | ✓ Make request | ✓ Ask about return trip | ✓ 53 words"
    },
    29: {
        nl: `Beste mevrouw Jansen,

Ik schrijf deze e-mail omdat ik graag wil solliciteren op de vacature bij uw verzorgingstehuis. Ik werk heel graag met oudere mensen.

Ik heb ervaring en kan verschillende dingen doen. Ik kan bijvoorbeeld koken voor de bewoners. Ook kan ik wandelen met de mensen, bijvoorbeeld met een rolstoel of rollator.

Ik ben beschikbaar en kan volgende week woensdag al beginnen.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Mrs. Jansen, I am writing this email because I would love to apply for the vacancy at your care home. I really enjoy working with elderly people. I have experience and can do various things. For example, I can cook for the residents. I can also walk with the people, for example with a wheelchair or walker. I am available and can start next Wednesday. Kind regards, [Your name]",
        notes: "✓ Professional greeting | ✓ Use image context (cooking, walking) | ✓ Show motivation | ✓ State availability | ✓ 65 words"
    },
    30: {
        nl: `Beste collega's,

Ik wil jullie graag uitnodigen voor een lunch. De lunch is volgende week vrijdag om 12:30 uur.

We lunchen in de grote vergaderzaal. Vergeet niet om je laptop en een notitieboekje mee te nemen, want we gaan ook even overleggen.

Tot vrijdag!

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear colleagues, I would like to invite you for a lunch. The lunch is next Friday at 12:30. We will have lunch in the large meeting room. Don't forget to bring your laptop and a notebook, because we will also have a brief meeting. See you Friday! Kind regards, [Your name]",
        notes: "✓ Professional but friendly greeting | ✓ Clear date/time/location | ✓ Use image context (laptop, notebook) | ✓ 46 words"
    },
    31: {
        nl: `Beste mevrouw van Beek,

Ik stuur deze e-mail omdat ik graag in uw kledingwinkel wil werken. Ik ben op zoek naar een leuke baan.

Ik kan u helpen in de winkel. Ik kan heel goed kleding vouwen en alles netjes opruimen. Ook kan ik kleding sorteren.

Ik ben direct beschikbaar en kan morgen beginnen.

Met vriendelijke groet,
[Uw naam]`,
        en: "Dear Mrs. van Beek, I am sending this email because I would like to work in your clothing store. I am looking for a nice job. I can help you in the store. I am very good at folding clothes and tidying everything up. I can also sort clothes. I am immediately available and can start tomorrow. Kind regards, [Your name]",
        notes: "✓ Formal greeting | ✓ State motivation | ✓ Use image context (folding, sorting) | ✓ State availability | ✓ 56 words"
    }
};
