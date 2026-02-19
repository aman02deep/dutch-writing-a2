// KNM Questions Data
// Structure: Each chapter has title, study materials, and practice questions

const knmChapters = {
    1: {
        title: "1. Wonen (Housing)",
        icon: "🏠",
        studyMaterial: [
            {
                title: "Belangrijke Woorden (Keywords)",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Huurwoning</strong> - Rental home (Sociale huur OR Vrije sector)</li>
                        <li><strong>Koopwoning</strong> - Owner-occupied home (Buying a house)</li>
                        <li><strong>Huurcontract</strong> - Tenancy agreement (Rules between tenant & landlord)</li>
                        <li><strong>Huurtoeslag</strong> - Housing allowance (Money from tax authority to help pay rent)</li>
                        <li><strong>Woningcorporatie</strong> - Housing association (Organizations for social housing)</li>
                        <li><strong>Urgentieverklaring</strong> - Priority declaration (For emergencies to get a house faster)</li>
                        <li><strong>Huisvestingsvergunning</strong> - Housing permit (Required in some cities for cheap houses)</li>
                        <li><strong>WOZ-waarde</strong> - Value of the house according to the municipality</li>
                    </ul>
                `
            },
            {
                title: "Key Facts for the Exam",
                content: `
                    <div class="fact-box">
                        <h4>🔍 Finding a House</h4>
                        <ul>
                            <li><strong>Sociale huur</strong>: Cheap houses (max rent ~€800). Long waiting lists (years!). You act via <em>Woningnet</em>. Income limit applies.</li>
                            <li><strong>Vrije sector</strong>: Expensive houses. No strict income limit. Found via websites like <em>Funda.nl</em>.</li>
                            <li><strong>Makelaar</strong>: Real estate agent. Helps you buy or sell a house.</li>
                        </ul>
                        <h4>📜 Rules & Money</h4>
                        <ul>
                            <li><strong>Huurtoeslag</strong>: You can get this ONLY if your rent is not too high and your income is low.</li>
                            <li><strong>Gemeentebelastingen</strong>: Everyone pays text for waste (afvalstoffenheffing) and sewage (rioolheffing).</li>
                            <li><strong>Hypotheek</strong>: A loan from the bank to buy a house. You pay interest (rente).</li>
                        </ul>
                        <h4>🗑️ Good Citizenship</h4>
                        <ul>
                            <li><strong>Afval scheiden</strong>: Separate paper, glass, plastic, and GFT (organic).</li>
                            <li><strong>Overlast</strong>: Noise nuisance. Don't make loud noise after 22:00. Talk to neighbors first if there is a problem.</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Je zoekt een sociale huurwoning. Waar moet je je inschrijven?",
                options: [
                    "Bij de makelaar",
                    "Bij Woningnet of een woningcorporatie",
                    "Bij de bank",
                    "Bij de gemeente"
                ],
                correct: 1,
                explanation: "Voor sociale huurwoningen moet je je inschrijven bij een woningcorporatie of een website zoals Woningnet. Er zijn vaak lange wachtlijsten."
            },
            {
                question: "Je hebt een laag inkomen en een hoge huur. Wat kun je aanvragen?",
                options: [
                    "Kinderbijslag",
                    "Huurtoeslag",
                    "Zorgtoeslag",
                    "Werkloosheidsuitkering"
                ],
                correct: 1,
                explanation: "Als je huur relatief laag is (sociale grens) en je inkomen ook laag is, kun je huurtoeslag aanvragen bij de Belastingdienst."
            },
            {
                question: "De buren maken elke nacht veel lawaai. Wat doe je eerst?",
                options: [
                    "Meteen de politie bellen",
                    "De woningcorporatie bellen",
                    "Met de buren gaan praten",
                    "Verhuizen"
                ],
                correct: 2,
                explanation: "In Nederland probeer je eerst zelf met de buren te praten om het probleem op te lossen. Pas als dat niet werkt, bel je de politie of woningbouw."
            },
            {
                question: "Wat is 'WOZ-waarde'?",
                options: [
                    "De prijs van water en energie",
                    "De waarde van je huis volgens de gemeente",
                    "De belasting voor de auto",
                    "De huurprijs van de woning"
                ],
                correct: 1,
                explanation: "WOZ-waarde is de Waardering Onroerende Zaken. De gemeente bepaalt hoeveel je huis waard is voor de belastingen."
            },
            {
                question: "Wie betaalt de onroerendezaakbelasting (OZB)?",
                options: [
                    "Alleen de huurder",
                    "Alleen de woningeigenaar",
                    "De huurder en de eigenaar",
                    "De overheid"
                ],
                correct: 1,
                explanation: "Alleen de eigenaar van een woning betaalt OZB. Een huurder betaalt dit niet."
            },
            {
                question: "Wat doe je met oud papier en glas?",
                options: [
                    "In de grijze container gooien",
                    "Op straat zetten",
                    "In de speciale containers gooien (scheiden)",
                    "Verbranden in de tuin"
                ],
                correct: 2,
                explanation: "In Nederland moet je afval scheiden. Papier en glas moeten in speciale bakken voor recycling."
            },
            {
                question: "Je wilt een huis kopen. Wie kan je helpen zoeken en onderhandelen?",
                options: [
                    "Een notaris",
                    "Een makelaar",
                    "Een woningcorporatie",
                    "De gemeente"
                ],
                correct: 1,
                explanation: "Een makelaar helpt je bij het kopen (of verkopen) van een huis. De notaris regelt het officiële contract."
            },
            {
                question: "Je huurt een huis. De kraan lekt. Wie moet dit betalen?",
                options: [
                    "De huurder (klein onderhoud)",
                    "De verhuurder (groot onderhoud)",
                    "De gemeente",
                    "De verzekering"
                ],
                correct: 0,
                explanation: "Klein onderhoud (zoals een leertje in de kraan vervangen of schilderen binnen) is voor de huurder. Groot onderhoud (dak, buitenwerk) is voor de verhuurder."
            },
            {
                question: "Je wilt je tuin veranderen en een grote boom kappen. Mag dat zomaar?",
                options: [
                    "Ja, het is jouw tuin",
                    "Nee, je hebt vaak een kapvergunning nodig van de gemeente",
                    "Alleen in de winter",
                    "Alleen als de buren het goed vinden"
                ],
                correct: 1,
                explanation: "Voor het kappen van bomen heb je vaak een vergunning nodig van de gemeente. Je mag dit niet zomaar doen."
            },
            {
                question: "Je hebt een grote oude bank die je weg wilt gooien. Wat doe je?",
                options: [
                    "Je zet hem op straat",
                    "Je brengt hem naar de milieustraat of belt de grofvuil ophaaldienst",
                    "Je gooit hem in de tuin van de buren",
                    "Je verbrandt hem"
                ],
                correct: 1,
                explanation: "Grote spullen (grofvuil) moet je naar de milieustraat brengen of laten ophalen. Je mag het niet zomaar op straat zetten."
            },
            {
                question: "Wat is een 'inboedelverzekering'?",
                options: [
                    "Verzekering voor de muren van je huis",
                    "Verzekering voor je spullen in huis (meubels, tv, kleding)",
                    "Ziektekostenverzekering",
                    "Autoverzekering"
                ],
                correct: 1,
                explanation: "Een inboedelverzekering dekt schade aan de spullen in je huis (brand, diefstal). Een opstalverzekering is voor het huis zelf."
            },
            {
                question: "Je woont in een flat. Mag je barbecueën op het balkon?",
                options: [
                    "Ja, altijd",
                    "Nee, nooit",
                    "Dat hangt van de regels van de VvE of verhuurder af",
                    "Alleen als je vlees eet"
                ],
                correct: 2,
                explanation: "Vaak zijn er regels over barbecueën op balkons in verband met overlast en brandveiligheid. Check het reglement."
            },
            {
                question: "Wat is 'GFT' afval?",
                options: [
                    "Glas en Flessen",
                    "Groente, Fruit en Tuinafval",
                    "Groot Fysiek Transport",
                    "Gevaarlijk Fijn Textiel"
                ],
                correct: 1,
                explanation: "GFT staat voor Groente-, Fruit- en Tuinafval. Dit moet in de groene bak."
            },
            {
                question: "Je wilt een huis kopen. Wat is een 'hypotheek'?",
                options: [
                    "Een cadeau van de bank",
                    "Een lening van de bank om een huis te kopen",
                    "De belasting op het huis",
                    "De verzekering van het huis"
                ],
                correct: 1,
                explanation: "Een hypotheek is een lening die je afsluit (meestal bij een bank) om een huis te kunnen betalen."
            },
            {
                question: "Je hebt geen warm water meer. Wie bel je als je huurt?",
                options: [
                    "De politie",
                    "De verhuurder of woningbouwvereniging",
                    "De buurman",
                    "De koning"
                ],
                correct: 1,
                explanation: "Bij problemen met voorzieningen die bij het huis horen (zoals de CV-ketel), bel je de verhuurder."
            },
            {
                question: "Wat is gas, water en licht?",
                options: [
                    "Gratis voorzieningen",
                    "Nutsvoorzieningen die je (meestal) zelf moet afsluiten bij een leverancier",
                    "Dingen die je in de supermarkt koopt",
                    "Namen van Nederlandse steden"
                ],
                correct: 1,
                explanation: "Je moet zelf contracten afsluiten voor energie (gas/licht) en water. Soms zit het in de huurprijs (inclusief), maar vaak niet."
            },
            {
                question: "Je organiseert een feestje. Tot hoe laat mag je harde muziek draaien?",
                options: [
                    "Tot 03:00 's nachts",
                    "Tot 22:00 uur, daarna moet het stil zijn",
                    "Er is geen regel",
                    "Tot de politie komt"
                ],
                correct: 1,
                explanation: "Algemene regel in Nederland is dat het na 22:00 uur rustig moet zijn. Waarschuw je buren als je een feestje geeft."
            },
            {
                question: "Wat is een 'rijtjeshuis'?",
                options: [
                    "Een losstaand huis",
                    "Een huis dat aan beide kanten vastzit aan andere huizen",
                    "Een appartement in een flat",
                    "Een woonboot"
                ],
                correct: 1,
                explanation: "Een rijtjeshuis is een woning die deel uitmaakt van een rij aan elkaar gebouwde huizen. Dit is een veelvoorkomend woningtype in Nederland."
            },
            {
                question: "Mag je je huis onderverhuren (bijvoorbeeld via Airbnb)?",
                options: [
                    "Ja, altijd",
                    "Ja, maar alleen in de zomer",
                    "Nee, meestal niet zonder toestemming van de verhuurder/bank",
                    "Ja, als je de sleutel geeft"
                ],
                correct: 2,
                explanation: "Onderverhuur is vaak verboden in het huurcontract of de hypotheekvoorwaarden zonder expliciete toestemming."
            },
            {
                question: "Je wilt goedkoop tweedehands meubels kopen. Waar kijk je?",
                options: [
                    "Funda.nl",
                    "Marktplaats.nl of de Kringloopwinkel",
                    "Bol.com",
                    "De Bijenkorf"
                ],
                correct: 1,
                explanation: "Marktplaats.nl en Kringloopwinkels zijn de populairste plekken voor tweedehands spullen."
            }
        ]
    },

    2: {
        title: "2. Werk en Inkomen (Work & Income)",
        icon: "💼",
        studyMaterial: [
            {
                title: "Belangrijke Woorden",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Arbeidscontract</strong> - Employment contract (Vast or Tijdelijk)</li>
                        <li><strong>Proeftijd</strong> - Probation period (Usually 1 or 2 months)</li>
                        <li><strong>Opzegtermijn</strong> - Notice period (1 month usually)</li>
                        <li><strong>CAO</strong> - Collective Labour Agreement (Rules for all companies in a sector)</li>
                        <li><strong>Vakantiegeld</strong> - Holiday allowance (8% of yearly salary, paid in May)</li>
                        <li><strong>Bruto / Netto</strong> - Gross (before tax) / Net (what you get on bank)</li>
                        <li><strong>UWV</strong> - Employee Insurance Agency (Benefits & Work permits)</li>
                        <li><strong>Zwart werk</strong> - Working without paying tax (Illegal!)</li>
                    </ul>
                `
            },
            {
                title: "Key Facts: Working in NL",
                content: `
                    <div class="fact-box">
                        <h4>📄 Contracts</h4>
                        <ul>
                            <li><strong>Tijdelijk contract</strong>: Fixed end date.</li>
                            <li><strong>Vast contract</strong>: Permanent. Hard explicitly to fire you.</li>
                            <li><strong>Nulurencontract</strong>: No fixed hours. Paid only when you work.</li>
                        </ul>
                        <h4>💰 Money & Tax</h4>
                        <ul>
                            <li><strong>Minimumloon</strong>: The lowest legal salary (determined by age).</li>
                            <li><strong>Inkomstenbelasting</strong>: Tax on salary. Your employer deducts this automatically ("Loonheffing").</li>
                            <li><strong>Jaaropgave</strong>: Summary of your salary and taxes given by employer in January/February.</li>
                        </ul>
                        <h4>🛡️ Rights</h4>
                        <ul>
                            <li><strong>Ziekte</strong>: If sick, employer usually pays 70-100% of salary. You must report sickness immediately.</li>
                            <li><strong>Ontslag</strong>: You cannot be fired just because you are pregnant or sick.</li>
                            <li><strong>Discriminatie</strong>: Employers cannot select based on age, gender, religion, or origin.</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Wat is het verschil tussen bruto en netto salaris?",
                options: [
                    "Bruto is zonder belasting, Netto is wat je op je rekening krijgt",
                    "Netto is zonder belasting, Bruto is wat je op je rekening krijgt",
                    "Bruto is inclusief vakantiegeld, Netto is exclusief",
                    "Er is geen verschil"
                ],
                correct: 0,
                explanation: "Bruto is het bedrag voor de belastingen. Netto is het bedrag dat je daadwerkelijk op je bankrekening ontvangt."
            },
            {
                question: "Wat is 'zwart werken'?",
                options: [
                    "Werken in de nacht",
                    "Werken zonder contract en zonder belasting te betalen",
                    "Werken in de bouw",
                    "Vrijwilligerswerk doen"
                ],
                correct: 1,
                explanation: "Zwart werken betekent werken zonder belasting en premies te betalen. Dit is illegaal en je bent niet verzekerd."
            },
            {
                question: "Wanneer krijg je meestal vakantiegeld?",
                options: [
                    "In december",
                    "In januari",
                    "In mei",
                    "In augustus"
                ],
                correct: 2,
                explanation: "Vakantiegeld (8% van je bruto jaarsalaris) wordt bijna altijd in mei uitbetaald."
            },
            {
                question: "Je wordt ziek. Wat moet je doen?",
                options: [
                    "Thuisblijven en niks zeggen",
                    "Je werkgever/baas zo snel mogelijk bellen (ziekmelden)",
                    "Naar het ziekenhuis gaan",
                    "Ontslag nemen"
                ],
                correct: 1,
                explanation: "Je moet je zo snel mogelijk (meestal voor 09:00 of 09:30) ziekmelden bij je werkgever."
            },
            {
                question: "Wat staat er in een CAO?",
                options: [
                    "De wetten van Nederland",
                    "Afspraken over loon en werktijden voor een hele sector",
                    "Het contract van één persoon",
                    "De regels van de politie"
                ],
                correct: 1,
                explanation: "Een CAO (Collectieve Arbeidsovereenkomst) bevat afspraken over loon, werktijden en vakantie voor alle bedrijven in een bepaalde sector (bijv. de horeca of zorg)."
            },
            {
                question: "Mag een werkgever vragen of je zwanger wilt worden tijdens een sollicitatie?",
                options: [
                    "Ja, dat is normaal",
                    "Nee, dat is discriminatie en privé",
                    "Ja, als het zwaar werk is",
                    "Alleen bij een vast contract"
                ],
                correct: 1,
                explanation: "Nee, een werkgever mag niet vragen naar zwangerschap of kinderwens. Dat is discriminatie."
            },
            {
                question: "Je contract loopt af en wordt niet verlengd. Waar kun je een uitkering aanvragen?",
                options: [
                    "Bij het UWV",
                    "Bij de gemeente",
                    "Bij de werkgever",
                    "Bij de belastingdienst"
                ],
                correct: 0,
                explanation: "Als je werkloos wordt, kun je een WW-uitkering (Werkloosheidswet) aanvragen bij het UWV."
            },
            {
                question: "Wat is een proeftijd?",
                options: [
                    "Een examen voor je werk",
                    "Een periode (meestal 1 maand) waarin jij en de baas direct kunnen stoppen",
                    "Een tijd waarin je geen salaris krijgt",
                    "Een stageperiode"
                ],
                correct: 1,
                explanation: "De proeftijd is een testperiode aan het begin van een contract. In deze tijd kunnen zowel jij als de werkgever per direct opzeggen zonder reden."
            },
            {
                question: "Wat betekent het als je 'ZZP'er' bent?",
                options: [
                    "Je werkt voor de overheid",
                    "Je bent Zelfstandige Zonder Personeel (eigen baas)",
                    "Je bent werkloos",
                    "Je werkt in de zorg"
                ],
                correct: 1,
                explanation: "Een ZZP'er is een ondernemer die geen personeel in dienst heeft. Je hebt geen baas, maar ook geen vast salaris."
            },
            {
                question: "Vanaf welke leeftijd krijg je AOW (pensioen van de overheid)?",
                options: [
                    "Vanaf 50 jaar",
                    "Vanaf 60 jaar",
                    "Vanaf ongeveer 67 jaar (hangt af van geboortedatum)",
                    "Vanaf 75 jaar"
                ],
                correct: 2,
                explanation: "De AOW-leeftijd stijgt langzaam en ligt nu rond de 67 jaar."
            },
            {
                question: "Wat is een 'sollicitatiebrief'?",
                options: [
                    "Een brief waarin je schrijft waarom je de baan wilt",
                    "Een brief met je ontslag",
                    "Een brief van de belastingdienst",
                    "Een contract"
                ],
                correct: 0,
                explanation: "In een sollicitatiebrief (of motivatiebrief) leg je uit waarom je geschikt bent voor de vacature."
            },
            {
                question: "Wat staat er in een CV (Curriculum Vitae)?",
                options: [
                    "Je favoriete eten",
                    "Je opleidingen en werkervaring",
                    "Je politieke mening",
                    "De namen van je kinderen"
                ],
                correct: 1,
                explanation: "Een CV is een overzicht van je persoonlijke gegevens, opleidingen en werkervaring."
            },
            {
                question: "Wat doet een uitzendbureau?",
                options: [
                    "Het keurt paspoorten",
                    "Het bemiddelt tussen bedrijven en mensen die (tijdelijk) werk zoeken",
                    "Het geeft uitkeringen",
                    "Het maakt wetten"
                ],
                correct: 1,
                explanation: "Een uitzendbureau helpt mensen aan tijdelijk werk bij verschillende bedrijven."
            },
            {
                question: "Je werkt fulltime. Hoeveel uur is dat meestal in Nederland?",
                options: [
                    "20 uur per week",
                    "36 tot 40 uur per week",
                    "60 uur per week",
                    "10 uur per week"
                ],
                correct: 1,
                explanation: "Een fulltime werkweek in Nederland is meestal 36, 38 of 40 uur."
            },
            {
                question: "Wat is de 'Arbowet'?",
                options: [
                    "Een wet over bomen",
                    "Een wet over veilige en gezonde werkomstandigheden",
                    "Een wet over salaris",
                    "Een wet over vakantie"
                ],
                correct: 1,
                explanation: "De Arbowet (Arbeidsomstandighedenwet) zorgt ervoor dat je veilig en gezond kunt werken."
            },
            {
                question: "Wat is 'vrijwilligerswerk'?",
                options: [
                    "Werk waarvoor je niet betaald krijgt, maar wat je doet voor de samenleving",
                    "Zwart werken",
                    "Verplicht werk van de gemeente",
                    "Stage lopen voor school"
                ],
                correct: 0,
                explanation: "Vrijwilligerswerk doe je onbetaald om anderen of een organisatie te helpen (bijvoorbeeld in een buurthuis of sportclub)."
            },
            {
                question: "Wat is de Bijstand?",
                options: [
                    "Een uitkering voor rijke mensen",
                    "Een uitkering voor als je geen werk en geen ander inkomen/vermogen hebt (laatste redmiddel)",
                    "Een toeslag voor huur",
                    "Een pensioen"
                ],
                correct: 1,
                explanation: "De Bijstand (Participatiewet) is het laatste vangnet voor mensen die geen werk en geen middelen hebben om te leven."
            },
            {
                question: "Je hebt een functioneringsgesprek met je baas. Waarover praten jullie?",
                options: [
                    "Over het weer",
                    "Over hoe het werk gaat en wat beter kan",
                    "Over je vakantieplannen",
                    "Over je familieproblemen"
                ],
                correct: 1,
                explanation: "In een functioneringsgesprek bespreek je met je leidinggevende hoe het werk gaat, wat goed gaat en wat beter kan."
            },
            {
                question: "Wat doet de Ondernemingsraad (OR)?",
                options: [
                    "Deelt straffen uit",
                    "Overlegt namens de werknemers met de directie over het bedrijfsbeleid",
                    "Organiseert feestjes",
                    "Betaalt de salarissen"
                ],
                correct: 1,
                explanation: "De OR vertegenwoordigt het personeel en heeft inspraak in belangrijke beslissingen van het bedrijf."
            },
            {
                question: "Je werkt en hebt jonge kinderen die naar de opvang gaan. Wat kun je aanvragen?",
                options: [
                    "Kinderbijslag",
                    "Kinderopvangtoeslag",
                    "Huurtoeslag",
                    "Zorgtoeslag"
                ],
                correct: 1,
                explanation: "Als jij (en je partner) werken, kun je kinderopvangtoeslag krijgen om een deel van de kosten van de crèche of BSO te betalen."
            }
        ]
    },

    3: {
        title: "3. Waarden en Normen (Values)",
        icon: "🤝",
        studyMaterial: [
            {
                title: "Belangrijke Woorden",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Grondwet</strong> - Constitution (The highest law in NL)</li>
                        <li><strong>Artikel 1</strong> - Prohibition of discrimination (Equal treatment)</li>
                        <li><strong>Vrijheid van meningsuiting</strong> - Freedom of speech (You can say what you think, but no hate speech)</li>
                        <li><strong>Vrijheid van godsdienst</strong> - Freedom of religion (Believe what you want)</li>
                        <li><strong>Poldermodel</strong> - Cooperation and compromise (Talking until we agree)</li>
                        <li><strong>Zelfbeschikking</strong> - Self-determination (You decide over your own body/life)</li>
                        <li><strong>Gelijkwaardigheid</strong> - Equality (Men/women, straight/gay are equal)</li>
                    </ul>
                `
            },
            {
                title: "Key Facts: Dutch Values",
                content: `
                    <div class="fact-box">
                        <h4>⚖️ Rechten (Rights)</h4>
                        <ul>
                            <li><strong>Discriminatie</strong>: Is never allowed. Not for work, housing, or service.</li>
                            <li><strong>Homohuwelijk</strong>: Gay marriage is legal since 2001 (Netherlands was the first!).</li>
                            <li><strong>Geloof</strong>: Separation of Church and State. Politics and religion are separate.</li>
                            <li><strong>Vrouwenrechten</strong>: Women work, decide about their own body/marriage, and are independent.</li>
                        </ul>
                        <h4>🗣️ Interactie (Interaction)</h4>
                        <ul>
                            <li><strong>Directheid</strong>: Dutch people speak directly ("Nee" is just "No", not rude).</li>
                            <li><strong>Afspraak is afspraak</strong>: Be on time! 5 minutes late is already too late for a job interview.</li>
                            <li><strong>Oogcontact</strong>: Look at people when you talk to them. It shows honesty.</li>
                            <li><strong>Hand geven</strong>: Standard greeting (pre/post-covid). You give a hand to everyone (men & women).</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Wat staat er in Artikel 1 van de Grondwet?",
                options: [
                    "Iedereen moet werken",
                    "Iedereen in Nederland moet gelijk behandeld worden (discriminatieverbod)",
                    "De Koning is de baas",
                    "Nederlands is de enige taal"
                ],
                correct: 1,
                explanation: "Artikel 1 verbiedt discriminatie. Iedereen in Nederland moet in gelijke gevallen gelijk behandeld worden."
            },
            {
                question: "Mogen twee mannen of twee vrouwen trouwen in Nederland?",
                options: [
                    "Nee, dat is verboden",
                    "Ja, dat mag sinds 2001",
                    "Alleen bij de kerk",
                    "Alleen in Amsterdam"
                ],
                correct: 1,
                explanation: "Ja, het homohuwelijk is legaal in Nederland sinds 2001. Nederland was het eerste land ter wereld."
            },
            {
                question: "Je bent het niet eens met de koning. Mag je dat zeggen?",
                options: [
                    "Nee, dat is gevaarlijk",
                    "Ja, er is vrijheid van meningsuiting",
                    "Alleen thuis",
                    "Alleen als je rijk bent"
                ],
                correct: 1,
                explanation: "In Nederland is vrijheid van meningsuiting. Je mag kritiek hebben op de regering of de koning, zolang je niet discrimineert of oproept tot geweld."
            },
            {
                question: "Een werkgever wil je niet aannemen omdat je zwanger bent. Mag dat?",
                options: [
                    "Ja, want je kunt niet werken",
                    "Nee, dat is discriminatie",
                    "Ja, dat is de regel",
                    "Alleen bij zwaar werk"
                ],
                correct: 1,
                explanation: "Dit is discriminatie op basis van geslacht/zwangerschap en dat is verboden."
            },
            {
                question: "Je hebt een afspraak om 14:00 uur. Hoe laat kom je?",
                options: [
                    "Om 14:15",
                    "Tussen 14:00 en 15:00",
                    "Om 13:55 (op tijd)",
                    "Wanneer je wilt"
                ],
                correct: 2,
                explanation: "Nederlanders zijn strikt met tijd. 'Op tijd' betekent 5 minuten van tevoren aanwezig zijn. Te laat komen is onbeleefd."
            },
            {
                question: "Mag een vrouw werken als haar man dat niet wil?",
                options: [
                    "Nee, de man is de baas",
                    "Ja, vrouwen beslissen zelf over hun leven (zelfbeschikking)",
                    "Alleen parttime",
                    "Alleen als ze geen kinderen heeft"
                ],
                correct: 1,
                explanation: "In Nederland hebben vrouwen zelfbeschikkingsrecht. Zij bepalen zelf of ze werken, trouwen of studeren."
            },
            {
                question: "Wat betekent 'scheiding van kerk en staat'?",
                options: [
                    "Kerken zijn verboden",
                    "De politiek beslist niet over geloof, en geloof niet over wetten",
                    "De koning is het hoofd van de kerk",
                    "Je mag alleen in de kerk bidden"
                ],
                correct: 1,
                explanation: "De overheid en religie zijn gescheiden. De kerk maakt geen wetten en de overheid bemoeit zich niet met de inhoud van geloof."
            },
            {
                question: "Iemand geeft je geen hand omdat je een vrouw bent. Is dit normaal in Nederland?",
                options: [
                    "Ja, heel normaal",
                    "Nee, in Nederland geven mannen en vrouwen elkaar een hand",
                    "Alleen in de grote steden",
                    "Dat hangt van de tijd af"
                ],
                correct: 1,
                explanation: "In de algemene Nederlandse cultuur is het gebruikelijk dat iedereen elkaar een hand geeft, ongeacht geslacht."
            },
            {
                question: "Wat is het 'gedoogbeleid' over softdrugs?",
                options: [
                    "Drugs zijn legaal en je mag ze overal verkopen",
                    "Softdrugs zijn officieel verboden, maar de politie controleert niet als je een kleine hoeveelheid hebt (max 5 gram)",
                    "Je moet naar de gevangenis voor wiet",
                    "Alleen toeristen mogen drugs kopen"
                ],
                correct: 1,
                explanation: "Gedoogbeleid betekent dat het officieel verboden is, maar dat de politie niet strafrechtelijk vervolgt bij klein gebruik/bezit."
            },
            {
                question: "Mag je in Nederland euthanasie plegen?",
                options: [
                    "Ja, als je dat zelf wilt",
                    "Nee, dat is moord",
                    "Ja, maar alleen onder zeer strenge regels en als een arts het doet bij ondraaglijk lijden",
                    "Alleen als je ouder bent dan 80"
                ],
                correct: 2,
                explanation: "Euthanasie is legaal, maar alleen onder zeer strenge voorwaarden en moet altijd door een arts worden uitgevoerd."
            },
            {
                question: "Is abortus legaal in Nederland?",
                options: [
                    "Nee, nooit",
                    "Ja, tot 24 weken zwangerschap. De vrouw beslist zelf",
                    "Alleen als de man het goed vindt",
                    "Alleen bij medische noodzaak"
                ],
                correct: 1,
                explanation: "Abortus is legaal. Vrouwen hebben zelfbeschikkingsrecht en mogen zelf kiezen voor abortus (tot de 'levensvatbaarheid' grens)."
            },
            {
                question: "Wat doe je als je op iemands verjaardag komt?",
                options: [
                    "Je geeft alleen de jarige een hand",
                    "Je feliciteert iedereen (ook de familie) en geeft vaak 3 zoenen of een hand",
                    "Je gaat meteen eten",
                    "Je zegt niks"
                ],
                correct: 1,
                explanation: "Het is gebruikelijk om de jarige én de familie/gasten te feliciteren. Bij goede bekenden geef je 3 zoenen."
            },
            {
                question: "Hoe laat eten Nederlanders meestal warm ('s avonds)?",
                options: [
                    "Rond 21:00 uur",
                    "Rond 18:00 uur",
                    "Rond 16:00 uur",
                    "Rond 23:00 uur"
                ],
                correct: 1,
                explanation: "De traditionele Nederlandse eettijd voor het diner is rond 18:00 uur ('zes uur')."
            },
            {
                question: "Je baas maakt een plan, maar jij ziet een fout. Wat doe je?",
                options: [
                    "Je zegt niks, want hij is de baas",
                    "Je vertelt het (beleefd) tegen je baas",
                    "Je neemt ontslag",
                    "Je vertelt het aan de koning"
                ],
                correct: 1,
                explanation: "In Nederland waarderen mensen mondigheid en kritisch meedenken. Je mag je mening geven, ook tegen je baas."
            },
            {
                question: "Mag je roken in een café of restaurant?",
                options: [
                    "Ja, overal",
                    "Nee, er is een rookverbod in de horeca en openbare gebouwen",
                    "Alleen in het weekend",
                    "Alleen als de ramen open staan"
                ],
                correct: 1,
                explanation: "Er geldt een strikt rookverbod in de horeca, op de werkplek en in openbare gebouwen."
            },
            {
                question: "Wat betekent 'Vrijheid van Onderwijs' (Artikel 23)?",
                options: [
                    "Dat school gratis is",
                    "Dat je zelf een school mag oprichten op basis van geloof of levensovertuiging",
                    "Dat je niet naar school hoeft",
                    "Dat iedereen leraar mag worden"
                ],
                correct: 1,
                explanation: "Vrijheid van onderwijs betekent dat mensen scholen mogen stichten die passen bij hun religie of visie (bijv. Christelijk, Islamitisch, Montessori)."
            },
            {
                question: "Wat is typisch Nederlands in het verkeer?",
                options: [
                    "Iedereen rijdt in grote auto's",
                    "Er zijn heel veel fietsen en speciale fietspaden",
                    "Niemand stopt voor rood licht",
                    "Er zijn geen regels"
                ],
                correct: 1,
                explanation: "De fiets is het meest typische vervoermiddel. Fietsers hebben een belangrijke plaats in het verkeer."
            },
            {
                question: "Een ober in een restaurant vraagt of het eten lekker was. Wat zeg je?",
                options: [
                    "Je negeert hem",
                    "Je zegt eerlijk wat je ervan vindt",
                    "Je zegt altijd 'ja', ook als het vies was",
                    "Je wordt boos"
                ],
                correct: 1,
                explanation: "Directheid is normaal. Als het niet goed was, mag je dat gewoon (vriendelijk) zeggen."
            },
            {
                question: "Je buurvrouw loopt in een korte rok. Wat vind je daarvan?",
                options: [
                    "Dat is verboden",
                    "Dat mag zij zelf weten (vrijheid van kleding)",
                    "Je moet de politie bellen",
                    "Je moet haar wegsturen"
                ],
                correct: 1,
                explanation: "In Nederland bepaalt iedereen zelf welke kleding hij of zij draagt."
            },
            {
                question: "Discrimineren mag niet. Mag je wel een grapje maken over iemands geloof?",
                options: [
                    "Ja, dat valt onder vrijheid van meningsuiting (zolang het geen haatzaaien is)",
                    "Nee, je mag nooit grappen maken",
                    "Alleen over je eigen geloof",
                    "Alleen als niemand het hoort"
                ],
                correct: 0,
                explanation: "Vrijheid van meningsuiting betekent dat je grappen mag maken of kritiek mag hebben, ook als dat kwetsend kan zijn voor anderen, zolang je niet aanzet tot haat of geweld."
            }
        ]
    },

    4: {
        title: "4. Onderwijs en Opvoeding (Education)",
        icon: "🎓",
        studyMaterial: [
            {
                title: "Belangrijke Woorden",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Leerplicht</strong> - Compulsory education (Must go to school 5-16jr)</li>
                        <li><strong>Basisschool</strong> - Primary school (Groep 1-8, age 4-12)</li>
                        <li><strong>Middelbare school</strong> - Secondary school (VMBO, HAVO, VWO)</li>
                        <li><strong>MBO / HBO / WO</strong> - Vocational / Applied Science / University</li>
                        <li><strong>Ouderbijdrage</strong> - Parental contribution (Money for trips, strictly voluntary!)</li>
                        <li><strong>Consultatiebureau</strong> - Health center for babies/toddlers (0-4jr)</li>
                        <li><strong>Ouderparticipatie</strong> - Parents helping at school (Reading, excursions)</li>
                    </ul>
                `
            },
            {
                title: "Key Facts: School System",
                content: `
                    <div class="fact-box">
                        <h4>🏫 De Schoolcarrière</h4>
                        <ul>
                            <li><strong>4 jaar</strong>: Naar de basisschool (mag, niet verplicht).</li>
                            <li><strong>5 jaar</strong>: <strong>Leerplicht</strong> start! (Boete als je spijbelt).</li>
                            <li><strong>12 jaar</strong>: Eindtoets (Cito) & Advies voor middelbare school.</li>
                        </ul>
                        <h4>📊 Niveaus (Levels)</h4>
                        <ul>
                            <li><strong>VMBO</strong> (4 jaar): Practical jobs (Kapster, Monteur). Goes to MBO.</li>
                            <li><strong>HAVO</strong> (5 jaar): Theory + Practice. Goes to HBO.</li>
                            <li><strong>VWO</strong> (6 jaar): Theory / Science. Goes to Universiteit (WO).</li>
                        </ul>
                        <h4>👪 Ouders</h4>
                        <ul>
                            <li>You usually talk to the teacher ("Tienminutengesprek") 2-3 times a year.</li>
                            <li>You are expected to call the school before 08:30 if your child is sick.</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Vanaf welke leeftijd is onderwijs verplicht in Nederland?",
                options: [
                    "4 jaar",
                    "5 jaar",
                    "6 jaar",
                    "12 jaar"
                ],
                correct: 1,
                explanation: "Vanaf 5 jaar moeten kinderen verplicht naar school (Leerplicht). De meeste kinderen beginnen al met 4 jaar."
            },
            {
                question: "Tot welke leeftijd duurt de leerplicht minimaal?",
                options: [
                    "Tot 12 jaar",
                    "Tot 16 jaar (of 18 zonder startkwalificatie)",
                    "Tot 21 jaar",
                    "Tot je werk hebt"
                ],
                correct: 1,
                explanation: "Leerplicht duurt tot 16 jaar. Als je dan nog geen diploma hebt (startkwalificatie), moet je doorleren tot 18 jaar."
            },
            {
                question: "Wat is het vervolg na de basisschool?",
                options: [
                    "De universiteit",
                    "De middelbare school (VMBO, HAVO of VWO)",
                    "Het MBO",
                    "De crèche"
                ],
                correct: 1,
                explanation: "Na groep 8 van de basisschool gaan kinderen naar de middelbare school."
            },
            {
                question: "Is de ouderbijdrage voor schoolreisjes verplicht?",
                options: [
                    "Ja, altijd",
                    "Nee, het is vrijwillig",
                    "Alleen bij privé scholen",
                    "Alleen als je rijk bent"
                ],
                correct: 1,
                explanation: "De ouderbijdrage is wettelijk vrijwillig. Een school mag een kind niet uitsluiten van activiteiten als ouders niet betalen."
            },
            {
                question: "Je kind is ziek. Wat doe je?",
                options: [
                    "Je houdt het kind thuis, school merkt het wel",
                    "Je belt school 's ochtends vroeg om het te melden",
                    "Je stuurt het kind toch naar school",
                    "Je belt de politie"
                ],
                correct: 1,
                explanation: "Je moet de school voor aanvang van de lessen (vaak 08:30) bellen om je kind ziek te melden."
            },
            {
                question: "Wat doet het Consultatiebureau?",
                options: [
                    "Huiswerkbegeleiding",
                    "Medische controles en vaccinaties voor kinderen van 0-4 jaar",
                    "Sportactiviteiten",
                    "Schoolkeuze advies"
                ],
                correct: 1,
                explanation: "Het consultatiebureau controleert de groei en gezondheid van kleine kinderen (0-4 jaar) en geeft vaccinaties."
            },
            {
                question: "Wat is 'ouderparticipatie'?",
                options: [
                    "Ouders die samen met de kinderen in de klas zitten",
                    "Ouders die helpen op school (lezen, schoonmaken, reisjes)",
                    "Ouders die de lessen bepalen",
                    "Ouders die betalen voor de school"
                ],
                correct: 1,
                explanation: "Scholen vragen ouders vaak om te helpen bij activiteiten, zoals voorlezen (`leesouder`) of meehelpen bij een sportdag."
            },
            {
                question: "Welk niveau bereidt voor op de Universiteit?",
                options: [
                    "VMBO",
                    "MBO",
                    "HAVO",
                    "VWO (Gymnasium/Atheneum)"
                ],
                correct: 3,
                explanation: "VWO (Voorbereidend Wetenschappelijk Onderwijs) duurt 6 jaar en bereidt voor op de Universiteit (WO)."
            },
            {
                question: "Wat is een peuterspeelzaal?",
                options: [
                    "Een school voor honden",
                    "Een plek waar kinderen van 2 tot 4 jaar spelen en leren",
                    "Een speeltuin buiten",
                    "Een zwembad"
                ],
                correct: 1,
                explanation: "De peuterspeelzaal is voor kinderen van 2 tot 4 jaar om ze voor te bereiden op de basisschool."
            },
            {
                question: "Wat is de BSO (Buitenschoolse Opvang)?",
                options: [
                    "Opvang voor kinderen na schooltijd en in vakanties (als ouders werken)",
                    "Een speciale school voor zieke kinderen",
                    "Huiswerkbegeleiding",
                    "Zwemles"
                ],
                correct: 0,
                explanation: "De BSO zorgt voor kinderen na schooltijd totdat de ouders klaar zijn met werken."
            },
            {
                question: "Hebben alle scholen in Nederland tegelijk zomervakantie?",
                options: [
                    "Ja, precies dezelfde weken",
                    "Nee, de vakanties zijn gespreid over regio's (Noord, Midden, Zuid)",
                    "Alleen in het weekend",
                    "Scholen hebben geen vakantie"
                ],
                correct: 1,
                explanation: "Om files te voorkomen, hebben de regio's Noord, Midden en Zuid op verschillende momenten vakantie."
            },
            {
                question: "Je kind spijbelt vaak van school. Wie kan er komen controleren?",
                options: [
                    "De koning",
                    "De leerplichtambtenaar",
                    "De brandweer",
                    "De buurman"
                ],
                correct: 1,
                explanation: "De leerplichtambtenaar controleert of kinderen naar school gaan en geeft boetes bij spijbelen."
            },
            {
                question: "Moeten kinderen in Nederland zwemles volgen?",
                options: [
                    "Nee, dat is verboden",
                    "Ja, bijna alle kinderen halen hun zwemdiploma (A, B, C)",
                    "Alleen als ze aan zee wonen",
                    "Alleen op de middelbare school"
                ],
                correct: 1,
                explanation: "Omdat er zoveel water is in Nederland, leren bijna alle kinderen zwemmen (zwemdiploma A is de basis)."
            },
            {
                question: "Is de bibliotheek gratis?",
                options: [
                    "Nee, nooit",
                    "Ja, voor kinderen tot 18 jaar is het meestal gratis",
                    "Alleen op zondag",
                    "Alleen voor studenten"
                ],
                correct: 1,
                explanation: "Voor kinderen tot 18 jaar is het lidmaatschap van de bibliotheek in de meeste gemeenten gratis."
            },
            {
                question: "Wat is de Cito-toets (of Eindtoets)?",
                options: [
                    "Een toets om te kijken of je mag zwemmen",
                    "Een toets in groep 8 die helpt bepalen naar welk niveau middelbare school je gaat",
                    "Een toets voor de leraar",
                    "Een taaltoets voor inburgering"
                ],
                correct: 1,
                explanation: "De eindtoets in groep 8 meet wat een kind heeft geleerd en geeft advies voor het vervolgonderwijs."
            },
            {
                question: "Wat gebeurt er als een kind slecht presteert op school?",
                options: [
                    "Het wordt van school gestuurd",
                    "Het moet misschien een jaar overdoen ('zittenblijven')",
                    "Het moet naar de gevangenis",
                    "Het krijgt strafwerk"
                ],
                correct: 1,
                explanation: "Als de resultaten onvoldoende zijn, kan de school beslissen dat een leerling het jaar moet overdoen (doubleren)."
            },
            {
                question: "Je kind spreekt nog geen Nederlands. Waar gaat het naar school?",
                options: [
                    "Direct naar groep 8",
                    "Naar een Internationale Schakelklas (ISK) om eerst Nederlands te leren",
                    "Het mag niet naar school",
                    "Naar de universiteit"
                ],
                correct: 1,
                explanation: "Kinderen die net in Nederland zijn en de taal niet spreken, gaan eerst naar een ISK (Internationale Schakelklas)."
            },
            {
                question: "Wat is een 'continuerooster'?",
                options: [
                    "School is 24 uur open",
                    "Kinderen blijven tussen de middag op school eten en zijn eerder vrij",
                    "Kinderen gaan alleen 's ochtends naar school",
                    "School is ook in het weekend"
                ],
                correct: 1,
                explanation: "Bij een continuerooster hebben kinderen een korte lunchpauze op school en zijn ze vaak rond 14:00 of 14:30 uur vrij."
            },
            {
                question: "Wie kiest de basisschool voor je kind?",
                options: [
                    "De gemeente bepaalt dat",
                    "Je mag zelf een school kiezen (Vrije schoolkeuze)",
                    "De huisarts",
                    "De buren"
                ],
                correct: 1,
                explanation: "In Nederland is er vrije schoolkeuze. Ouders mogen zelf kiezen naar welke school hun kind gaat (openbaar of bijzonder)."
            },
            {
                question: "Wat zijn 'openbare' scholen?",
                options: [
                    "Scholen zonder godsdienstige basis, iedereen is welkom",
                    "Scholen alleen voor christenen",
                    "Scholen die altijd open zijn",
                    "Dure privéscholen"
                ],
                correct: 0,
                explanation: "Openbare scholen gaan uit van geen enkele godsdienst of levensovertuiging en zijn toegankelijk voor alle kinderen."
            }
        ]
    },

    5: {
        title: "5. Gezondheid (Health)",
        icon: "🏥",
        studyMaterial: [
            {
                title: "Belangrijke Woorden",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Huisarts</strong> - General Practitioner (First person to call if sick)</li>
                        <li><strong>Apotheek</strong> - Pharmacy (Where you get medicine)</li>
                        <li><strong>Eigen risico</strong> - Deductible (First ~€385 you pay yourself per year)</li>
                        <li><strong>Basisverzekering</strong> - Basic health insurance (Mandatory for everyone)</li>
                        <li><strong>Zorgtoeslag</strong> - Health care allowance (Money to help pay insurance)</li>
                        <li><strong>Huisartsenpost</strong> - GP post (For urgent help in evenings/weekends)</li>
                        <li><strong>Spoedeisende Hulp (SEH)</strong> - Emergency Room (Only for life-threatening situations)</li>
                    </ul>
                `
            },
            {
                title: "Key Facts: Healthcare",
                content: `
                    <div class="fact-box">
                        <h4>👩‍⚕️ De Huisarts (GP)</h4>
                        <ul>
                            <li><strong>Poortwachter</strong>: You ALWAYS go to the huisarts first. They decide if you need a specialist in the hospital.</li>
                            <li><strong>Verwijsbrief</strong>: Letter from GP to see a specialist. Without this, insurance won't pay!</li>
                            <li><strong>Antibiotica</strong>: Doctors in NL are strict. You don't get antibiotics for a flu or cold. Paracetamol is the national cure.</li>
                        </ul>
                        <h4>🚑 Spoed (Emergency)</h4>
                        <ul>
                            <li><strong>112</strong>: Life-threatening (Accident, Fire, Police).</li>
                            <li><strong>Huisartsenpost</strong>: Urgent but not dying (e.g., high fever at night). Call first!</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Wat is verplicht voor iedereen in Nederland?",
                options: [
                    "Een ziektekostenverzekering (zorgverzekering)",
                    "Een huisarts",
                    "Een ziekenhuis kiezen",
                    "Medicijnen kopen"
                ],
                correct: 0,
                explanation: "In Nederland is een basisverzekering voor ziektekosten wettelijk verplicht voor iedere inwoner."
            },
            {
                question: "Je hebt last van je rug. Naar wie ga je eerst?",
                options: [
                    "Direct naar het ziekenhuis",
                    "Naar de specialist",
                    "Naar de huisarts",
                    "Naar de apotheek"
                ],
                correct: 2,
                explanation: "Je gaat altijd eerst naar de huisarts. Die kan je doorverwijzen naar een specialist als dat nodig is."
            },
            {
                question: "Wat is 'eigen risico'?",
                options: [
                    "Geld dat je krijgt van de overheid",
                    "Het bedrag (bijv. €385) dat je eerst zelf moet betalen voor zorg uit de basisverzekering",
                    "Een verzekering voor je huis",
                    "Gevaarlijk werk"
                ],
                correct: 1,
                explanation: "Het eigen risico is het bedrag dat je elk jaar eerst zelf moet betalen voordat de verzekering begint te betalen (behalve voor de huisarts)."
            },
            {
                question: "Je krijgt medicijnen van de dokter. Waar haal je die op?",
                options: [
                    "Bij de drogist (Kruidvat/Etos)",
                    "Bij de supermarkt",
                    "Bij de apotheek",
                    "Bij de buren"
                ],
                correct: 2,
                explanation: "Medicijnen op recept haal je bij de apotheek. Paracetamol kun je wel bij de drogist kopen."
            },
            {
                question: "Het is zondag en je kind heeft opeens hoge koorts en is erg ziek. Wie bel je?",
                options: [
                    "Je wacht tot maandag",
                    "De huisartsenpost",
                    "De tandarts",
                    "De gemeente"
                ],
                correct: 1,
                explanation: "Voor spoedzorg in het weekend of 's avonds bel je de huisartsenpost."
            },
            {
                question: "Wat heb je nodig om naar een specialist in het ziekenhuis te gaan (en vergoed te krijgen)?",
                options: [
                    "Veel geld",
                    "Een verwijsbrief van de huisarts",
                    "Toestemming van de koning",
                    "Een paspoort"
                ],
                correct: 1,
                explanation: "Zonder verwijsbrief van de huisarts betaalt de zorgverzekeraar de rekening van de specialist meestal niet."
            },
            {
                question: "Wanneer bel je 112?",
                options: [
                    "Als je fiets gestolen is",
                    "Als je buikpijn hebt",
                    "Bij een levensbedreigende situatie (brand, ernstig ongeval)",
                    "Als je de weg zoekt"
                ],
                correct: 2,
                explanation: "112 is alleen voor levensbedreigende noodgevallen."
            },
            {
                question: "Betaal je eigen risico voor een bezoek aan de huisarts?",
                options: [
                    "Ja, altijd",
                    "Nee, de huisarts gaat niet van je eigen risico af",
                    "Alleen als je medicijnen krijgt",
                    "Alleen in het weekend"
                ],
                correct: 1,
                explanation: "De huisarts is gratis (wordt volledig vergoed) en gaat NIET ten koste van je eigen risico."
            }
        ]
    },

    6: {
        title: "6. Instanties (Institutions)",
        icon: "🏢",
        studyMaterial: [
            {
                title: "Belangrijke Woorden",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Gemeente</strong> - Municipality (Local government in your city)</li>
                        <li><strong>Belastingdienst</strong> - Tax Authority (Collects taxes & pays allowances)</li>
                        <li><strong>UWV</strong> - Benefits Agency (Unemployment & Work)</li>
                        <li><strong>DigiD</strong> - Digital Identity (Your online login for government)</li>
                        <li><strong>BSN</strong> - Citizen Service Number (Your unique personal number)</li>
                        <li><strong>Inburgeren</strong> - Civic Integration (Learning language & culture)</li>
                        <li><strong>Verblijfsvergunning</strong> - Residence Permit (Card from IND)</li>
                    </ul>
                `
            },
            {
                title: "Key Facts: Government",
                content: `
                    <div class="fact-box">
                        <h4>🏛️ De Gemeente</h4>
                        <ul>
                            <li><strong>Inschrijven</strong>: When you move, you register here within 5 days.</li>
                            <li><strong>Burgerzaken</strong>: Department for Passports, Driving License, Birth Registration.</li>
                            <li><strong>Afval</strong>: Municipality arranges trash collection.</li>
                        </ul>
                        <h4>💻 Digital Government</h4>
                        <ul>
                            <li><strong>DigiD</strong>: STRICTLY PRIVATE. Never give your login to anyone. Used for Taxes, Municipality, UWV.</li>
                            <li><strong>MijnOverheid.nl</strong>: Where you receive digital mail from the government ("Berichtenbox").</li>
                        </ul>
                        <h4>👮 Politie</h4>
                        <ul>
                            <li><strong>Wijkagent</strong>: Police officer for your neighborhood. Contact for non-urgent trouble.</li>
                            <li><strong>Aangifte doen</strong>: Reporting a crime (theft, violence) to the police.</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Je verhuist naar een andere stad. Wat moet je doen?",
                options: [
                    "Niks",
                    "Inschrijven bij de nieuwe gemeente (binnen 5 dagen)",
                    "De koning bellen",
                    "Je paspoort inleveren"
                ],
                correct: 1,
                explanation: "Je bent verplicht je binnen 5 dagen na verhuizing in te schrijven bij je (nieuwe) gemeente."
            },
            {
                question: "Waarvoor gebruik je je DigiD?",
                options: [
                    "Om in te loggen op Facebook",
                    "Om in te loggen bij overheidswebsites (Belastingdienst, Gemeente)",
                    "Om te pinnen in de winkel",
                    "Om de deur open te doen"
                ],
                correct: 1,
                explanation: "DigiD is je digitale identiteit voor contact met de overheid en zorginstellingen."
            },
            {
                question: "Mag je je DigiD wachtwoord aan iemand anders geven?",
                options: [
                    "Ja, aan je buren",
                    "Ja, aan de politie",
                    "Nee, nooit. Het is strikt persoonlijk",
                    "Alleen aan je baas"
                ],
                correct: 2,
                explanation: "Je mag je DigiD gegevens nooit aan iemand anders geven. Het is strikt privé om fraude te voorkomen."
            },
            {
                question: "Je krijgt een baby. Waar moet je het kind aangeven?",
                options: [
                    "Bij het ziekenhuis",
                    "Bij de gemeente (Burgerzaken)",
                    "Bij de belastingdienst",
                    "Bij de politie"
                ],
                correct: 1,
                explanation: "Je moet de geboorte van een kind binnen 3 dagen aangeven bij de gemeente waar het kind geboren is."
            },
            {
                question: "Wat is de 'Berichtenbox' op MijnOverheid.nl?",
                options: [
                    "Een chatbox met de koning",
                    "Je digitale brievenbus voor post van de overheid",
                    "Een opslag voor foto's",
                    "Een nieuwswebsite"
                ],
                correct: 1,
                explanation: "In de Berichtenbox ontvang je digitale post van de overheid, zoals belastingbrieven en berichten over je uitkering of toeslagen."
            },
            {
                question: "Je fiets is gestolen. Wat doe je?",
                options: [
                    "Je belt 112",
                    "Je doet aangifte bij de politie (online of op bureau)",
                    "Je belt de gemeente",
                    "Je koopt een auto"
                ],
                correct: 1,
                explanation: "Voor diefstal bel je geen 112 (geen spoed). Je doet aangifte bij de politie, vaak kan dit online."
            },
            {
                question: "Wat is een BSN?",
                options: [
                    "Burger Service Nummer (persoonlijk nummer voor overheid/zorg)",
                    "Belasting Service Nederland",
                    "Bus Service Nummer",
                    "Bank Service Nummer"
                ],
                correct: 0,
                explanation: "BSN staat voor Burgerservicenummer. Iedereen die in Nederland ingeschreven staat, heeft een uniek BSN."
            },
            {
                question: "Wie zorgt er voor het ophalen van huisvuil en het onderhoud van de straten?",
                options: [
                    "De provincie",
                    "De gemeente",
                    "De rijksoverheid",
                    "De politie"
                ],
                correct: 1,
                explanation: "De gemeente is verantwoordelijk voor de lokale voorzieningen zoals afvalophaling, straten, en parken."
            },
            {
                question: "Wat is de OV-chipkaart?",
                options: [
                    "Een identiteitskaart",
                    "Een kaart om mee te betalen in de supermarkt",
                    "De kaart waarmee je betaalt voor bus, tram, trein en metro",
                    "Een kortingskaart voor musea"
                ],
                correct: 2,
                explanation: "De OV-chipkaart is het betaalmiddel voor al het openbaar vervoer in Nederland."
            },
            {
                question: "Wat moet je altijd doen als je met de trein reist?",
                options: [
                    "De machinist een hand geven",
                    "Inchecken (bij vertrek) en uitchecken (bij aankomst)",
                    "Je paspoort laten zien",
                    "Hardop zingen"
                ],
                correct: 1,
                explanation: "Je moet altijd inchecken bij het instappen en uitchecken bij het uitstappen, anders reis je zwart (zonder geldig kaartje)."
            },
            {
                question: "Wanneer moet je je belastingaangifte (inkomstenbelasting) doen?",
                options: [
                    "Voor 1 januari",
                    "Voor 1 mei (elk jaar)",
                    "Op je verjaardag",
                    "Dat hoeft nooit"
                ],
                correct: 1,
                explanation: "De aangifte inkomstenbelasting moet je elk jaar vóór 1 mei indienen bij de Belastingdienst."
            },
            {
                question: "Je hebt een laag inkomen. Waar kun je 'toeslagen' (zoals huurtoeslag) aanvragen?",
                options: [
                    "Bij de politie",
                    "Bij de Belastingdienst (Toeslagen)",
                    "Bij je baas",
                    "Bij de bank"
                ],
                correct: 1,
                explanation: "Toeslagen vraag je aan via de website van de Belastingdienst (Mijn Toeslagen)."
            },
            {
                question: "Wat doet de IND (Immigratie- en Naturalisatiedienst)?",
                options: [
                    "Die bouwt huizen",
                    "Die beslist over verblijfsvergunningen en naturalisatie (Nederlander worden)",
                    "Die regelt het verkeer",
                    "Die deelt bekeuringen uit"
                ],
                correct: 1,
                explanation: "De IND beoordeelt alle aanvragen van mensen die in Nederland willen wonen of Nederlander willen worden."
            },
            {
                question: "Naast belasting betaal je ook voor het water. Wie regelt dat?",
                options: [
                    "De brandweer",
                    "Het Waterschap",
                    "De dijkgraaf",
                    "De koning"
                ],
                correct: 1,
                explanation: "Het Waterschap zorgt voor schoon water en droge voeten. Je betaalt hier waterschapsbelasting voor."
            },
            {
                question: "Je hebt juridisch advies nodig maar hebt weinig geld. Waar ga je heen?",
                options: [
                    "Naar het politiebureau",
                    "Naar de duurste advocaat",
                    "Naar het Juridisch Loket (voor gratis advies)",
                    "Naar de bibliotheek"
                ],
                correct: 2,
                explanation: "Het Juridisch Loket geeft gratis juridisch advies aan mensen met een laag inkomen."
            },
            {
                question: "Je ziet 's nachts iemand inbreken bij de buren. Wie bel je?",
                options: [
                    "De wijkagent",
                    "112 (spoed)",
                    "0900-8844 (geen spoed)",
                    "De gemeente"
                ],
                correct: 1,
                explanation: "Als je een misdrijf ziet gebeuren (heterdaad), bel je altijd 112."
            },
            {
                question: "Je hebt ruzie met de buren over lawaai. Wie bel je als praten niet helpt?",
                options: [
                    "112",
                    "De wijkagent (0900-8844)",
                    "De rechter",
                    "Het leger"
                ],
                correct: 1,
                explanation: "Voor buurtproblemen kun je de wijkagent inschakelen via het nummer 0900-8844."
            },
            {
                question: "Wat is 'Marktplaats'?",
                options: [
                    "De markt in het centrum",
                    "Een website om tweedehands spullen te kopen en verkopen",
                    "Een supermarkt",
                    "Een bank"
                ],
                correct: 1,
                explanation: "Marktplaats.nl is een zeer populaire website in Nederland voor tweedehands handel."
            },
            {
                question: "Wat is belangrijk aan afval scheiden?",
                options: [
                    "Het is goedkoper",
                    "Het is beter voor het milieu (recycling)",
                    "De gemeente wil het",
                    "Alle bovenstaande antwoorden"
                ],
                correct: 3,
                explanation: "Afval scheiden (glas, papier, plastic, GFT) is goed voor het milieu en vaak ook goedkoper."
            },
            {
                question: "Iemand stuurt je een 'Tikkie'. Wat is dat?",
                options: [
                    "Een klap",
                    "Een betaalverzoek via WhatsApp om geld terug te betalen",
                    "Een boete",
                    "Een uitnodiging"
                ],
                correct: 1,
                explanation: "Een Tikkie is een populaire manier om via de bank app geld terug te vragen aan vrienden of familie."
            }
        ]
    },

    7: {
        title: "7. Politiek (Politics)",
        icon: "🗳️",
        studyMaterial: [
            {
                title: "Belangrijke Woorden",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Grondwet</strong> - Constitution (Highest law)</li>
                        <li><strong>Democratie</strong> - Democracy (People choose the government)</li>
                        <li><strong>Tweede Kamer</strong> - House of Representatives (150 seats, make laws)</li>
                        <li><strong>Eerste Kamer</strong> - Senate (75 seats, check laws)</li>
                        <li><strong>Minister-president</strong> - Prime Minister (Leader of the government)</li>
                        <li><strong>Wethouder</strong> - Alderman (Executes policy in the municipality)</li>
                        <li><strong>Stemrecht</strong> - Right to vote (18+ years)</li>
                    </ul>
                `
            },
            {
                title: "Key Facts: Politics",
                content: `
                    <div class="fact-box">
                        <h4>👑 Koning & Regering</h4>
                        <ul>
                            <li><strong>Koning</strong>: Head of State. Ceremonial. Does not make laws.</li>
                            <li><strong>Regering</strong>: Koning + Ministers.</li>
                            <li><strong>Kabinet</strong>: Ministers + Staatssecretarissen.</li>
                        </ul>
                        <h4>🗳️ Verkiezingen (Elections)</h4>
                        <ul>
                            <li><strong>Tweede Kamer</strong>: Every 4 years. Dutch citizens 18+ can vote.</li>
                            <li><strong>Gemeenteraad</strong>: Every 4 years. Residents (inc. non-citizens after 5 years) can vote.</li>
                            <li><strong>Prinsjesdag</strong>: Third Tuesday of September. King reads 'Troonrede' (plans for the year). koffer (Budget) is presented.</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Wie is het hoofd van de Nederlandse regering?",
                options: [
                    "De koning",
                    "De burgemeester",
                    "De minister-president",
                    "De president"
                ],
                correct: 2,
                explanation: "De minister-president is het hoofd van de Nederlandse regering. Nederland heeft geen president."
            },
            {
                question: "Wie maken de wetten in Nederland?",
                options: [
                    "De Koning en de Koningin",
                    "De Regering en het Parlement (Eerste en Tweede Kamer)",
                    "De rechters",
                    "De politie"
                ],
                correct: 1,
                explanation: "De regering en het parlement (Staten-Generaal) maken samen de wetten."
            },
            {
                question: "Hoe vaak zijn er verkiezingen voor de Tweede Kamer?",
                options: [
                    "Elk jaar",
                    "Elke 4 jaar",
                    "Elke 5 jaar",
                    "Als de koning dat wil"
                ],
                correct: 1,
                explanation: "Normaal gesproken zijn er elke 4 jaar verkiezingen voor de Tweede Kamer."
            },
            {
                question: "Wat gebeurt er op Prinsjesdag (derde dinsdag van september)?",
                options: [
                    "De Koning is jarig",
                    "De Koning leest de plannen voor het komende jaar voor (Troonrede)",
                    "Iedereen is vrij",
                    "Er zijn verkiezingen"
                ],
                correct: 1,
                explanation: "Op Prinsjesdag leest de Koning de Troonrede voor en wordt de Rijksbegroting gepresenteerd."
            },
            {
                question: "Hoeveel zetels heeft de Tweede Kamer?",
                options: [
                    "75",
                    "100",
                    "150",
                    "200"
                ],
                correct: 2,
                explanation: "De Tweede Kamer heeft 150 zetels (stoelen). De Eerste Kamer heeft er 75."
            },
            {
                question: "Mag een buitenlander stemmen voor de Tweede Kamer?",
                options: [
                    "Ja, altijd",
                    "Nee, alleen Nederlanders (18+)",
                    "Ja, als je 5 jaar in Nederland woont",
                    "Alleen uit de EU"
                ],
                correct: 1,
                explanation: "Voor de Tweede Kamer mag je alleen stemmen als je de Nederlandse nationaliteit hebt."
            },
            {
                question: "Wat is de Trias Politica?",
                options: [
                    "De macht van de koning",
                    "De scheiding der machten (Wetgevende, Uitvoerende, Rechterlijke macht)",
                    "Drie politieke partijen",
                    "Een wet over drie dingen"
                ],
                correct: 1,
                explanation: "Trias Politica is de scheiding van de macht om machtsmisbruik te voorkomen. Rechters zijn onafhankelijk."
            },
            {
                question: "Wat is de rol van de Koning?",
                options: [
                    "Hij is de baas van alles",
                    "Hij maakt de wetten",
                    "Hij is het staatshoofd en heeft een ceremoniële functie",
                    "Hij kiest de ministers"
                ],
                correct: 2,
                explanation: "De Koning is het staatshoofd, maar heeft weinig politieke macht. Hij ondertekent wetten en vertegenwoordigt Nederland."
            },
            {
                question: "Wat is een 'coalitie'?",
                options: [
                    "Eén partij die alles alleen beslist",
                    "Een samenwerking tussen twee of meer partijen die samen de regering vormen",
                    "De partijen die niet in de regering zitten",
                    "Een ruzie in de Tweede Kamer"
                ],
                correct: 1,
                explanation: "Omdat geen enkele partij de meerderheid heeft, moeten partijen samenwerken (coalitie) om te regeren."
            },
            {
                question: "Wat is de 'oppositie'?",
                options: [
                    "De partijen in de regering",
                    "De partijen in de Tweede Kamer die NIET in de regering zitten",
                    "De ministers",
                    "De rechters"
                ],
                correct: 1,
                explanation: "De oppositiepartijen controleren de regering kritisch en hebben vaak andere ideeën."
            },
            {
                question: "Wat is een 'Regeerakkoord'?",
                options: [
                    "Een contract voor een huis",
                    "De afspraken die de regeringspartijen samen maken voor de komende 4 jaar",
                    "Een wet van de koning",
                    "Een afspraak met het buitenland"
                ],
                correct: 1,
                explanation: "In het regeerakkoord staan de plannen die de coalitiepartijen samen hebben afgesproken uit te voeren."
            },
            {
                question: "Wat betekent 'poldermodel'?",
                options: [
                    "Veel polders bouwen",
                    "Samenwerken en overleggen tot er een compromis is bereikt",
                    "Ruzie maken",
                    "De baas beslist alles"
                ],
                correct: 1,
                explanation: "Het poldermodel is de Nederlandse cultuur van overleggen en compromissen sluiten (water bij de wijn doen)."
            },
            {
                question: "Je gaat stemmen. Waar doe je dat?",
                options: [
                    "Bij de politie",
                    "In een stembureau (bijv. op een school of in het gemeentehuis)",
                    "Thuis",
                    "In het ziekenhuis"
                ],
                correct: 1,
                explanation: "Op de verkiezingsdag ga je naar een stembureau in je gemeente om je stem uit te brengen."
            },
            {
                question: "Wie is de baas van de provincie?",
                options: [
                    "De burgemeester",
                    "De Commissaris van de Koning",
                    "De minister-president",
                    "De wethouder"
                ],
                correct: 1,
                explanation: "De Commissaris van de Koning is de voorzitter van het bestuur van een provincie."
            },
            {
                question: "Nederland is lid van de Europese Unie (EU). Wat is een voordeel?",
                options: [
                    "Er is geen voordeel",
                    "Vrij reizen en handelen binnen de EU (open grenzen)",
                    "Je hoeft geen belasting te betalen",
                    "Nederland is de baas in Europa"
                ],
                correct: 1,
                explanation: "Door de EU kunnen mensen en goederen makkelijk de grens over, wat goed is voor de economie en vrijheid."
            },
            {
                question: "Wat is de NAVO (NATO)?",
                options: [
                    "Een sportclub",
                    "Een militaire samenwerking voor veiligheid en verdediging",
                    "Een handelsverdrag",
                    "Een bank"
                ],
                correct: 1,
                explanation: "De NAVO is een militair bondgenootschap. Als één lid wordt aangevallen, helpen de anderen."
            },
            {
                question: "Wat is de Verenigde Naties (VN)?",
                options: [
                    "Een organisatie van alle landen in de wereld voor vrede en veiligheid",
                    "De regering van Amerika",
                    "Een bank",
                    "Een leger"
                ],
                correct: 0,
                explanation: "De VN (United Nations) is een wereldwijde organisatie die samenwerkt aan vrede, mensenrechten en veiligheid."
            },
            {
                question: "Is het makkelijk om de Grondwet te veranderen?",
                options: [
                    "Ja, de koning kan dat zo doen",
                    "Nee, dat is heel moeilijk (er is een 2/3 meerderheid nodig)",
                    "Ja, met een gewone meerderheid",
                    "De Grondwet kan nooit veranderd worden"
                ],
                correct: 1,
                explanation: "De Grondwet is de belangrijkste wet. Om die te wijzigen is een zware procedure nodig met een 2/3 meerderheid."
            },
            {
                question: "Wat is een 'ministerie'?",
                options: [
                    "Een kerk",
                    "Een afdeling van de regering die zich met één onderwerp bezighoudt (bijv. Onderwijs, Justitie)",
                    "Het huis van de minister",
                    "Een school"
                ],
                correct: 1,
                explanation: "Elke minister heeft een eigen ministerie met ambtenaren die werken aan één specifiek beleidsterrein."
            },
            {
                question: "Wie is de lijsttrekker?",
                options: [
                    "De persoon die de stemmen telt",
                    "De nummer 1 op de kieslijst van een politieke partij (de leider bij verkiezingen)",
                    "Iemand die posters plakt",
                    "De koning"
                ],
                correct: 1,
                explanation: "De lijsttrekker is het gezicht van de partij tijdens de verkiezingscampagne."
            }
        ]
    },

    8: {
        title: "8. Geschiedenis en Geografie",
        icon: "📜",
        studyMaterial: [
            {
                title: "Belangrijke Woorden",
                content: `
                    <ul class="vocab-list">
                        <li><strong>Watersnoodramp</strong> - Flood disaster 1953 (caused erection of Deltawerken)</li>
                        <li><strong>Tweede Wereldoorlog</strong> - WWII (1940-1945)</li>
                        <li><strong>Bezetting</strong> - Occupation (Nazis occupied NL)</li>
                        <li><strong>Bevrijding</strong> - Liberation (5 May 1945)</li>
                        <li><strong>Gastarbeiders</strong> - Guest workers (immmigrants from Turkey/Morocco in 60s/70s)</li>
                        <li><strong>Kolonie</strong> - Colony (Indonesia, Suriname were Dutch colonies)</li>
                        <li><strong>Polder</strong> - Land reclaimed from water</li>
                    </ul>
                `
            },
            {
                title: "Key Facts: History",
                content: `
                    <div class="fact-box">
                        <h4>🌍 Geografie</h4>
                        <ul>
                            <li><strong>Randstad</strong>: Busy area covering Amsterdam, Rotterdam, Den Haag, Utrecht.</li>
                            <li><strong>Water</strong>: Large part of NL is below sea level. Dykes protect us.</li>
                        </ul>
                        <h4>📜 Belangrijke Momenten</h4>
                        <ul>
                            <li><strong>1568-1648</strong>: 80-jarige Oorlog against Spain. Willem van Oranje ("Vader des Vaderlands").</li>
                            <li><strong>1953</strong>: Watersnoodramp. Zeeland flooded. Result: Deltawerken (storm surge barriers).</li>
                            <li><strong>1940-1945</strong>: WWII. Rotterdam bombed. Anne Frank writes diary.</li>
                            <li><strong>4 mei</strong>: Dodenherdenking (2 minutes silence at 20:00).</li>
                            <li><strong>5 mei</strong>: Bevrijdingsdag (Party!).</li>
                        </ul>
                    </div>
                `
            }
        ],
        questions: [
            {
                question: "Wat is de hoofdstad van Nederland?",
                options: [
                    "Rotterdam",
                    "Den Haag",
                    "Amsterdam",
                    "Utrecht"
                ],
                correct: 2,
                explanation: "Amsterdam is de officiële hoofdstad. Den Haag is de stad waar de regering zit (hofstad)."
            },
            {
                question: "Wanneer is Nederland bevrijd van de Duitse bezetting?",
                options: [
                    "1940",
                    "1943",
                    "1945",
                    "1950"
                ],
                correct: 2,
                explanation: "Nederland werd op 5 mei 1945 bevrijd. De oorlog begon op 10 mei 1940."
            },
            {
                question: "Wie wordt de 'Vader des Vaderlands' genoemd?",
                options: [
                    "Koning Willem-Alexander",
                    "Willem van Oranje",
                    "Michiel de Ruyter",
                    "Rembrandt"
                ],
                correct: 1,
                explanation: "Willem van Oranje leidde de opstand tegen Spanje in de 16e eeuw en wordt gezien als de stichter van Nederland."
            },
            {
                question: "Wat herdenken we op 4 mei?",
                options: [
                    "De verjaardag van de koning",
                    "De slachtoffers van de Tweede Wereldoorlog en andere oorlogen",
                    "De bevrijding",
                    "De watersnoodramp"
                ],
                correct: 1,
                explanation: "Op 4 mei om 20:00 uur zijn we 2 minuten stil voor alle oorlogsslachtoffers sinds de Tweede Wereldoorlog."
            },
            {
                question: "Wat gebeurde er in 1953?",
                options: [
                    "De Tweede Wereldoorlog begon",
                    "Nederland werd Europees kampioen voetbal",
                    "De Watersnoodramp in Zeeland",
                    "De koning werd geboren"
                ],
                correct: 2,
                explanation: "In 1953 braken de dijken in Zeeland (Watersnoodramp). Daarna zijn de Deltawerken gebouwd."
            },
            {
                question: "Waar ligt de 'Randstad'?",
                options: [
                    "In het noorden (Groningen/Friesland)",
                    "In het westen (Amsterdam, Rotterdam, Den Haag, Utrecht)",
                    "In het zuiden (Limburg)",
                    "In het oosten (Enschede)"
                ],
                correct: 1,
                explanation: "De Randstad is het drukke, stedelijke gebied in het westen van Nederland waar de meeste mensen wonen."
            },
            {
                question: "Welke landen waren vroeger koloniën van Nederland?",
                options: [
                    "België en Duitsland",
                    "Indonesië en Suriname",
                    "Frankrijk en Spanje",
                    "China en Japan"
                ],
                correct: 1,
                explanation: "Indonesië (Nederlands-Indië) en Suriname waren grote koloniën van Nederland."
            },
            {
                question: "Waarom zijn de Deltawerken gebouwd?",
                options: [
                    "Om stroom op te wekken",
                    "Om Nederland te beschermen tegen het water (na 1953)",
                    "Als brug naar Engeland",
                    "Voor de vissen"
                ],
                correct: 1,
                explanation: "Na de ramp van 1953 zijn de Deltawerken gebouwd om Nederland veiliger te maken tegen overstromingen."
            },
            {
                question: "Wie was Rembrandt van Rijn?",
                options: [
                    "Een beroemde schilder uit de Gouden Eeuw",
                    "Een koning",
                    "Een generaal",
                    "Een schrijver"
                ],
                correct: 0,
                explanation: "Rembrandt is een van de beroemdste Nederlandse schilders ter wereld, bekend van 'De Nachtwacht'."
            },
            {
                question: "Wat was de VOC (Verenigde Oost-Indische Compagnie)?",
                options: [
                    "Een voetbalclub",
                    "Een groot handelsbedrijf dat in de 17e en 18e eeuw handel dreef met Azië",
                    "Een politieke partij",
                    "Een religieuze groep"
                ],
                correct: 1,
                explanation: "De VOC was het eerste multinationale bedrijf ter wereld en erg belangrijk voor de Nederlandse economie in de Gouden Eeuw."
            },
            {
                question: "Wie was Anne Frank?",
                options: [
                    "De koningin van Nederland",
                    "Een Joods meisje dat tijdens de oorlog onderdook en een dagboek schreef",
                    "Een beroemde zangeres",
                    "De eerste vrouwelijke minister"
                ],
                correct: 1,
                explanation: "Anne Frank werd wereldberoemd door haar dagboek, dat ze schreef tijdens haar onderduik in het Achterhuis in Amsterdam."
            },
            {
                question: "Welke landen horen bij het Koninkrijk der Nederlanden?",
                options: [
                    "Alleen Nederland",
                    "Nederland, Aruba, Curaçao en Sint Maarten",
                    "Nederland en België",
                    "Nederland en Duitsland"
                ],
                correct: 1,
                explanation: "Het Koninkrijk bestaat uit 4 landen: Nederland, Aruba, Curaçao en Sint Maarten (en de bijzondere gemeenten Bonaire, St. Eustatius, Saba)."
            },
            {
                question: "Wat gebeurde er in 1975 met Suriname?",
                options: [
                    "Het werd een provincie van Nederland",
                    "Het werd onafhankelijk",
                    "Het werd verkocht aan Engeland",
                    "Er was een grote oorlog"
                ],
                correct: 1,
                explanation: "Suriname was een Nederlandse kolonie en werd in 1975 een onafhankelijke republiek."
            },
            {
                question: "Wie waren de 'gastarbeiders'?",
                options: [
                    "Toeristen die hier kwamen werken",
                    "Mensen uit landen als Turkije en Marokko die in de jaren '60 en '70 naar Nederland kwamen om te werken",
                    "Studenten uit het buitenland",
                    "Vluchtelingen"
                ],
                correct: 1,
                explanation: "Gastarbeiders werden geworven om tekorten op de arbeidsmarkt op te vullen, vooral in de industrie."
            },
            {
                question: "Wat herdenken we met 'Keti Koti' (1 juli)?",
                options: [
                    "De verjaardag van de koning",
                    "De afschaffing van de slavernij",
                    "Het begin van de zomer",
                    "De bevrijding van de Duitsers"
                ],
                correct: 1,
                explanation: "Keti Koti betekent 'Verbroken Ketenen' en herdenkt de afschaffing van de slavernij in Suriname en de Antillen (1863)."
            },
            {
                question: "Wat is NAP (Normaal Amsterdams Peil)?",
                options: [
                    "De gemiddelde lengte van een Amsterdammer",
                    "Het referentiepunt voor de waterhoogte (0 meter)",
                    "De prijs van water",
                    "De hoogte van de Domtoren"
                ],
                correct: 1,
                explanation: "NAP is het nulpunt (zeeniveau) waaraan we meten hoe hoog of laag het water staat."
            },
            {
                question: "Waarom is de Haven van Rotterdam belangrijk?",
                options: [
                    "Het is de grootste haven van Europa en belangrijk voor de economie (Mainport)",
                    "Je kunt er goed vissen",
                    "Het is een mooi strand",
                    "De koning woont er"
                ],
                correct: 0,
                explanation: "De haven van Rotterdam is een economische motor voor Nederland ('Mainport') door de internationale handel."
            },
            {
                question: "Wat is Schiphol?",
                options: [
                    "Een dorp in Friesland",
                    "De grootste luchthaven van Nederland en een belangrijke economische motor",
                    "Een groot schip",
                    "Een politieke partij"
                ],
                correct: 1,
                explanation: "Schiphol is een belangrijke 'Mainport' en zorgt voor veel werkgelegenheid en internationale verbindingen."
            },
            {
                question: "In welke eeuw was de 'Gouden Eeuw'?",
                options: [
                    "De 15e eeuw",
                    "De 17e eeuw (1600-1700)",
                    "De 19e eeuw",
                    "De 21e eeuw"
                ],
                correct: 1,
                explanation: "De 17e eeuw heet de Gouden Eeuw vanwege de enorme bloei van handel, kunst en wetenschap in Nederland."
            },
            {
                question: "Wie is Vincent van Gogh?",
                options: [
                    "Een middeleeuwse ridder",
                    "Een wereldberoemde schilder uit de 19e eeuw",
                    "Een voetballer",
                    "Een staatsman"
                ],
                correct: 1,
                explanation: "Vincent van Gogh is een van de bekendste Nederlandse kunstschilders, beroemd om zijn kleurgebruik (Zonnebloemen)."
            }
        ]
    }
};

