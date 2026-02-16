// KNM Questions Data
// Structure: Each chapter has title, study materials, and practice questions

const knmChapters = {
    1: {
        title: "1. Wonen (Housing)",
        icon: "🏠",
        studyMaterial: [
            {
                title: "Key Concepts",
                content: `
                    <ul>
                        <li><strong>Huurcontract</strong> - Rental contract</li>
                        <li><strong>Borg</strong> - Deposit</li>
                        <li><strong>Woningcorporatie</strong> - Housing corporation</li>
                        <li><strong>Huurcommissie</strong> - Rent tribunal</li>
                        <li><strong>Opzegtermijn</strong> - Notice period</li>
                    </ul>
                `
            }
        ],
        questions: [
            {
                question: "Hoeveel maanden opzegtermijn heeft een huurder meestal?",
                options: [
                    "1 maand",
                    "2 maanden",
                    "3 maanden",
                    "6 maanden"
                ],
                correct: 0,
                explanation: "Een huurder heeft meestal 1 maand opzegtermijn. De verhuurder heeft langer (3-6 maanden)."
            },
            {
                question: "Wat is een woningcorporatie?",
                options: [
                    "Een organisatie die sociale huurwoningen verhuurt",
                    "Een particuliere verhuurder",
                    "Een aannemer die huizen bouwt",
                    "Een makelaar die huizen verkoopt"
                ],
                correct: 0,
                explanation: "Een woningcorporatie is een organisatie die sociale (betaalbare) huurwoningen verhuurt aan mensen met een lager inkomen."
            },
            {
                question: "Hoeveel borg (waarborgsom) mag een verhuurder maximaal vragen?",
                options: [
                    "1 maand huur",
                    "2 maanden huur",
                    "3 maanden huur",
                    "Geen limiet"
                ],
                correct: 1,
                explanation: "Een verhuurder mag maximaal 2 maanden huur als borg vragen."
            }
        ]
    },

    2: {
        title: "2. Werk en Inkomen (Work & Income)",
        icon: "💼",
        studyMaterial: [
            {
                title: "Key Concepts",
                content: `
                    <ul>
                        <li><strong>Arbeidscontract</strong> - Employment contract</li>
                        <li><strong>CAO</strong> - Collective labor agreement</li>
                        <li><strong>Minimumloon</strong> - Minimum wage</li>
                        <li><strong>UWV</strong> - Employee Insurance Agency</li>
                        <li><strong>Belastingdienst</strong> - Tax office</li>
                    </ul>
                `
            }
        ],
        questions: [
            {
                question: "Wat is het minimumloon in Nederland voor iemand van 21 jaar?",
                options: [
                    "€10 per uur",
                    "Ongeveer €1900 bruto per maand",
                    "€1500 netto per maand",
                    "€2500 bruto per maand"
                ],
                correct: 1,
                explanation: "Het minimumloon voor 21+ is ongeveer €1900 bruto per maand (full-time). Dit wordt regelmatig aangepast."
            },
            {
                question: "Wat is een CAO?",
                options: [
                    "Een collectieve arbeidsovereenkomst tussen werkgevers en vakbonden",
                    "Een certificaat voor arbeidsorganisatie",
                    "Een werkloosheidsuitkering",
                    "Een training voor werknemers"
                ],
                correct: 0,
                explanation: "CAO staat voor Collectieve Arbeidsovereenkomst. Dit is een afspraak tussen werkgevers en vakbonden over arbeidsvoorwaarden."
            }
        ]
    },

    3: {
        title: "3. Interactie, Waarden en Normen",
        icon: "🤝",
        studyMaterial: [],
        questions: [
            {
                question: "Wat is een belangrijk Nederlands principe over gelijkheid?",
                options: [
                    "Alleen mannen mogen werken",
                    "Mannen en vrouwen hebben gelijke rechten",
                    "Ouderen hebben meer rechten",
                    "Alleen Nederlanders hebben rechten"
                ],
                correct: 1,
                explanation: "In Nederland hebben mannen en vrouwen gelijke rechten. Dit is vastgelegd in de wet."
            }
        ]
    },

    4: {
        title: "4. Onderwijs en Opvoeding",
        icon: "🎓",
        studyMaterial: [],
        questions: [
            {
                question: "Vanaf welke leeftijd is onderwijs verplicht in Nederland?",
                options: [
                    "4 jaar",
                    "5 jaar",
                    "6 jaar",
                    "7 jaar"
                ],
                correct: 1,
                explanation: "Vanaf 5 jaar is onderwijs verplicht in Nederland. Kinderen moeten naar school tot ze 16 of 18 jaar zijn."
            }
        ]
    },

    5: {
        title: "5. Gezondheid (Health)",
        icon: "🏥",
        studyMaterial: [],
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
                explanation: "In Nederland is een zorgverzekering verplicht voor iedereen. Je moet dit zelf regelen."
            }
        ]
    },

    6: {
        title: "6. Instanties (Institutions)",
        icon: "🏢",
        studyMaterial: [],
        questions: [
            {
                question: "Waar moet je naartoe als je verhuist?",
                options: [
                    "De politie",
                    "De gemeente (inschrijven bij de gemeente)",
                    "Het ziekenhuis",
                    "De bank"
                ],
                correct: 1,
                explanation: "Als je verhuist, moet je je inschrijven bij de gemeente. Dit moet binnen 5 dagen."
            }
        ]
    },

    7: {
        title: "7. Politiek (Politics)",
        icon: "🗳️",
        studyMaterial: [],
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
            }
        ]
    },

    8: {
        title: "8. Geschiedenis en Geografie",
        icon: "📜",
        studyMaterial: [],
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
                explanation: "Amsterdam is de hoofdstad van Nederland. De regering zit echter in Den Haag."
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
                explanation: "Nederland werd in 1945 bevrijd van de Duitse bezetting. 5 mei is Bevrijdingsdag."
            }
        ]
    }
};
 
