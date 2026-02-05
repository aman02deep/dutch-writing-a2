const sentenceStructures = [
    {
        category: "Basic Word Order",
        rules: [
            {
                title: "Main Clause (Statement)",
                pattern: "Subject + Verb + Object/Rest",
                examples: [
                    { nl: "Ik eet een appel.", en: "I eat an apple." },
                    { nl: "Hij woont in Amsterdam.", en: "He lives in Amsterdam." }
                ]
            },
            {
                title: "Inversion (Time/Place First)",
                pattern: "Time/Place + Verb + Subject + Rest",
                examples: [
                    { nl: "Morgen ga ik naar school.", en: "Tomorrow I go to school." },
                    { nl: "In Amsterdam woon ik.", en: "In Amsterdam I live." }
                ]
            },
            {
                title: "Questions (Yes/No)",
                pattern: "Verb + Subject + Rest + ?",
                examples: [
                    { nl: "Eet jij een appel?", en: "Do you eat an apple?" },
                    { nl: "Woont hij in Amsterdam?", en: "Does he live in Amsterdam?" }
                ]
            },
            {
                title: "Questions (Wh-words)",
                pattern: "Question Word + Verb + Subject + Rest + ?",
                examples: [
                    { nl: "Wat eet jij?", en: "What do you eat?" },
                    { nl: "Waar woon je?", en: "Where do you live?" }
                ]
            }
        ]
    },
    {
        category: "Time-Manner-Place Rule",
        rules: [
            {
                title: "TMP Order",
                pattern: "Subject + Verb + Time + Manner + Place",
                examples: [
                    { nl: "Ik ga morgen met de fiets naar school.", en: "I go tomorrow by bike to school." },
                    { nl: "Zij werkt vandaag hard op kantoor.", en: "She works today hard at the office." }
                ]
            }
        ]
    },
    {
        category: "Verb Placement",
        rules: [
            {
                title: "Modal Verbs",
                pattern: "Subject + Modal + Object/Rest + Infinitive",
                examples: [
                    { nl: "Ik wil een appel eten.", en: "I want to eat an apple." },
                    { nl: "Hij kan goed zwemmen.", en: "He can swim well." }
                ]
            },
            {
                title: "Perfect Tense",
                pattern: "Subject + hebben/zijn + Rest + Past Participle",
                examples: [
                    { nl: "Ik heb een appel gegeten.", en: "I have eaten an apple." },
                    { nl: "Hij is naar huis gegaan.", en: "He has gone home." }
                ]
            },
            {
                title: "Separable Verbs",
                pattern: "Subject + Verb + Rest + Prefix",
                examples: [
                    { nl: "Ik sta om 7 uur op.", en: "I get up at 7 o'clock." },
                    { nl: "Hij belt zijn moeder op.", en: "He calls his mother." }
                ]
            }
        ]
    },
    {
        category: "Subordinate Clauses",
        rules: [
            {
                title: "Omdat, Als, Dat, etc.",
                pattern: "Main Clause + omdat/als/dat + Subject + Rest + Verb",
                examples: [
                    { nl: "Ik blijf thuis omdat ik ziek ben.", en: "I stay home because I am sick." },
                    { nl: "Hij zegt dat hij morgen komt.", en: "He says that he comes tomorrow." }
                ]
            },
            {
                title: "With Modal Verbs",
                pattern: "Main Clause + omdat + Subject + Rest + Infinitive + Modal",
                examples: [
                    { nl: "Ik blijf thuis omdat ik moet werken.", en: "I stay home because I must work." }
                ]
            }
        ]
    },
    {
        category: "Negation",
        rules: [
            {
                title: "Niet (Not)",
                pattern: "Subject + Verb + niet + Rest (or at end)",
                examples: [
                    { nl: "Ik eet niet.", en: "I don't eat." },
                    { nl: "Hij woont niet in Amsterdam.", en: "He doesn't live in Amsterdam." }
                ]
            },
            {
                title: "Geen (No/Not a)",
                pattern: "Subject + Verb + geen + Noun",
                examples: [
                    { nl: "Ik heb geen appel.", en: "I don't have an apple." },
                    { nl: "Hij heeft geen tijd.", en: "He has no time." }
                ]
            }
        ]
    },
    {
        category: "Common Question Words",
        rules: [
            {
                title: "Wh-Words",
                pattern: "Question word at the start",
                examples: [
                    { nl: "Wie ben jij?", en: "Who are you?" },
                    { nl: "Wat doe je?", en: "What do you do?" },
                    { nl: "Waar woon je?", en: "Where do you live?" },
                    { nl: "Wanneer kom je?", en: "When do you come?" },
                    { nl: "Waarom ga je?", en: "Why do you go?" },
                    { nl: "Hoe heet je?", en: "What is your name?" }
                ]
            }
        ]
    }
];
