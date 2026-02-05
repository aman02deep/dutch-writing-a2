// Exam Data Structure
var readingExams = [
    {
        id: "exam1",
        title: "Oefentoets 1",
        texts: [
            {
                "id": "e1-t1",
                "title": "Tekst 1: Vuurwerk",
                "context": "Het is december. Paulo krijgt van de gemeente een folder met informatie over het afsteken van vuurwerk.",
                "text": "Wanneer mag u vuurwerk afsteken?\nU mag vuurwerk afsteken tussen 31 december 18.00 uur en 1 januari 02.00 uur.\nU kunt een boete van € 100 krijgen als u vuurwerk afsteekt buiten deze tijden.\n\nVuurwerkverbod op bepaalde plekken\nIn onze gemeente is op sommige plekken het afsteken van vuurwerk verboden: in het winkelcentrum, in de buurt van het Maxima-ziekenhuis en bij alle kinderboerderijen.\n\nVeilig vuurwerk afsteken\nGaat u tijdens de jaarwisseling vuurwerk afsteken of buiten naar het vuurwerk kijken? Dan kunt u het beste uw ogen beschermen met een vuurwerkbril.",
                "questions": [
                    {
                        "id": "q1",
                        "question": "Paulo wil vuurwerk afsteken met oud & nieuw. Wanneer mag dat precies?",
                        "options": [
                            "Alleen op 31 december de hele dag.",
                            "Alleen op 1 januari de hele dag.",
                            "Van 31 december om 18 uur 's avonds tot 1 januari om 2 uur 's nachts.",
                            "Op 31 december & op 1 januari de hele dag."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "q2",
                        "question": "Paulo wil vuurwerk afsteken. Waar mag hij dat doen?",
                        "options": [
                            "Dichtbij het ziekenhuis.",
                            "In het winkelcentrum.",
                            "Niet bij het ziekenhuis en ook niet in het winkelcentrum."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "q3",
                        "question": "Paolo koopt een vuurwerkbril. Waarom koopt hij die speciale bril?",
                        "options": [
                            "Die bril beschermt zijn ogen.",
                            "Met die bril kan hij het vuurwerk beter zien.",
                            "De vuurwerkbril is verplicht."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e1-t2",
                "title": "Tekst 2: E-mail van broer",
                "context": "Nanda krijgt een e-mail van haar broer Adriaan en zijn vriend Olivier. Zij schrijven haar over het plan voor het weekend.",
                "text": "Hoi Nanda\nHoe gaat het met je? Met ons is alles goed. Het is druk in onze kaaswinkel en ook bij ons thuis. Dit weekend hebben we een afspraak met je. We hadden afgesproken, dat we zaterdagochtend om 10 uur bij jou zijn. We gaan je trakteren op een dagje uit. We komen, maar we moeten in de ochtend nog werken in onze winkel. Dus 10 uur redden we niet. Het wordt iets later, we denken half 12. We sturen je een foto mee van het bootje, dat we gehuurd hebben. Daarmee gaan we zaterdagmiddag samen het water op. Leuk, toch?\nWij slapen van zaterdag op zondag in een Bed & Breakfast, dichtbij jouw huis. Op zondagochtend gaan we zoals afgesproken samen met jou om 10 uur naar de kerk. We hebben er zin in!\nGroetjes en tot zaterdag, Adriaan & Olivier",
                "questions": [
                    {
                        "id": "q4",
                        "question": "Nanda krijgt bezoek. Wanneer komen Adriaan en Olivier aan?",
                        "options": [
                            "Op zaterdagochtend om 10 uur.",
                            "Op zaterdagochtend om half 12.",
                            "Op zondagochtend om 10 uur.",
                            "Zaterdagmiddag."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "q5",
                        "question": "Moeten Adriaan en Olivier op zaterdag werken?",
                        "options": [
                            "Ja, zij moeten eerst werken op hun boot.",
                            "Ja, zij moeten eerst werken in hun winkel.",
                            "Ja, zij hebben een Bed & Breakfast-bedrijf.",
                            "Nee, zij staan vroeg op en gaan extra vroeg naar Nanda."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e1-t3",
                "title": "Tekst 3: Schade aan auto",
                "context": "Fatima heeft schade aan haar nieuwe auto. Zij wil de kosten van de schade vergoed krijgen van de verzekeringsmaatschappij. Zij krijgt deze e-mail.",
                "text": "Geachte heer, mevrouw,\nWij hebben uw vraag over schadevergoeding ontvangen. U heeft schade aan uw nieuwe auto. U wilt dat wij deze schade vergoeden. U hebt ons alle informatie gestuurd over de schade.\nOp basis van de informatie die u ons heeft gegeven, kunnen we u het volgende meedelen: u hebt recht op een schadevergoeding, maar u hebt ook een eigen risico van € 250. U moet, zoals ook in de polis staat, uw auto laten repareren bij uw eigen Toyota-garage.\nWij wensen u na deze reparatie weer veel schadevrije kilometers!\nMet vriendelijke groet,\nAutoverzekeringen ARAG",
                "questions": [
                    {
                        "id": "q6",
                        "question": "Hoeveel schadevergoeding krijgt Fatima?",
                        "options": [
                            "De schade aan de nieuwe auto wordt 100% vergoed.",
                            "Zij zal € 250 euro schadevergoeding krijgen van de verzekering.",
                            "Zij krijgt een vergoeding, maar zij moet € 250 zelf betalen.",
                            "De garage weet hoeveel schadevergoeding Fatima zal krijgen."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "q7",
                        "question": "Wie gaat de auto repareren?",
                        "options": [
                            "Fatima heeft de auto zelf gerepareerd.",
                            "De ARAG repareert de auto van Fatima.",
                            "De Toyota-garage gaat de auto van Fatima repareren."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e1-t4",
                "title": "Tekst 4: Tijdschrift Abonnement",
                "context": "Maxima ziet een folder met reclame voor een abonnement op een tijdschrift.",
                "text": "Storyplus-magazine - speciaal voor u!\n40% korting\nStoryplus-magazine is al tientallen jaren het belangrijkste tijdschrift voor iedereen die alles wil weten van de Nederlandse televisiesterren en de leden van het koninklijk huis. En zegt u nu zelf: wie wil dat niet? Storyplus-magazine verschijnt wekelijks. Wij hebben voor u een speciaal aanbod: U betaalt niet € 82,95, maar slechts € 49,75 voor een jaarabonnement. Dat is een korting van 40%. U betaalt minder dan 1 euro per week!\nWilt u straks ook alles weten over onze koning, over onze koningin en over hun kinderen? Wilt u het laatste nieuws weten over alle bekende Nederlanders die u elke dag op de televisie ziet? Dat kan!\nLaat deze unieke kans niet lopen: bel uiterlijk vóór 31 december naar 0900 244.62 44 of vul (vóór 31 december) het formulier in op www.storyplus.nl\nStoryplus-magazine... Lees ons elke week en u weet echt alles!!!",
                "questions": [
                    {
                        "id": "q8",
                        "question": "Wat voor soort tijdschrift is Storyplus-magazine?",
                        "options": [
                            "Een dagblad.",
                            "Een maandblad.",
                            "Een weekblad."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "q9",
                        "question": "Wat voor nieuws kan Maxima lezen in Storyplus-magazine?",
                        "options": [
                            "Nieuws over het koninklijk huis.",
                            "Nieuws over belangrijke politieke zaken.",
                            "Nieuws over kleding die je met 40% korting kunt kopen."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "q10",
                        "question": "Maxima wil een jaarabonnement nemen op Storyplus-magazine. Hoe kan zij gebruik maken van deze aanbieding van 40% korting?",
                        "options": [
                            "Zij moet deze week € 49,75 betalen aan Storyplus-magazine.",
                            "Zij moet deze maand € 49,75 betalen aan Storyplus-magazine.",
                            "Zij moet vóór 31 december bellen of een formulier invullen."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e1-t5",
                "title": "Tekst 5: Vergrijzing",
                "context": "Monica leest in de krant een bericht over vergrijzing. De mensen in Nederland worden ouder en ouder.",
                "text": "Vergrijzing\nEr komen steeds meer oude mensen in Nederland. In 2018 waren er 2.9 miljoen 65-plussers. In 2040 zullen dat er 4,7 miljoen zijn. Tot 2060 blijft dat aantal ongeveer hetzelfde. Vanaf 2025 komen er snel meer 80-plussers.\nIn 2040 is ongeveer 26 procent van de bevolking 65-plusser. Bijna 10% van de Nederlanders is in 2040 ouder dan 80 jaar. In 2012 waren er 686.227 mensen van 80 jaar of ouder, in 2040 zijn dat er 1.554.742.",
                "questions": [
                    {
                        "id": "q11",
                        "question": "Hoeveel 80-plussers zullen er in 2040 in Nederland wonen?",
                        "options": [
                            "2.900.000.",
                            "4.700.000.",
                            "1.554.742."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "q12",
                        "question": "Hoeveel procent van de Nederlandse bevolking is in 2040 ouder dan 65 jaar?",
                        "options": [
                            "26%.",
                            "10%.",
                            "Minder dan 10%.",
                            "Veel meer dan 26%."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "q13",
                        "question": "Hoeveel 65-plussers zijn er in 2060 ongeveer in Nederland?",
                        "options": [
                            "Hierover staat niets in deze tekst.",
                            "Ongeveer 4,7 miljoen.",
                            "Ongeveer 2,9 miljoen.",
                            "Ongeveer 1,5 miljoen."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e1-t6",
                "title": "Tekst 6: Ontslag nemen",
                "context": "Clara schrijft deze e-mail aan haar baas, Karel de Schone.",
                "text": "Aan: karel@deschone.nl\nOnderwerp: stoppen met werken bij De Schone B.V.\nBeste Karel de Schone,\nIk schrijf u deze mail om u te vertellen dat ik stop met het werk bij het bedrijf De Schone B.V.\nIk heb twee jaar lang bij u gewerkt, maar u wilt mij geen vast contract geven. Ook vind ik het salaris onvoldoende. Daarom ga ik weg.\nIk heb met plezier het werk gedaan en ik heb fijne collega's gehad, maar ik kan bij een andere werkgever een beter contract krijgen.\nIk wil per direct stoppen. Ik kom dus morgen ook niet werken.\nMijn collega's Maria en Carolien kunnen deze week mijn werk overnemen. Zij weten, dat ik stop bij uw bedrijf en zij weten dat ik deze mail aan u schrijf.\nMet vriendelijke groet,\nClara Marks.",
                "questions": [
                    {
                        "id": "q14",
                        "question": "Waarom stopt Clara met werken bij De Schone B.V.?",
                        "options": [
                            "Zij is ontevreden over haar salaris en over haar contract.",
                            "Zij vindt dat werk niet leuk.",
                            "Zij heeft ruzie met haar collega's Maria en Carolien."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "q15",
                        "question": "Wanneer stopt Clara precies met het werk bij De Schone B.V.?",
                        "options": [
                            "Over twee jaar.",
                            "Overmorgen.",
                            "Over een week.",
                            "Vandaag."
                        ],
                        "correct": 3
                    }
                ]
            },
            {
                "id": "e1-t7",
                "title": "Tekst 7: Werken in de zorg",
                "context": "Ivan zoekt informatie over werken in de zorgsector. Hij leest dit op een website.",
                "text": "Werken in de zorg.\nIn Nederland hebben in 2019 ruim 1 miljoen mensen betaald werk in de zorg. Ruim een derde van hen (36%) werkt in de verpleging, verzorging en thuiszorg (VVT), een kwart (27%) werkt in een ziekenhuis. Tussen 2013 en 2019 hebben steeds minder mensen een betaalde baan in de zorg gevonden.\nWel zijn er veel meer vrijwilligers in de zorg gaan werken. Dat heet mantelzorg: zieke en oude mensen worden verzorgd door hun familie of door een bekende.\nHet aantal mantelzorgers is tussen de drie en vier miljoen.",
                "questions": [
                    {
                        "id": "q16",
                        "question": "Ivan leest dat veel Nederlanders actief zijn in de zorgsector. Hoeveel Nederlanders hebben een betaalde baan in de zorg?",
                        "options": [
                            "Meer dan 1 miljoen.",
                            "370.000",
                            "Tussen de drie en vier miljoen.",
                            "280.000"
                        ],
                        "correct": 0
                    },
                    {
                        "id": "q17",
                        "question": "Wat is een mantelzorger volgens deze tekst?",
                        "options": [
                            "lemand die werkt met gehandicapten.",
                            "lemand die werkt in een ziekenhuis.",
                            "lemand die vrijwilligerswerk doet."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e1-t8",
                "title": "Tekst 8: Zwangerschapscursus",
                "context": "Manou is 18 weken zwanger. Zij krijgt een folder van haar huisarts.",
                "text": "'Fit voor de bevalling'\nJe krijgt binnenkort een kindje. Spannend!\nGeef je nu op voor de zwangerschapscursus 'Fit voor de bevalling'. Tijdens de cursus die begint op 1 maart, krijg je veel informatie over de zwangerschap en je doet ook wekelijks yoga-oefeningen in Het Buurtcentrum in Kollum.\nDeze oefeningen zijn belangrijk als na 9 maanden de baby komt! Met speciale ademhaling kun je in deze periode tot en met de geboorte van je kindje fit blijven. Je komt naar de cursus samen met andere aanstaande moeders.\nLesinformatie\nDe cursus bestaat uit 7 lessen à 90 minuten en vindt plaats in kleine groepen (maximaal 10 deelnemers).\nKosten Zwangerschapsyoga: € 85\nTijdstip: Maandagavond 19.15 uur. Start: 1 maart.\nPlaats: Buurtcentrum, Hoofdstraat 1, Kollum",
                "questions": [
                    {
                        "id": "q18",
                        "question": "Manou wil graag fit blijven in de periode van de zwangerschap. Wat gaat zij doen?",
                        "options": [
                            "Zij gaat 7 weken lang meedoen aan een cursus zwangerschapsyoga.",
                            "Zij gaat 9 maanden lang meedoen aan de cursus zwangerschapsyoga.",
                            "Zij gaat 18 weken lang meedoen aan de cursus zwangerschapsyoga."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "q19",
                        "question": "Manou wil meedoen aan deze cursus. Wat krijgt zij tijdens de cursus?",
                        "options": [
                            "Een kindje",
                            "Betere ademhaling.",
                            "Zij krijgt veel informatie en zij gaat veel yoga-oefeningen doen."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "q20",
                        "question": "Hoe lang duurt één les?",
                        "options": [
                            "1 uur.",
                            "1,5 uur.",
                            "Dat staat niet in deze tekst."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e1-t9",
                "title": "Tekst 9: Renovatie Roordastraat",
                "context": "Ahmed huurt een woning in de Roordaflat in de Boerhaavewijk. Hij leest dit bericht in de wijkkrant over zijn flat.",
                "text": "FEESTJE NA RENOVATIE ROORDASTRAAT BOERHAAVEWIJK\nIn de Roordastraat was het feest op donderdagmiddag 18 mei 2019. Bewoners van de Roordastraat vierden samen met hun woningbouwvereniging Elan Wonen de renovatie van de flat in hun straat.\nDit zei de wethouder van de gemeente: 'Er is én er wordt hard gewerkt in de Boerhaavewijk. De Roordastraat ziet er weer modern uit en de 40 woningen zijn nu heel goed verbeterd.'\nDe entree en de balkons zijn gemoderniseerd. Ook de liften in het gebouw zijn vernieuwd. Tenslotte zijn alle kozijnen en buitendeuren gerenoveerd. De renovatie heeft ongeveer 18 maanden geduurd, van januari 2018 tot augustus 2019.\nDe huurprijzen veranderen in 2019 voor de bewoners niet. De huurprijzen in de Roordastraat zijn gelijk gebleven.\nKijk voor meer informatie op www.elanwonen.nl.",
                "questions": [
                    {
                        "id": "q21",
                        "question": "In welke periode zijn de woningen gerenoveerd?",
                        "options": [
                            "In de periode 2018-2019.",
                            "Op 18 mei 2019.",
                            "In het jaar 2019.",
                            "In het jaar 2018."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "q22",
                        "question": "Wat is niet veranderd bij de renovatie van de Roordastraat?",
                        "options": [
                            "De liften.",
                            "De kozijnen en de buitendeuren.",
                            "De huurprijs."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "q23",
                        "question": "Wie is de eigenaar van de woning van Ahmed in de Roordastraat?",
                        "options": [
                            "Ahmed.",
                            "De wethouder van de gemeente.",
                            "De vereniging Elan Wonen."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e1-t10",
                "title": "Tekst 10: E-mail na vakantie",
                "context": "Ineke komt op zondagavond thuis van vakantie. Zij ziet een e-mail van haar collega Marleen.",
                "text": "Hoi Ineke\nHet is nu zondagavond en ik stuur je even een e-mailtje. Hoe was je vakantie? Ik hoop dat je goed uitgerust bent ... Welkom terug en succes morgen! Er is veel te doen ...\nJe kunt morgenochtend in de agenda zien wat er gebeurd is in jouw vakantie.\nGa je met mij mee naar de HEMA morgen of op dinsdag? We kopen daar dan spullen voor het afscheidsfeest van Ad. Dat feest is over twee weken, op 2 september. Ook moeten we weten wie er komt op die dag. Misschien komen er op die dag wel 100 mensen, dus we moeten veel organiseren!\nOp donderdag kom ik weer werken.\nAls je dus morgen of overmorgen met mij naar de HEMA wil, stuur me dan even een bericht of bel me!\nGoede start morgen en groetjes\nMarleen",
                "questions": [
                    {
                        "id": "q24",
                        "question": "Wat wil Marleen graag met Ineke afspreken?",
                        "options": [
                            "Zij wil graag met Ineke naar de HEMA.",
                            "Zij wil graag met Ineke naar Ad.",
                            "Zij wil graag met Ineke op vakantie.",
                            "Zij wil graag met Ineke naar een feest."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "q25",
                        "question": "Wanneer gaat Marleen weer naar haar werk?",
                        "options": [
                            "Op 2 september.",
                            "Op maandag.",
                            "Op dinsdag.",
                            "Op donderdag."
                        ],
                        "correct": 3
                    }
                ]
            }
        ]
    },
    {
        id: "exam2",
        title: "Oefentoets 2",
        texts: [
            {
                "id": "e2-t1",
                "title": "Tekst 1: Miele Stofzuiger",
                "context": "Boris wil een nieuwe stofzuiger kopen. Hij ziet in een grote winkel deze folder van een Miele stofzuiger.",
                "text": "Koop nu de nieuwe geluidsarme ECO-stofzuiger van Miele!\nDeze energiezuinige Miele stofzuiger heeft tal van voordelen. Wisselen van stopcontact is onnodig geworden met dit geweldige apparaat: met een snoer van maar liefst 12 meter stofzuig je gemakkelijk de hele huiskamer zonder van stopcontact te wisselen.\nStofzuigerzakken heb je met deze stofzuiger niet meer nodig. En tenslotte: deze stofzuiger is geluidsarm!\nStofzuigen wordt een dagelijks feest met deze Miele.\nSpecificaties van deze Miele ECO-stofzuiger:\nMerk: Miele\nGeschikt voor: parket, laminaat & tapijt\nPrijs: € 239\nGewicht: 6,5 kilo\nSnoerlengte: 12 meter\nEnergieklasse: A+\nGeluidsniveau: 60 decibel\nKleur: oranje/zwart\nStofzuigerzakken: niet nodig\nGarantie: 2 jaar\nVermogen: max. 650 W\nLevertijd: binnen 48 uur - gratis",
                "questions": [
                    {
                        "id": "e2-t1-q1",
                        "question": "Bij welke winkel koopt Boris een stofzuiger?",
                        "options": [
                            "Dat staat niet in de tekst.",
                            "Bij Miele.",
                            "Hij koopt de stofzuiger via internet.",
                            "Bij de Mediamarkt."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e2-t1-q2",
                        "question": "Boris wil een stofzuiger kopen die weinig geluid maakt en die geen stofzuigerzakken nodig heeft. Is deze stofzuiger geschikt voor Boris?",
                        "options": [
                            "Nee, deze stofzuiger maakt veel geluid.",
                            "Nee, voor deze stofzuiger heb je stofzuigerzakken nodig.",
                            "Ja, deze stofzuiger is geschikt voor Boris."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e2-t1-q3",
                        "question": "In de woning van Boris ligt overal laminaat op de vloer. Kan hij deze stofzuiger gebruiken in zijn huis?",
                        "options": [
                            "Ja, deze stofzuiger is geschikt voor laminaat.",
                            "Nee, deze stofzuiger is niet geschikt voor laminaat.",
                            "Nee, deze stofzuiger is alleen geschikt voor tapijten."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e2-t2",
                "title": "Tekst 2: E-mail van werkneemster",
                "context": "Ad ontvangt een e-mail van zijn werkneemster.",
                "text": "Aan: ad.vries@example.nl\nOnderwerp: Morgen kom ik niet werken\nHoi Ad,\nHet is nu bijna 12 uur in de avond, dus ik bel je niet. Ik stuur je deze mail. Ik heb vanavond een bericht van mijn dochter Christina gekregen. Die zit voor haar stage in Egypte, daar helpt ze in een groot ziekenhuis. Maar ze komt morgenochtend onverwacht naar Nederland. Ik ga haar ophalen op Schiphol. Ik ben erg bezorgd.\nJe begrijpt, dat ik morgen niet kan werken! Sorry voor het ongemak.\nIk hoop dat Kirsten mijn werk kan overnemen.\nVraag haar maar morgenochtend.\nMorgenmiddag zal ik je wel even bellen.\nDan weet ik wat er aan de hand is met mijn dochter.\nIk ga nu proberen te slapen.\nTot gauw!\nMarleen",
                "questions": [
                    {
                        "id": "e2-t2-q4",
                        "question": "Marleen komt morgen niet werken. Waarom kan zij niet naar haar werk komen?",
                        "options": [
                            "Zij moet morgen naar Egypte.",
                            "Zij moet morgen naar Kirsten.",
                            "Zij gaat haar dochter ophalen van Schiphol.",
                            "Zij is ziek geworden."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e2-t2-q5",
                        "question": "Wanneer schrijft Marleen deze e-mail precies?",
                        "options": [
                            "In de ochtend.",
                            "In de avond.",
                            "In de middag.",
                            "Tijdens haar stage."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e2-t3",
                "title": "Tekst 3: Bibliotheek informatie",
                "context": "Anna ziet een folder met informatie over de bibliotheek.",
                "text": "De bibliotheek is geopend op: Werkdagen van 09.30 uur tot 18.00 uur. Zaterdag van 10.00 uur tot 16.00 uur.\nZondag van 12.00 uur tot 16.00 uur. Op deze dagen is de bibliotheek gesloten: Nieuwjaarsdag, Pasen, Koningsdag, Hemelvaartsdag, Pinksteren en Kerst.\nWat kunt u doen in de bibliotheek: Boeken, cd's, dvd's en e-books lenen, studeren in de studiezaal, kranten en tijdschriften lezen.\nU kunt WiFi gebruiken en er zijn ook computers beschikbaar. Bij de bibliotheek is ook een café.\nDaar kunt u iets drinken (geen alcoholische dranken) of een broodje eten. Het café heeft dezelfde openingstijden als de bibliotheek.\nEen jaarlidmaatschap bij onze bibliotheek kost € 44",
                "questions": [
                    {
                        "id": "e2-t3-q6",
                        "question": "Anna wil met een vriendin in het café bij de bibliotheek iets drinken. Wanneer kunnen zij afspreken?",
                        "options": [
                            "Elke dag van de week, maar niet in het weekend.",
                            "Elke dag van de week, maar niet op zondag.",
                            "Elke dag van de week."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e2-t3-q7",
                        "question": "Wat kan Anna niet doen in de bibliotheek?",
                        "options": [
                            "Studeren.",
                            "Een computer gebruiken.",
                            "Kranten en tijdschriften kopen.",
                            "Kranten en tijdschriften lezen."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e2-t4",
                "title": "Tekst 4: Sollicitatiebrief tips",
                "context": "Mohammed gaat een sollicitatiebrief schrijven. Hij vindt ergens op internet vier goede tips voor het schrijven van een goede sollicitatiebrief.",
                "text": "Vier tips voor een goede sollicitatiebrief\n1. Gebruik korte zinnen\nMaak gebruik van korte zinnen. Lange zinnen zijn lastiger om te lezen.\n2. Maak ook een cv\nSchrijf een sollicitatiebrief en maak ook een cv: in de cv schrijf je wie je bent, welke opleiding je hebt gedaan en wat je werkervaring is.\n3. Maak je sollicitatiebrief geen herhaling van je cv\nMaak je brief geen herhaling van je cv. Natuurlijk mag je wel even kort iets uit je cv noemen wat belangrijk is voor de functie. Schrijf in je sollicitatiebrief waarom je dit werk goed kunt doen.\n4. Vertel dat je deze baan graag wilt\nSchrijf kort en duidelijk dat je deze baan graag wilt hebben. Schrijf ook waarom je dat wilt.",
                "questions": [
                    {
                        "id": "e2-t4-q8",
                        "question": "Wat moet Mohammed schrijven in zijn cv?",
                        "options": [
                            "Hij moet daar schrijven over zijn opleiding en over zijn ervaring.",
                            "Hij moet daar schrijven waarom hij het werk goed kan doen.",
                            "Hij moet daar schrijven waarom hij het werk graag wil doen."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e2-t4-q9",
                        "question": "Wat moet Mohammed schrijven in zijn sollicitatiebrief?",
                        "options": [
                            "Hij moet in zijn brief schrijven waarom hij het werk kan en wil doen.",
                            "Hij moet in zijn brief lange en lastige zinnen schrijven.",
                            "Hij moet in zijn brief veel informatie over zijn opleiding en werkervaring schrijven."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e2-t4-q10",
                        "question": "Waarom moet Mohammed korte zinnen schrijven in zijn brief?",
                        "options": [
                            "Omdat zijn Nederlands niet goed genoeg is.",
                            "Omdat korte zinnen makkelijker zijn.",
                            "Omdat hij niet veel tijd heeft om te schrijven."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e2-t5",
                "title": "Tekst 5: Brief aan Roos",
                "context": "Samira schrijft een brief aan haar vriendin Roos.",
                "text": "Hoi Roos,\nIk heb je al heel lang niet gezien, volgens mij al meer dan twee jaar.\nHoe gaat het met je? Zullen we eindelijk weer eens afspreken?\nElkaar echt ontmoeten is toch veel leuker dan af en toe een berichtje sturen via WhatsApp.\nIk heb zin om naar je toe te komen. Je woont in Zwolle, dat is een leuke stad, zeggen ze. Maar ik ben er nooit geweest.\nAls je liever ergens anders afspreekt, laat het dan even weten.\nMet mij gaat het prima. Mijn Ahmed is vijf jaar en hij gaat naar de basisschool. Ik snap echt niet hoe andere mensen dat doen, huishouden en werken, vooral als ze meer kinderen hebben. Ja, ik werk in een leuke winkel, Primark, dat had ik je toch verteld? Het is hard werken en weinig verdienen! Maar ik vind het echt leuk om klanten te adviseren over hun kleding.\nIk hoor snel van je!\nGroetjes,\nSamira",
                "questions": [
                    {
                        "id": "e2-t5-q11",
                        "question": "Wat voor werk doet Samira?",
                        "options": [
                            "Zij werkt in een winkel.",
                            "Zij werkt bij WhatsApp.",
                            "Zij heeft al twee jaar geen werk."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e2-t5-q12",
                        "question": "Wat wil Samira graag met Roos afspreken?",
                        "options": [
                            "Samira wil met Roos kleding kopen bij Primark.",
                            "Samira wil liever niet afspreken, maar zij wil soms een berichtje sturen.",
                            "Samira wil graag meer geld verdienen.",
                            "Samira wil Roos bezoeken in Zwolle."
                        ],
                        "correct": 3
                    },
                    {
                        "id": "e2-t5-q13",
                        "question": "Wanneer gaan Samira en Roos elkaar ontmoeten?",
                        "options": [
                            "Dat is niet bekend.",
                            "Over twee jaar.",
                            "Over meer dan twee jaar.",
                            "Nooit."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e2-t6",
                "title": "Tekst 6: Paspoort aanvragen",
                "context": "Carmen woont in Heemstede. Zij wil een nieuw paspoort aanvragen voor haar zoontje van elf jaar oud. Zij kijkt op de website van de gemeente.",
                "text": "Paspoort aanvragen Heemstede\nU kunt uw paspoort aanvragen zonder afspraak: maandag t/m vrijdag 08.30-13.00 of op donderdagavond vanaf 17.00-19.30\nU kunt uw paspoort aanvragen met afspraak: maandag t/m donderdag 13.30-16.30\nU kunt na 5 werkdagen uw paspoort afhalen. U hoeft daarvoor geen nieuwe afspraak te maken\nU moet persoonlijk uw paspoort komen aanvragen; dat geldt ook voor kinderen\nU moet betalen tijdens het aanvragen\nBij kinderen tot twaalf jaar is schriftelijke toestemming nodig van ouders of verzorgers\nU moet al uw identiteitsbewijzen en paspoorten meenemen bij de aanvraag. Ook als ze niet meer geldig zijn\nU moet 1 officiële kleurenpasfoto meenemen",
                "questions": [
                    {
                        "id": "e2-t6-q14",
                        "question": "Carmen wil met haar zoontje naar het stadhuis om een nieuw paspoort aan te vragen. Zij wil dat doen op woensdagmiddag om 15 uur. Wat doet Carmen?",
                        "options": [
                            "Zij kan de aanvraag doen zonder afspraak te maken.",
                            "Zij moet eerst een afspraak maken voor woensdagmiddag.",
                            "Zij moet eerst 5 dagen wachten. Daarna kan zij een afspraak maken."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e2-t6-q15",
                        "question": "Het zoontje van Carmen heeft een oud paspoort. Dat paspoort is niet meer geldig. Het paspoort is verouderd. Moeten Carmen en haar zoontje dit oude paspoort meenemen naar het stadhuis?",
                        "options": [
                            "Nee, dat is niet nodig. Zij moeten alleen geld en een officiële kleurenpasfoto meenemen.",
                            "Nee, zij moeten alleen een officiële kleurenpasfoto meenemen.",
                            "Ja, zij moeten ook het oude paspoort meenemen."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e2-t7",
                "title": "Tekst 7: Schoonmaakbedrijf rooster",
                "context": "Lotte werkt bij een schoonmaakbedrijf. Ze krijgt een e-mail van haar manager, Karel.",
                "text": "Beste Lotte, Ik wil je iets vragen. Ik heb een probleem met het werkrooster.\nMerel belde vandaag: zij heeft haar arm gebroken. Zij moet volgende week eigenlijk twee dagen werken, maar dat gaat nu niet.\nDus ik zoek mensen die volgende week extra dagen kunnen werken.\nIk heb Carolien al gevraagd, maar zij heeft ook ander werk te doen.\nZij kan daarom maar één dag extra werken: op woensdag. En Rianne werkt volgende week al vijf dagen bij ons.\nDus wil jij volgende week misschien een extra dag werken, op dinsdag? Het zou fijn zijn als je kunt.\nLaat je me dat vóór vrijdag even weten? Hartelijke groet, Karel de Schone",
                "questions": [
                    {
                        "id": "e2-t7-q16",
                        "question": "Karel zoekt iemand die extra kan werken. Voor wie zoekt Karel vervanging?",
                        "options": [
                            "Voor Lotte.",
                            "Voor Merel.",
                            "Voor Rianne.",
                            "Voor Carolien."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e2-t7-q17",
                        "question": "Lotte kan en wil volgende week extra werken. Op welke dag is er extra werk voor haar?",
                        "options": [
                            "Op woensdag.",
                            "Op dinsdag.",
                            "Op vrijdag."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e2-t8",
                "title": "Tekst 8: Cursus Engels",
                "context": "Reber wil een cursus Engels volgen. Hij kijkt op www.volksuniversiteit.nl",
                "text": "Engels leren\nSpreekt u geen Engels? Of spreekt u wel Engels, maar wilt u uw Engels verbeteren? Een taalcursus aan de Volksuniversiteit is voor u echt een goed idee. Met 75 Volksuniversiteiten door heel Nederland, is er altijd wel een Volksuniversiteit in de buurt.\n\nStartdatum | Soort cursus | Plaats\n2 februari | Engels voor echte beginners (startniveau 0) | *(overal mogelijk)\n6 februari | Engels voor bijna-beginners (startniveau A1) | *(niet in Utrecht)\n9 februari | Engels voor gevorderden (startniveau A2) | *(alleen in Utrecht)\n\nAls u voor de Volksuniversiteit kiest, dan krijgt u les van een enthousiaste, professionele docent. Onze taalcursussen zijn intensief. U maakt elke week ook een paar uur huiswerk. U zult snel resultaat zien, als u naar onze lessen komt.",
                "questions": [
                    {
                        "id": "e2-t8-q18",
                        "question": "Reber is geen beginner, hij spreekt al goed Engels. Hij woont in Utrecht. Wanneer kan hij het beste beginnen?",
                        "options": [
                            "Hij kan kiezen: beginnen op 6 februari of op 9 februari.",
                            "Hij kan het best beginnen op 2 februari.",
                            "Hij kan het best beginnen op 9 februari."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e2-t8-q19",
                        "question": "De vrouw van Reber wil ook naar een cursus Engels. Zij is een echte beginner. Zij woont ook in Utrecht. Wanneer kan zij beginnen?",
                        "options": [
                            "Zij kan kiezen: beginnen op 2 februari of op 9 februari.",
                            "Op 2 februari.",
                            "Op 9 februari."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e2-t8-q20",
                        "question": "Hoe lang duurt een les?",
                        "options": [
                            "Een paar uur.",
                            "Drie uur.",
                            "Dat staat niet in deze tekst."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e2-t9",
                "title": "Tekst 9: Open dag brandweer",
                "context": "Natasha woont in Zandvoort aan Zee. Zij krijgt een folder in de brievenbus.",
                "text": "Open dag\nOp zondag 17 september zullen de brandweer en de reddingsbrigade van Zandvoort een gezamenlijke open dag houden op de Kazerne Zandvoort.\nVan 12.00 uur tot 16.00 uur is iedereen welkom om het gebouw en materiaal te bekijken.\nJe kunt dan meer te weten te komen over het werk van beide hulpdiensten.\nHebt u altijd al willen weten wat wij doen in ons kazernegebouw?\nWil je kennismaken met onze stoere mannen en vrouwen? Wil je onze auto's, onze boten en ons materiaal van dichtbij bekijken?\nWil je meer weten over het spannende werk van de dappere vrijwilligers van brandweer en de reddingsbrigade?\nWil je misschien zelf ook vrijwilliger worden bij de brandweer of de reddingsbrigade van Zandvoort?\nKom dan langs op zondag 17 september!",
                "questions": [
                    {
                        "id": "e2-t9-q21",
                        "question": "Wie organiseert de open dag in Zandvoort aan Zee?",
                        "options": [
                            "De brandweer.",
                            "De brandweer en de reddingsbrigade samen.",
                            "De reddingsbrigade.",
                            "De gemeente Zandvoort."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e2-t9-q22",
                        "question": "Natasha wil graag werken bij de brandweer. Zij wil voor dit werk een salaris krijgen. Kan dat bij de brandweer?",
                        "options": [
                            "Nee, de brandweer zoekt alleen vrijwilligers.",
                            "Ja, de brandweer van Zandvoort zoekt personeel.",
                            "Ja, het werk is gevaarlijk en je krijgt een goed salaris."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e2-t9-q23",
                        "question": "Natasha heeft een zoontje van 11 jaar. Hij vindt brandweerauto's leuk. Wanneer kan hij de brandweerauto's in Zandvoort bekijken?",
                        "options": [
                            "Elke dag van 12.00 uur tot 16.00 uur.",
                            "Elke zondag van 12.00 uur tot 16.00 uur.",
                            "Op zondag 17 september."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e2-t10",
                "title": "Tekst 10: Brief van manager",
                "context": "Theo krijgt een brief van de manager op zijn werk.",
                "text": "Beste collega,\nJullie weten dat onze collega Lola deze week moeder is geworden! Zij heeft een zoontje gekregen. Moeder en kind zijn gezond.\nWij willen als afdeling graag een cadeautje kopen. En daarom willen we je vragen om een kleine bijdrage. Dat geld wordt verzameld door Karel.\nWe willen tot woensdagmiddag 17 uur het geld verzamelen.\nLoop even bij Karel langs en geef hem het geld, contant alsjeblieft. Hij zit op kamer 211, op de tweede verdieping.\nKarel en Christian kennen Lola het best. Zij gaan op donderdag samen van het geld een mooi cadeau kopen. Bloemen voor Lola, natuurlijk en ook nog iets voor de baby. Op vrijdag gaan zij bij Lola op kraambezoek.\nJullie manager, Pieter de Baas",
                "questions": [
                    {
                        "id": "e2-t10-q24",
                        "question": "Wie gaan er op bezoek bij Lola en haar pasgeboren zoontje?",
                        "options": [
                            "Karel.",
                            "Karel en Pieter de Baas.",
                            "Pieter de Baas.",
                            "Karel en Christian."
                        ],
                        "correct": 3
                    },
                    {
                        "id": "e2-t10-q25",
                        "question": "Wanneer moet het geld voor het cadeau bij Karel zijn?",
                        "options": [
                            "Op donderdag.",
                            "Op woensdagmiddag.",
                            "Op vrijdag."
                        ],
                        "correct": 1
                    }
                ]
            }
        ]
    },
    {
        id: "exam3",
        title: "Oefentoets 3",
        texts: [
            {
                "id": "e3-t1",
                "title": "Tekst 1: Rioolbuis",
                "context": "Theo woont in de gemeente Rommeldam. Hij heeft een huis gehuurd bij Woningbureau Rommelaar. Hij krijgt een brief van de gemeente.",
                "text": "Ons emailadres is: rioolbuis@rommeldam.nl\nRommeldam wil het regenwater en het afvalwater uit uw huis beter scheiden. Regenwater is schoon. Het afvalwater is vies en moet gezuiverd worden.\nHebt u een koophuis? Dan moet u hier misschien zelf iets aan doen. U moet het regenwater, bijvoorbeeld vanaf uw dak, scheiden van het afvalwater uit uw woning.\nNeem contact op met uw gemeente.\nDe gemeente controleert de afvoer van het regenwater en van het afvalwater uit uw woning. De controle is verplicht, maar gratis. U kunt subsidie ontvangen, als u het systeem moet verbeteren.\nHebt u een huurhuis? Dan gaat de gemeente het systeem controleren en gratis verbeteren.\nVragen?\nHebt u vragen over de verbeteringen die u moet aanbrengen?\nNeem dan contact op met de gemeente Rommeldam.\nOns telefoonnummer is: 073-88321191.",
                "questions": [
                    {
                        "id": "e3-t1-q1",
                        "question": "Wie is de eigenaar van de woning van Theo?",
                        "options": [
                            "Theo.",
                            "De gemeente Rommeldam.",
                            "Woningbureau Rommelaar.",
                            "Rioolbuis."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e3-t1-q2",
                        "question": "Het huis van Theo is oud. Het afvalwater uit zijn huis en het regenwater moeten beter gescheiden worden. Moet hij zelf de verbeteringen betalen?",
                        "options": [
                            "Ja, de controle is gratis, maar hij moet de verbeteringen zelf betalen.",
                            "Nee, voor Theo zijn de controle en de verbeteringen gratis.",
                            "Hij moet de verbeteringen zelf betalen, maar hij krijgt subsidie."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e3-t1-q3",
                        "question": "Theo begrijpt niet goed wat er gaat gebeuren. Wat moet hij doen?",
                        "options": [
                            "Hij kan kiezen: hij kan bellen of een e-mail sturen naar de gemeente.",
                            "Hij moet bellen.",
                            "Hij moet een e-mail sturen."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e3-t2",
                "title": "Tekst 2: Hondenbelasting",
                "context": "Janneke heeft een hond. Zij krijgt een formulier van de gemeente.",
                "text": "Hebt u een hond?\nDan moet u dat melden bij de gemeente.\nAls u geen hondenbelasting betaalt, kunt u een boete krijgen. Gebruik dit formulier of ga op internet naar www.rommeldam.nl/belasting.\nAangiftebiljet hondenbelasting\nNaam: ...\nAdres: ...\nBSN: ...\nPostcode/woonplaats: ...\nDoet hierbij aangifte als houder van: (aankruisen)\n[ ] één hond € 78,84 per jaar\n[ ] twee honden € 118,56 per jaar\n[ ] drie honden € 158,16 per jaar\n[ ] een vrijgestelde* hond € 0,00\nHebt u een vrijgestelde hond* stuur dan een kopie mee van het bewijsstuk (bijvoorbeeld een certificaat).\nFormulier opsturen naar: Afdeling Belastingen Rommeldam, Postbus 12347, 5210 VZ Rommeldam\n* Een vrijgestelde hond is een hulp-hond of blindengeleidehond.",
                "questions": [
                    {
                        "id": "e3-t2-q4",
                        "question": "Janneke is blind en zij heeft een blindengeleidehond. Wat moet zij doen met dit formulier van de gemeente?",
                        "options": [
                            "Zij hoeft niets te doen, zij kan het formulier weggooien.",
                            "Zij moet het formulier invullen en hondenbelasting betalen.",
                            "Zij moet het formulier invullen, maar zij hoeft geen belasting te betalen.",
                            "Zij moet het formulier invullen en zij moet een boete betalen."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e3-t2-q5",
                        "question": "De vriendin van Janneke heeft ook een hond. Zij moet hondenbelasting betalen. Hoeveel belasting moet zij betalen?",
                        "options": [
                            "€ 118,56 per jaar",
                            "De vriendin hoeft geen belasting te betalen, de hond is vrijgesteld.",
                            "De vriendin moet € 78,84 per jaar betalen.",
                            "De vriendin moet € 78,84 per jaar betalen en ook een boete."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e3-t3",
                "title": "Tekst 3: Vrijstellingen inburgering",
                "context": "Ahmed krijgt een brief over vrijstellingen voor het inburgeringsexamen.",
                "text": "Beste Ahmed\nU bent inburgeringsplichtig. U moet inburgeringsexamens afleggen. Soms kunt u een vrijstelling krijgen. Welke vrijstellingen zijn er?\n\nGedeeltelijke vrijstelling\nEen gedeeltelijke vrijstelling betekent dat u een deel van het inburgeringsexamen niet hoeft te doen. Andere delen van het inburgeringsexamen moet u nog wel doen. Bent u geslaagd voor die andere delen? Dan voldoet u aan de inburgeringsplicht.\n\nGehele vrijstelling\nEen gehele vrijstelling betekent dat u het hele inburgeringsexamen niet hoeft te doen. U wordt dan vrijgesteld van de inburgeringsplicht. Hebt u een diploma behaald in Nederland? Dan krijgt u misschien een gehele vrijstelling. Krijgt u een gehele vrijstelling? Dan kunt u geen inburgeringsdiploma krijgen.\n\nTijdelijke vrijstelling\nDoet u nu een Nederlandstalige opleiding (MBO of HBO) waarvoor u een gehele vrijstelling kunt krijgen? Dan kunt u nu een tijdelijke vrijstelling krijgen. Haalt u het MBO-diploma? Dan kunt u de tijdelijke vrijstelling veranderen in een gehele vrijstelling.",
                "questions": [
                    {
                        "id": "e3-t3-q6",
                        "question": "Ahmed is inburgeringsplichtig. Hij is nog niet geslaagd voor zijn examens. Hij doet een MBO-opleiding voor kok. Volgend jaar krijgt hij zijn MBO-diploma. Welke vrijstelling heeft Ahmed?",
                        "options": [
                            "Hij heeft een tijdelijke vrijstelling, hij moet zijn inburgeringsexamen over 1 jaar doen.",
                            "Hij heeft een tijdelijke vrijstelling. Hij kan later een volledige vrijstelling krijgen.",
                            "Hij heeft een volledige vrijstelling.",
                            "Hij heeft een gedeeltelijke vrijstelling."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e3-t3-q7",
                        "question": "Wat gebeurt er, als Ahmed niet slaagt voor zijn MBO-opleiding?",
                        "options": [
                            "Dan krijgt hij geen vrijstelling voor het inburgeringsexamen.",
                            "Dan krijgt hij een gedeeltelijke vrijstelling voor het inburgeringsexamen.",
                            "Dan krijgt hij een gehele vrijstelling voor het inburgeringsexamen."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e3-t4",
                "title": "Tekst 4: Vrijwilligerswerk Divers",
                "context": "Mirjam leest iets over vrijwilligerswerk.",
                "text": "Divers Welzijnsonderneming\nDivers zoekt vrijwilligers om eenzame, oude, zieke en zwakke mensen te helpen.\nZoek je een stageplaats of gewoon vrijwilligerswerk? Wij zoeken gemotiveerde en energieke mensen die aan de slag willen in Rommeldam.\nWoon je in Rommeldam?\nHoud je van mensen?\nBen je 18 jaar of ouder en heb je tijd over?\nKun je minimaal 4 uur en maximaal 20 uur per week werken?\nKun je minimaal 4 weken als vrijwilliger bij ons werken?\nZoek je een stageplaats in verband met je opleiding of school?\nWil je een taalmaatje zijn voor mensen die nog niet zo goed Nederlands spreken?\nOnze coördinator geeft je informatie en bekijkt je mogelijkheden. Op werkdagen van maandag tot en met donderdag kun je contact opnemen via telefoonnummer 073-9934345. Of je stuurt een mailtje naar info@zorgrommeldam.com\nJongeren die een stageplaats zoeken voor hun school/opleiding kunnen zich ook aanmelden. Divers zet zich in om jongeren vooruit te helpen in hun ontwikkeling en werkt daarom samen met alle regionale scholen van Rommeldam.",
                "questions": [
                    {
                        "id": "e3-t4-q8",
                        "question": "Mirjam moet bij haar opleiding een stage lopen van vier weken en 16 uur. Kan zij dat bij Divers doen?",
                        "options": [
                            "Ja, want het minimum aantal uren bij Divers is 4 uur per week.",
                            "Nee, want het minimum aantal uren bij Divers is 20 uur per week.",
                            "Nee, want het maximum aantal uren bij Divers is 4 uren per week."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e3-t4-q9",
                        "question": "Mirjam is vrijdag vrij. Zij wil dan de coördinator bellen. Is dat mogelijk?",
                        "options": [
                            "Nee, want dan is Divers niet telefonisch bereikbaar.",
                            "Ja, je kunt dan bellen met 073-9934345.",
                            "Ja, want op vrijdag is Divers gewoon open."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e3-t4-q10",
                        "question": "Mirjam wil graag een stageplek bij Divers. Geeft Divers jongeren een kans op een stageplek?",
                        "options": [
                            "Nee, Divers wil het liefst oude en ervaren vrijwilligers.",
                            "Ja, Divers wil jonge mensen graag helpen met hun carrière.",
                            "Nee, Divers zoekt taalmaatjes - dat zijn oudere mensen."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e3-t5",
                "title": "Tekst 5: E-mail aan Diego",
                "context": "Michael schrijft een e-mail aan zijn werkloze vriend Diego. Hij wil Diego helpen om werk te vinden. Michael heeft een idee.",
                "text": "Hoi Diego\nHi kameraad, hoe is het met je? Vervelend voor je dat je geen werk kunt vinden. Hoe lang zit je nu al zonder? Ik hoop dat je binnenkort iets vindt. Alleen maar voor de televisie hangen en af en toe naar de sportclub gaan, nee dat lijkt mij niks.\nIk heb een advertentie gezien van DIVERS, dat is een bedrijf in Rommeldam, waar je woont.\nDIVERS zoekt vrijwilligers die ouderen en zieken helpen met huishouden en boodschappen doen. Je moet even op hun website kijken. Daar vind je meer informatie over hoe je kunt helpen en wat voor werk je wanneer precies kunt doen. Ze hebben van alles.\nKijk hier: www.zorgdivers.com\nWerken in de zorg is misschien niet je echte droombaan, je wilt het liefst bij de politie werken, ik weet het. Misschien is de politie iets voor de verre, verre toekomst. Maar in de zorg kun je snel aan de slag, eerst als vrijwilliger, later ook betaald. Denk ik. Nou, ja, het is maar een idee van mij.\nLaten we gauw weer eens samen naar het café gaan. Biertje! Ik hoor van je.\nGroetjes,\nMichael.",
                "questions": [
                    {
                        "id": "e3-t5-q11",
                        "question": "Wat voor werk doet Diego?",
                        "options": [
                            "Hij werkt bij de politie.",
                            "Hij werkt niet.",
                            "Hij werkt als vrijwilliger."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e3-t5-q12",
                        "question": "Welk advies heeft Michael voor Diego?",
                        "options": [
                            "Hij adviseert Diego om oude en zieke mensen te helpen.",
                            "Hij adviseert Diego om naar Rommeldam te verhuizen.",
                            "Hij adviseert Diego om bij de politie te gaan werken.",
                            "Hij adviseert Diego om bij de sportclub te gaan werken."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e3-t5-q13",
                        "question": "Wat voor werk doet Michael?",
                        "options": [
                            "Hij werkt in een café.",
                            "Hij werkt bij de politie.",
                            "Hij werkt bij DIVERS.",
                            "Dat is niet duidelijk."
                        ],
                        "correct": 3
                    }
                ]
            },
            {
                "id": "e3-t6",
                "title": "Tekst 6: Wegafsluiting A10",
                "context": "Karen ziet op internet een bericht over een wegafsluiting.",
                "text": "WEEKENDAFSLUITING A10 tussen knooppunt Amstel en knooppunt Watergraafsmeer richting Zaandam.\nVan vrijdagavond 13 december 21.00 uur tot maandagochtend 16 december 06.00 uur.\nKomend weekend is de A10 richting Zaandam afgesloten voor verkeer in verband met vernieuwing van het wegdek.\nDe weg is afgesloten tussen de knooppunten Amstel en Watergraafsmeer.\nMoet u in het weekend naar Zaandam?\nVerkeersborden geven vanaf knooppunt Amstel een alternatieve route aan. Rekent u op files en vertragingen van minimaal 30 minuten.\nU kunt ook kiezen voor het openbaar vervoer (metro, bus en trein).\nKijk voor meer informatie op: www.vanAnaarBeter.nl/wegwerkzaamheden",
                "questions": [
                    {
                        "id": "e3-t6-q14",
                        "question": "Karen leest dat de A10 wordt afgesloten. Waarom wordt de weg afgesloten?",
                        "options": [
                            "Omdat er een file is tussen de knooppunten Amstel en Watergraafsmeer.",
                            "Omdat er op vrijdagavond een file is bij knooppunt Amstel.",
                            "Omdat het asfalt vernieuwd moet worden."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e3-t6-q15",
                        "question": "Karen wil op zondag 15 december naar haar vriendin in Zaandam. Kan dat?",
                        "options": [
                            "Ja, maar zij kan op die dag niet met de auto reizen.",
                            "Ja, maar zij moet met het openbaar vervoer (trein, bus, metro) reizen.",
                            "Ja, maar er zullen files zijn. Het is verstandig om met het openbaar vervoer te gaan."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e3-t7",
                "title": "Tekst 7: GroenLinks",
                "context": "Patrick is lid geworden van de politieke partij GroenLinks. Hij krijgt een e-mail van Jesse.",
                "text": "Hoi Patrick\nDank je wel voor je belangstelling voor GroenLinks.\nWij zijn trots dat veel jonge en moderne mensen zoals jij zich bij ons aansluiten.\nJe bent nu 17 jaar en nog niet stemgerechtigd. Dat duurt nog 1 jaar.\nMaar je kunt je stem binnen onze politieke beweging wel laten horen.\nJe kunt naar onze meet-ups komen, je kunt groene en linkse ideeën helpen verspreiden.\nGroenLinks wil en kan veel veranderen in Nederland.\nHet milieu heeft bescherming nodig.\nJonge mensen en nieuwkomers hebben steun en onderwijs nodig.\nledereen heeft recht op een mooi en gezond leven.\nWij willen dit samen met jou bereiken.\nWij gaan je via appjes, mails en Facebook-berichten sturen: zo kun je op de hoogte blijven van politiek belangrijke zaken.\nWe gaan je zien! En jij gaat GroenLinks zien. Onze beweging is niet te stoppen.\nTot gauw,\nJesse",
                "questions": [
                    {
                        "id": "e3-t7-q16",
                        "question": "Hoe kan Patrick lid worden van de politieke partij GroenLinks?",
                        "options": [
                            "Hij moet nog 1 jaar wachten.",
                            "Hij moet een e-mail sturen.",
                            "Hij moet appjes, mails en Facebook-berichten sturen.",
                            "Patrick is al lid, hij hoeft niets meer te doen."
                        ],
                        "correct": 3
                    },
                    {
                        "id": "e3-t7-q17",
                        "question": "Hoe krijgt Patrick informatie over politiek belangrijke zaken?",
                        "options": [
                            "Hij krijgt een e-mail van Jesse.",
                            "Hij krijgt appjes, e-mails en Facebook-berichten.",
                            "Hij moet nog 1 jaar wachten. Daarna krijgt hij veel berichten van Jesse."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e3-t8",
                "title": "Tekst 8: Praktijkexamen rijbewijs",
                "context": "Jordi krijgt een oproep voor het praktijkexamen rijbewijs. Hij leest de brief.",
                "text": "Praktijkexamen rijbewijs\nU gaat praktijkexamen doen.\nU moet een geldig identiteitsbewijs meenemen.\nU moet ook deze uitnodigingsbrief meenemen.\nVergeet u één van deze twee, dan kunt u geen examen doen.\nU moet minimaal 15 minuten voor aanvang aanwezig zijn.\nBent u te laat, dan kunt u geen examen doen.\nHet examen verloopt zo:\nU maakt eerst kennis met de examinator.\nDe examinator vertelt u wat er tijdens het examen gaat gebeuren.\nDe examinator controleert of u veilig en zelfstandig kunt rijden.\nDe examinator controleert of u voldoende rekening houdt met andere weggebruikers.\nDe examinator controleert ook:\n- hoe goed kent u de auto\n- hoe haalt u andere auto's in\n- hoe rijdt u op kruispunten en op rotondes",
                "questions": [
                    {
                        "id": "e3-t8-q18",
                        "question": "Als Jordi bij het examencentrum komt zonder zijn uitnodigingsbrief, wat gebeurt er dan?",
                        "options": [
                            "Dan bespreekt hij dit met de examinator.",
                            "Dan kan hij geen examen doen.",
                            "Dan mag hij wel het examen doen, maar hij zal dan niet slagen."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e3-t8-q19",
                        "question": "Welke dingen controleert de examinator?",
                        "options": [
                            "Hij controleert de andere weggebruikers.",
                            "Hij controleert hoe goed Jordi kan autorijden.",
                            "Hij controleert de kwaliteit van de auto."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e3-t8-q20",
                        "question": "Wat gebeurt er na afloop van het examen?",
                        "options": [
                            "Dan hoort Jordi het resultaat van het examen.",
                            "Dan krijgt Jordi een rijbewijs."
                        ],
                        "correct": 0
                    }
                ]
            }
        ]
    },
    {
        id: "exam4",
        title: "Oefentoets 4",
        texts: [
            {
                "id": "e4-t1",
                "title": "Tekst 1: Consultatiebureau",
                "context": "Marcela Ribera heeft een zoontje gekregen. Zij krijgt een brief van het consultatiebureau.",
                "text": "Beste Marcela Ribera\nU komt op dinsdag 15 maart om 09.00 uur naar de kinderarts van het consultatiebureau om uw baby te laten wegen. Uw baby krijgt ook een prikje tegen kinderziektes.\nDit moet u weten:\nBent u verhinderd? Geef dit telefonisch door. Kom altijd op tijd op uw afspraak.\nNeem het groeiboekje van uw kind mee voor de arts.\nGeef uw kind niets te eten, voordat u van huis vertrekt.\nHet consultatiebureau is gevestigd in de Brede School, Cassandrastraat 19 in Utrecht. Meldt u bij de receptioniste.\nWacht in de wachtkamer op uw beurt. De wachtkamer is rechts van de ingang.\nTip: Krijgt uw kind een inenting? Soms krijgen baby's na een inenting last van koorts.\nZorg dat u kinderparacetamol in huis hebt.\nMet vriendelijke groet\nHet consultatiebureau (030-456321232)",
                "questions": [
                    {
                        "id": "e4-t1-q1",
                        "question": "Waarom gaat Marcela Ribera naar het consultatiebureau?",
                        "options": [
                            "Haar kindje heeft koorts.",
                            "Haar zoontje is gegroeid.",
                            "De arts gaat het kindje wegen en een prik geven.",
                            "De arts gaat het kindje kinderparacetamol geven."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e4-t1-q2",
                        "question": "Marcela Ribera moet op 15 maart met haar zoontje naar het consultatiebureau. Wanneer moet zij daar zijn?",
                        "options": [
                            "Op dinsdagmiddag.",
                            "Op dinsdagochtend.",
                            "Op dinsdagavond."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e4-t1-q3",
                        "question": "Waarom moet Marcela Ribera kinderparacetamol in huis hebben?",
                        "options": [
                            "Omdat het kind vaak huilt.",
                            "Omdat het kind misschien koorts krijgt na de prik.",
                            "Omdat het kind niet goed groeit."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e4-t2",
                "title": "Tekst 2: Fietsvakantie",
                "context": "Sander krijgt een e-mail van zijn vriend Boor. Zij gaan in de zomer samen op fietsvakantie.",
                "text": "Aan: sanderbos@hotmail.nl\nOnderwerp: ons fietsproject\nHoi Sander,\nIk mail je maar even, want ik heb wat dingen geregeld voor onze vakantie over twee maanden. Lekker makkelijk toch? Je hoeft nergens aan te denken, alleen even deze mail lezen.\nWe rijden op 14 augustus naar Maastricht met mijn auto. Ik heb een fietsdrager. We starten daar onze fietstocht.\nWe gaan elke dag ongeveer 140 kilometer fietsen en we slapen steeds in een Bed & Breakfast, alles is gereserveerd. Ik heb 7 adressen. Op de achtste dag komen we dan in de avond weer bij de auto. Duizend kilometer fietsen volgens de routeplanner!\nDit moet je meenemen: 500 euro contant, een creditcard, een tandenborstel, zo weinig mogelijk kleding, een regenjack (in België regent het bijna altijd!), je telefoon.\nWe fietsen met een klein rugzakje. Moet lukken! Ik heb er zin in.\nO ja, komende zondag fietsen we met de club. Rondje Utrecht. Kom je ook?\nBoor (uw vriend & reisbureau)",
                "questions": [
                    {
                        "id": "e4-t2-q4",
                        "question": "Sander en Boor gaan samen fietsen. Wat is precies hun plan?",
                        "options": [
                            "Zij gaan in de zomer 1000 kilometer fietsen.",
                            "Zij gaan op 14 augustus naar Maastricht fietsen.",
                            "Zij gaan bij Utrecht een fietstocht maken.",
                            "Zij gaan in de zomer twee maanden lang fietsen."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e4-t2-q5",
                        "question": "Wat hoeft Sander volgens zijn vriend Boor niet mee te nemen?",
                        "options": [
                            "Geld.",
                            "Een tandenborstel.",
                            "Een regenjack.",
                            "Een grote rugzak."
                        ],
                        "correct": 3
                    }
                ]
            },
            {
                "id": "e4-t3",
                "title": "Tekst 3: Werk zoeken",
                "context": "Mohammed Ali ziet zijn buurman Henk. Zij praten over werk zoeken.",
                "text": "Mohammed Ali is op zoek naar werk en hij wil zich inschrijven bij uitzendbureaus. Hij spreekt Engels en Arabisch maar hij kan geen werk krijgen. Hij vraagt aan zijn buurman Henk wat hij moet doen om zijn kans op werk te vergroten.\nHenk geeft adviezen om de kans op werk te vergroten:\n1. Ga een inburgeringscursus doen bij een goede school.\n2. Ga Nederlands leren bij een moskee of bij een buurthuis of in de bibliotheek.\n3. Kijk voor gratis cursussen op internet.\n4. Probeer met Nederlanders te praten.\n5. Kijk veel Nederlandse televisie en luister naar de radio.\nZo ga je volgens Henk na een tijdje beter Nederlands spreken en begrijpen wat Nederlanders allemaal zeggen.\nMohammed hoort van Henk dat de eerste oplossing misschien geld kost, maar de andere oplossingen kosten volgens Henk geen geld.\nMohammed Ali vindt het fijn dat Henk ook Engels praat. Hij begrijpt alles wat Henk zegt.",
                "questions": [
                    {
                        "id": "e4-t3-q6",
                        "question": "Welke taal spreken Henk en Mohammed Ali met elkaar?",
                        "options": [
                            "Arabisch.",
                            "Engels.",
                            "Nederlands."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e4-t3-q7",
                        "question": "Henk geeft vijf adviezen. Welke oplossing is misschien niet gratis?",
                        "options": [
                            "Een inburgeringscursus bij een goede school.",
                            "Nederlands leren via internet.",
                            "Nederlandse programma's kijken op de televisie.",
                            "Nederlands leren in de bibliotheek."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e4-t4",
                "title": "Tekst 4: Werkinstructies Hak",
                "context": "Mohamed Ali heeft werk gevonden bij de groentefabriek van Hak. Hij leest zijn werkinstructies.",
                "text": "Werkinstructies\n1. Trek elke werkdag schone werkkleding aan en draag een hoofddeksel.\n2. Begin elke werkdag altijd met schone handschoenen.\n3. Trek elke werkdag schone rubberen werklaarzen aan.\n4. Rook nooit tijdens het werk.\n5. Werk altijd hygiënisch. Valt er groente op de grond? Gooi het direct weg!\n6. Staat de lopende band plotseling stil? Wacht op de monteur. Niet zelf repareren!\n7. Het telefoonnummer van de monteur op uw afdeling kunt u vinden naast de telefoon in de werkplaats.\n8. Neem na uw dienst altijd een douche en laat uw vuile werkkleding achter in het washok.",
                "questions": [
                    {
                        "id": "e4-t4-q8",
                        "question": "Mohamed Ali heeft nieuwe sportschoenen aan op zijn werk. Mag dat?",
                        "options": [
                            "Nee, hij moet speciale werklaarzen aandoen.",
                            "Nee, hij moet andere schoenen aandoen.",
                            "Ja, zijn sportschoenen zijn nieuw en schoon."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e4-t4-q9",
                        "question": "Mohamed Ali ziet groente op de grond liggen. Wat doet hij met deze groente?",
                        "options": [
                            "Hij geeft de groente aan de monteur.",
                            "Hij gaat de groente wassen.",
                            "Hij pakt de groente op en hij gooit de groente weg."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e4-t4-q10",
                        "question": "Wat moet Mohamed Ali doen, als de lopende band stopt?",
                        "options": [
                            "Hij moet de lopende band zo snel mogelijk repareren.",
                            "Hij moet direct gaan douchen.",
                            "Hij moet wachten op een monteur."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e4-t5",
                "title": "Tekst 5: Bibliotheek Rommeldam",
                "context": "Ellen ziet deze folder van de bibliotheek van Rommeldam.",
                "text": "De bieb is elke zondag open!\nVanaf 4 april is de bibliotheek van Rommeldam iedere zondag open van 13.00- 17.00 uur. Elke zondagmiddag wordt er een bijzondere activiteit georganiseerd voor diverse leeftijden. De toegang is altijd gratis.\n\nHet activiteitenprogramma in april\nZondag 4 april\nWe vieren het 50-jarig bestaan van de bibliotheek. Er is een feestelijk programma voor jong en oud.\n\nZondag 11 april\nDe ervaren tekendocent, Eva Penseel, begeleidt beginners en gevorderden. ledereen kan een eigen schilderij maken!\n\nZondag 18 april\nWe gaan wandelen met boswachter Franske Natureluurs. We kijken naar planten en dieren in het bos dichtbij de bibliotheek. De wandeling begint om 13.15 uur bij de voordeur van de bibliotheek. Om 14.15 uur komt iedereen terug bij de bibliotheek voor een lekker glas limonade of een kopje koffie.\n\nZondag 25 april\nLeer hoe je zelf een spannend verhaal kunt schrijven. De schrijfster Myrte Gerrits geeft tips. Het beste verhaal wordt gepubliceerd op onze website.",
                "questions": [
                    {
                        "id": "e4-t5-q11",
                        "question": "Hoe lang bestaat de bibliotheek van Rommeldam al?",
                        "options": [
                            "De bibliotheek is nieuw en gaat open op 4 april.",
                            "50 jaar.",
                            "1 jaar."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e4-t5-q12",
                        "question": "Wat kan Ellen doen in de bibliotheek op 18 april?",
                        "options": [
                            "Zij kan dan tekenen, schrijven en wandelen.",
                            "Zij kan dan wandelen in het bos in de buurt van de bibliotheek.",
                            "Zij kan dan een spannend verhaal leren schrijven.",
                            "Zij kan dan een mooi schilderij maken met hulp van Eva Penseel."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e4-t5-q13",
                        "question": "Op welke zondagen is de bibliotheek geopend?",
                        "options": [
                            "Dat is nog niet bekend.",
                            "Op de zondagen in de maand april.",
                            "Op alle zondagen vanaf 4 april.",
                            "Alleen op zondag 4 april."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e4-t6",
                "title": "Tekst 6: Vrijwilligster rooster",
                "context": "Marjan werkt als vrijwilligster bij buurthuis 'Het Trefpunt'. Zij krijgt elke vrijdag via de e-mail het rooster van de coördinator van het buurthuis.",
                "text": "Aan: Marjan Verhallen\nOnderwerp: rooster komende week\nBeste Marjan\nHier is je rooster van de komende week.\nJij werkt volgens je contract altijd op maandag en op vrijdag bij ons buurthuis. Soms werk je in de ochtend, soms in de middag en soms in de avond. Controleer je even of het rooster voor de komende week klopt?\nHet is een normale, rustige week, volgens mij.\nIk hoor het wel van je via de mail. Goed weekend!\n\nMaandagavond: Marjan Verhallen, biljartavond.\nDinsdagochtend: Naima Daoury, koffie-uurtje.\nDinsdagavond: Marjan Verhallen, biljartavond.\nWoensdagmiddag: Fatima Bakash, salsadansen.\nDonderdagmiddag: Fatima Bakash, salsadansen.\nVrijdagmiddag: Marjan Verhallen, biljartmiddag.\n\nGroet, Simon van der Poel, coördinator 'Het Trefpunt'.",
                "questions": [
                    {
                        "id": "e4-t6-q14",
                        "question": "Klopt het rooster van Marjan Verhallen?",
                        "options": [
                            "Ja, het rooster klopt. Marjan moet op maandag en vrijdag werken.",
                            "Nee, het rooster klopt niet. Marjan hoeft volgens haar contract nooit op dinsdag te werken.",
                            "Ja, het rooster klopt. Marjan moet op maandag, dinsdag en vrijdag werken."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e4-t6-q15",
                        "question": "Waarom krijgt Marjan Verhallen in het weekend een nieuw rooster?",
                        "options": [
                            "Het rooster voor de vrijwilligers is elke week anders.",
                            "Zij heeft een nieuw contract.",
                            "Het is de komende week erg druk in het buurthuis."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e4-t7",
                "title": "Tekst 7: Bedrijfsruimte",
                "context": "Ming Wen heeft een nagelstyling-bedrijf. Zij heeft nu een werkruimte in haar huis, maar zij wil een werkplaats in het centrum van de stad huren. Zij kijkt op de website van een makelaar.",
                "text": "Haakstra Bedrijfsmakelaars\nVerhuur bedrijfsruimte/praktijk: € 300 per maand.\nNette praktijk-/bedrijfsruimte: circa 42 m².\nAdres: Kerkstraat 21a.\nReferentiecode van dit object: 2111AN1\nDe ruimte is voor diverse doeleinden geschikt en is in het centrum van de stad.\nIndeling van de ruimte: entree, hal, circa 8 m², werkruimte van circa 25 m².\nHuurprijs: € 300 per maand, exclusief BTW, exclusief bijkomende kosten (o.a. gas, water, internet en elektra).\nHuurtermijn: 3 jaar.\nBorg: € 1500.\nAanvaarding: u kunt de ruimte op korte termijn huren.\nWilt u deze mooie bedrijfsruimte bekijken?\nNeemt u dan contact op met ons: 0180-5599332. Of stuurt u een e-mail naar haakstra@yahoo.nl.\nVermeld in uw mail de referentiecode van dit object.",
                "questions": [
                    {
                        "id": "e4-t7-q16",
                        "question": "Hoeveel moet Ming Wen betalen voor deze bedrijfsruimte?",
                        "options": [
                            "€ 300 + 21% BTW + bijkomende kosten per maand.",
                            "€ 1500 per jaar.",
                            "€ 300 per maand + 21% BTW."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e4-t7-q17",
                        "question": "Ming Wen wil snel beginnen in haar nieuwe werkruimte. Kan dat?",
                        "options": [
                            "Nee, zij moet drie jaar wachten.",
                            "Misschien - zij moet eerst praten met makelaar Haakstra.",
                            "Nee, zij moet drie maanden wachten."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e4-t8",
                "title": "Tekst 8: Inburgeringsexamen brief",
                "context": "Manuela gaat het inburgeringsexamen doen. Zij krijgt een brief van DUO.",
                "text": "Aan: Manuela Zumbezi\nAlexlaan 11\n5456 BB Tilburg\nDatum: 17 oktober\nOnderwerp: inburgeringsexamen\nGeachte mevrouw Zumbezi,\nU bent aangemeld voor het inburgeringsexamen. Hieronder ziet u wanneer u het examen moet doen. Er staat ook waar u moet zijn.\nU moet 30 minuten voor aanvang van het examen aanwezig zijn. Vergeet niet uw identiteitsbewijs mee te nemen.\n\nDinsdag 29 oktober\nKennis Nederlandse Maatschappij 10.00-11.00 uur\nSpreekvaardigheid A2 11.15-12.00 uur\nSchrijfvaardigheid A2 13.00-14.00 uur\nLuistervaardigheid A2 14.15-15.15 uur\n\nHet examenadres: DUO-examenbureau - eerste etage\nDr. Anton Philipsplein 11 5611 AP Eindhoven",
                "questions": [
                    {
                        "id": "e4-t8-q18",
                        "question": "Hoe laat moet Manuela aanwezig zijn bij het examenadres van DUO?",
                        "options": [
                            "10.00 uur.",
                            "09.00 uur.",
                            "09.30 uur."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e4-t8-q19",
                        "question": "Welk examen gaat Manuela niet doen op 29 oktober?",
                        "options": [
                            "Kennis Nederlandse Maatschappij.",
                            "Spreekvaardigheid A2.",
                            "Schrijfvaardigheid A2.",
                            "Leesvaardigheid A2."
                        ],
                        "correct": 3
                    },
                    {
                        "id": "e4-t8-q20",
                        "question": "Wat moet Manuela op 29 oktober meenemen naar het examenadres?",
                        "options": [
                            "Haar telefoon.",
                            "Haar identiteitsbewijs.",
                            "Diploma's die zij heeft.",
                            "Deze brief."
                        ],
                        "correct": 1
                    }
                ]
            }
        ]
    },
    {
        id: "exam5",
        title: "Oefentoets 5",
        texts: [
            {
                "id": "e5-t1",
                "title": "Tekst 1: Huis te koop/huur",
                "context": "Abdi en Aisha willen gaan verhuizen. Aisha ziet dit bord in de tuin staan bij een huis.",
                "text": "TE KOOP EN TE HUUR\nStadhouderslaan 14 in Utrecht\n\nTE KOOP:\nDit mooie huis staat sinds vandaag te koop.\nVraagprijs € 440.000 k.k.\nBouwjaar 2012\nWoonoppervlakte: 140 m²\nTuin: 60 m² (zuid-oost)\n5 slaapkamers en 2 badkamers\nEnergielabel A (zonnepanelen op het dak)\n\nTE HUUR:\nHuurprijs: € 1500 per maand (exclusief gas/water/licht)\nMinimale huurperiode: 2 jaar\nStudenten zijn niet welkom\nHuisdieren zijn in overleg toegestaan\nInformatie?\nBel met makelaar Brinksma: 030-2211566",
                "questions": [
                    {
                        "id": "e5-t1-q1",
                        "question": "Over welk huis gaat de tekst op het bord?",
                        "options": [
                            "Over een huis in de Stadhouderslaan.",
                            "Over een huis in de tuin.",
                            "Over een huis van Brinksma."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e5-t1-q2",
                        "question": "Aisha wil het huis graag huren. Zij heeft twee honden en drie katten. Mag zij het huis huren?",
                        "options": [
                            "Ja, dat is prima.",
                            "Waarschijnlijk niet, huisdieren zijn in overleg toegestaan.",
                            "Nee, honden zijn wel toegestaan, maar katten niet."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t1-q3",
                        "question": "Het huis is te koop. Wat betekent k.k.?",
                        "options": [
                            "De kosten voor de koper.",
                            "Kopen kan.",
                            "Kosten komen."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e5-t2",
                "title": "Tekst 2: Brief van de bank",
                "context": "Josef krijgt een brief van zijn bank. Hij leest de brief.",
                "text": "Onderwerp: Het vervangen van uw bankpas\nGeachte heer, mevrouw,\nUit onze gegevens blijkt dat u nog gebruik maakt van een oude bankpas. U kunt deze bankpas binnenkort niet meer gebruiken.\nPer 1 januari gaan wij over op een nieuw systeem. Veiligheid is belangrijk voor u en voor ons. Door een nieuw systeem kunnen wij uw bankzaken nòg beter beveiligen.\nWat moet u doen?\nU moet vóór 1 november uw nieuwe bankpas activeren. Dat doet u zo:\nLog in op uw persoonlijke pagina van onze website.\nKlik op 'nieuwe bankpas aanvragen'.\nWij sturen u dan binnen 3 werkdagen een nieuwe pas toe.\nKosten\nHet aanvragen van uw nieuwe bankpas kost u eenmalig € 7,50. Dat bedrag wordt automatisch van uw rekening afgeschreven.",
                "questions": [
                    {
                        "id": "e5-t2-q4",
                        "question": "Josef wil een nieuwe bankpas aanvragen. Wat moet hij doen?",
                        "options": [
                            "Hij moet een brief sturen naar de bank.",
                            "Hij moet inloggen op de website van de bank.",
                            "Hij moet € 7,50 overmaken naar de bank."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t2-q5",
                        "question": "Josef vraagt een nieuwe bankpas aan. Wanneer krijgt hij die?",
                        "options": [
                            "Op 1 november.",
                            "Na drie werkdagen.",
                            "Binnen drie werkdagen."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e5-t3",
                "title": "Tekst 3: Feestje buren",
                "context": "Yusuf krijgt een kaartje van zijn buren in de brievenbus.",
                "text": "Beste buren,\nWij wonen hier nu al bijna twee maanden. We hebben nog niet met iedereen kennisgemaakt. We hebben de laatste weken veel geklust in ons huis.\nNu is ons huis klaar! We vinden het leuk om jullie, onze buren, uit te nodigen voor een feestje.\nWanneer? Op zaterdagavond 23 september.\nHoe laat? Jullie zijn welkom vanaf 20.00 uur.\nWaar? Bij ons in de tuin (als het regent, binnen!).\nWij zorgen voor hapjes en drankjes. We hopen dat jullie kunnen komen.\nGroetjes van jullie buren van nummer 45,\nHans en Grietje",
                "questions": [
                    {
                        "id": "e5-t3-q6",
                        "question": "Waarom geven Hans en Grietje een feestje?",
                        "options": [
                            "Omdat zij in het huis op nummer 45 zijn komen wonen.",
                            "Omdat het huis na twee maanden klussen klaar is.",
                            "Omdat zij jarig zijn."
                        ],
                        "correct": 0
                    },
                    {
                        "id": "e5-t3-q7",
                        "question": "Yusuf wil graag naar het feestje komen. Hij wil iets meenemen. Wat kan hij meenemen?",
                        "options": [
                            "Hij kan hapjes en drankjes meenemen.",
                            "Hij kan een paraplu meenemen voor als het regent.",
                            "Hij kan een cadeautje meenemen voor het nieuwe huis."
                        ],
                        "correct": 2
                    }
                ]
            },
            {
                "id": "e5-t4",
                "title": "Tekst 4: Vuurwerkverbod",
                "context": "Tania leest op 15 december een artikel in de krant over vuurwerk.",
                "text": "Geen vuurwerk\nDe gemeente Utrecht heeft besloten dat er dit jaar geen vuurwerk mag worden afgestoken tijdens de jaarwisseling. Het verbod op vuurwerk geldt voor de hele stad en voor alle soorten vuurwerk.\nBurgemeester Sharon Dijksma: \"We willen dat Oud en Nieuw een feest is voor iedereen. Vuurwerk zorgt voor veel overlast en onveilige situaties. Ook is het slecht voor het milieu en voor dieren.\"\nDe politie zal streng controleren of mensen zich aan het verbod houden. Wie toch vuurwerk afsteekt, kan een boete krijgen van minimaal € 100.\nDe gemeente organiseert wel een centrale vuurwerkshow. Deze show is op 1 januari om 00.30 uur bij de Jaarbeurs.",
                "questions": [
                    {
                        "id": "e5-t4-q8",
                        "question": "Mag Tania dit jaar met Oud en Nieuw vuurwerk afsteken in Utrecht?",
                        "options": [
                            "Ja, maar alleen sterretjes.",
                            "Nee, er is een totaalverbod op vuurwerk.",
                            "Ja, maar alleen in de tuin."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t4-q9",
                        "question": "Wat gebeurt er als Tania toch vuurwerk afsteekt?",
                        "options": [
                            "Dan krijgt zij een waarschuwing van de politie.",
                            "Dan moet zij naar de burgemeester.",
                            "Dan kan zij een boete krijgen van € 100 of meer."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e5-t4-q10",
                        "question": "Is er helemaal geen vuurwerk te zien in Utrecht?",
                        "options": [
                            "Jawel, er is een vuurwerkshow bij de Jaarbeurs.",
                            "Nee, er is nergens vuurwerk te zien.",
                            "Jawel, de burgemeester steekt vuurwerk af."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e5-t5",
                "title": "Tekst 5:OV-chipkaart",
                "context": "Ali wil met de trein reizen. Hij kijkt op de website van de NS.",
                "text": "Reizen met de OV-chipkaart\nOm met de trein te reizen, hebt u een geldige OV-chipkaart nodig. Zorg dat er voldoende saldo op uw kaart staat. Voor reizen met de NS moet er minimaal € 20 op uw kaart staan.\nIn- en uitchecken\nU moet altijd inchecken vóór u in de trein stapt en uitchecken als u de trein verlaat. Vergeet u uit te checken? Dan betaalt u te veel.\nBent u vergeten uit te checken? Dan kunt u via de website van de NS uw geld terugvragen. Dit kan maximaal 3 keer per jaar.\nPersoonlijke en anonieme kaart\nEr zijn twee soorten kaarten: de persoonlijke en de anonieme OV-chipkaart. Met een persoonlijke kaart kunt u ook een abonnement nemen. Bij verlies of diefstal kunt u het saldo terugkrijgen. Een anonieme kaart kan door meerdere mensen worden gebruikt (maar niet tegelijkertijd). Bij verlies bent u uw saldo kwijt.",
                "questions": [
                    {
                        "id": "e5-t5-q11",
                        "question": "Ali heeft € 15 op zijn OV-chipkaart staan. Kan hij met de trein reizen?",
                        "options": [
                            "Ja, dat is genoeg.",
                            "Nee, hij moet minimaal € 20 op zijn kaart hebben.",
                            "Ja, maar hij moet wel eerst inchecken."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t5-q12",
                        "question": "Ali is vergeten uit te checken. Wat nu?",
                        "options": [
                            "Hij is zijn geld kwijt.",
                            "Hij kan zijn geld terugvragen via de website.",
                            "Hij moet naar de balie van de NS."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t5-q13",
                        "question": "Wat is een voordeel van een anonieme OV-chipkaart?",
                        "options": [
                            "Je kunt hem met meerdere mensen gebruiken.",
                            "Je krijgt je geld terug bij verlies.",
                            "Je kunt er een abonnement op zetten."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e5-t6",
                "title": "Tekst 6: Voetbaltraining",
                "context": "Mo is lid van voetbalvereniging 'De Kickers'. Hij krijgt een berichtje van zijn trainer.",
                "text": "Hoi team,\nEven een update over de training van deze week. Omdat het veld erg nat is door de vele regen, kunnen we niet buiten trainen.\nDe training van woensdagavond gaat daarom niet door op het veld.\nWe gaan in plaats daarvan trainen in de sporthal 'De Sprong'. We verzamelen daar om 19.00 uur. De training duurt tot 20.30 uur.\nNeem je zaalschoenen mee! Met voetbalschoenen (noppen) mag je de zaal niet in.\nTot woensdag!\nTrainer Jaap",
                "questions": [
                    {
                        "id": "e5-t6-q14",
                        "question": "Waar is de voetbaltraining aanstaande woensdag?",
                        "options": [
                            "Op het voetbalveld.",
                            "In de sporthal.",
                            "De training gaat niet door."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t6-q15",
                        "question": "Wat moet Mo meenemen naar de training?",
                        "options": [
                            "Zijn voetbalschoenen.",
                            "Zijn zaalschoenen.",
                            "Een regenjas."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e5-t7",
                "title": "Tekst 7: Vacature verkoper",
                "context": "Sara zoekt werk. Ze ziet een advertentie in de supermarkt.",
                "text": "Gezocht: Enthousiaste Verkoper (m/v)\nVoor onze winkel 'Alles voor in Huis' zoeken wij een nieuwe collega.\nFunctie: Verkoper\nUren: 24-32 uur per week\nWat ga je doen?\n- Klanten helpen en adviseren\n- De winkel netjes houden\n- De kassa bedienen\n- Producten bijvullen\nWat vragen wij?\n- Je bent klantvriendelijk en sociaal\n- Je spreekt goed Nederlands\n- Je bent ook in het weekend beschikbaar\n- Ervaring in een winkel is een voordeel, maar niet verplicht\nWat bieden wij?\n- Een leuk team\n- Een goed salaris\n- Korting op onze producten\nInteresse? Kom langs in de winkel met je cv of mail naar info@allesvoorinhuis.nl",
                "questions": [
                    {
                        "id": "e5-t7-q16",
                        "question": "Sara heeft nog nooit in een winkel gewerkt. Kan zij solliciteren?",
                        "options": [
                            "Nee, ervaring is verplicht.",
                            "Ja, ervaring is een voordeel, maar niet verplicht.",
                            "Nee, ze zoeken iemand met veel ervaring."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t7-q17",
                        "question": "Sara kan alleen op maandag tot en met vrijdag werken. Is deze baan geschikt voor haar?",
                        "options": [
                            "Ja, ze zoeken iemand voor 24-32 uur.",
                            "Nee, ze moet ook in het weekend beschikbaar zijn.",
                            "Ja, de werktijden zijn in overleg."
                        ],
                        "correct": 1
                    }
                ]
            },
            {
                "id": "e5-t8",
                "title": "Tekst 8: Cursus Koken",
                "context": "Lina houdt van koken. Ze ziet een poster in het buurthuis.",
                "text": "Cursus: Wereldkeuken\nHoudt u van lekker eten? En wilt u nieuwe gerechten leren maken?\nKom dan naar de cursus Wereldkeuken!\nIn 5 lessen leert u gerechten maken uit verschillende landen: Italië, Marokko, Thailand, Mexico en Turkije.\nElke les koken we samen een maaltijd en eten we die daarna gezellig op.\nWanneer: Elke donderdagavond van 18.00 tot 21.00 uur.\nStartdatum: 7 mei.\nKosten: € 50 voor 5 lessen (inclusief ingrediënten).\nLocatie: Buurthuis De Ontmoeting.\nAanmelden: Bij de balie van het buurthuis of via www.ontmoeting.nl",
                "questions": [
                    {
                        "id": "e5-t8-q18",
                        "question": "Wat doen de cursisten na het koken?",
                        "options": [
                            "Ze gaan naar huis.",
                            "Ze eten de maaltijd samen op.",
                            "Ze wassen de pannen af."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t8-q19",
                        "question": "Lina wil meedoen. Hoeveel moet zij betalen?",
                        "options": [
                            "€ 10 per les.",
                            "€ 50 voor de hele cursus.",
                            "Niets, de cursus is gratis."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t8-q20",
                        "question": "Welk land wordt niet genoemd in de tekst?",
                        "options": [
                            "Spanje.",
                            "Italië.",
                            "Thailand."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e5-t9",
                "title": "Tekst 9: Afvalkalender",
                "context": "Joris woont in een nieuwe wijk. Hij krijgt de afvalkalender.",
                "text": "Afvalkalender 2024\nHieronder ziet u wanneer wij welk afval bij u ophalen.\nZet uw container vóór 07.30 uur aan de straat.\n\nGroente-, Fruit- en Tuinafval (GFT): Elke even week op woensdag.\nRestafval: Elke oneven week op woensdag.\nPapier en karton: Eén keer per maand, op de eerste donderdag van de maand.\nPlastic: Elke twee weken op vrijdag (even weken).\n\nLet op: Is de ophaaldag op een feestdag? Dan komen wij een dag later.\nGrofvuil (zoals meubels of tapijt) halen wij alleen op afspraak op. Bel hiervoor met de Reinigingsdienst: 0900-888444.",
                "questions": [
                    {
                        "id": "e5-t9-q21",
                        "question": "Joris heeft een oude bank die weg moet. Wat moet hij doen?",
                        "options": [
                            "Hij kan de bank op woensdag aan de straat zetten.",
                            "Hij moet bellen voor een afspraak.",
                            "Hij kan de bank bij het restafval zetten."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t9-q22",
                        "question": "Het is woensdag in week 12 (een even week). Welk afval wordt er opgehaald?",
                        "options": [
                            "Restafval.",
                            "GFT.",
                            "Plastic."
                        ],
                        "correct": 1
                    },
                    {
                        "id": "e5-t9-q23",
                        "question": "Joris is vergeten zijn container buiten te zetten. Het is 08.00 uur. Is hij te laat?",
                        "options": [
                            "Ja, hij moest de container voor 07.30 uur neerzetten.",
                            "Nee, ze komen pas in de middag.",
                            "Dat hangt ervan af of het een feestdag is."
                        ],
                        "correct": 0
                    }
                ]
            },
            {
                "id": "e5-t10",
                "title": "Tekst 10: Uitnodiging bruiloft",
                "context": "Hassan en Fatima gaan trouwen. Ze sturen een uitnodiging.",
                "text": "Wij gaan trouwen!\nHassan & Fatima\nWij nodigen jullie van harte uit om onze bruiloft met ons te vieren op vrijdag 20 augustus.\nProgramma:\n14.00 uur: Ceremonie in het Stadhuis van Rotterdam (Stadhuisplein 1)\n16.00 uur: Receptie en taart in Restaurant De Tuin (Plaszoom 354)\n18.30 uur: Diner voor familie en goede vrienden\n20.30 uur: Feestavond in Zalencentrum De Parel (Feestlaan 10)\n\nCadeautip: ✉ (envelopje)\nLaat ons weten of je komt vóór 1 augustus via hassanenfatima@mail.com.",
                "questions": [
                    {
                        "id": "e5-t10-q24",
                        "question": "Waar is het feest 's avonds?",
                        "options": [
                            "In het Stadhuis.",
                            "In Restaurant De Tuin.",
                            "In Zalencentrum De Parel."
                        ],
                        "correct": 2
                    },
                    {
                        "id": "e5-t10-q25",
                        "question": "Wat willen Hassan en Fatima graag als cadeau?",
                        "options": [
                            "Bloemen.",
                            "Geld.",
                            "Keukenspullen."
                        ],
                        "correct": 1
                    }
                ]
            }
        ]
    }
];
