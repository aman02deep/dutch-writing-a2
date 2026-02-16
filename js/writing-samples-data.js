const writingSamples = {
    "formalEmail": [
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Sara Jansen.\nIk schrijf deze e-mail omdat ik een vraag heb.\n\nIk heb een vraag over mijn afspraak.\nKunt u mij helpen met de datum?\nOok wil ik graag weten de tijd.\n\nMet vriendelijke groet,\nSara Jansen",
            "english": "Dear sir/madam,\n\nMy name is Sara Jansen.\nI write this email because I have a question.\n\nI have a question about my appointment.\nCan you help me with the date?\nI also want to know the time."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Ahmed El-Sayed.\nIk schrijf deze e-mail omdat ik informatie nodig heb.\n\nIk heb een vraag over de openingstijden.\nKunt u mij helpen met de dagen?\nOok wil ik graag weten de uren.\n\nMet vriendelijke groet,\nAhmed El-Sayed",
            "english": "Dear sir/madam,\n\nMy name is Ahmed El-Sayed.\nI write this email because I need information.\n\nI have a question about the opening hours.\nCan you help me with the days?\nI also want to know the hours."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Lisa de Vries.\nIk schrijf deze e-mail omdat ik een formulier nodig heb.\n\nIk heb een vraag over de aanvraag.\nKunt u mij helpen met het formulier?\nOok wil ik graag weten waar ik het kan vinden.\n\nMet vriendelijke groet,\nLisa de Vries",
            "english": "Dear sir/madam,\n\nMy name is Lisa de Vries.\nI write this email because I need a form.\n\nI have a question about the application.\nCan you help me with the form?\nI also want to know where I can find it."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Tom Bakker.\nIk schrijf deze e-mail omdat ik mijn gegevens wil wijzigen.\n\nIk heb een vraag over mijn adres.\nKunt u mij helpen met de wijziging?\nOok wil ik graag weten hoe lang het duurt.\n\nMet vriendelijke groet,\nTom Bakker",
            "english": "Dear sir/madam,\n\nMy name is Tom Bakker.\nI write this email because I want to change my information.\n\nI have a question about my address.\nCan you help me with the change?\nI also want to know how long it takes."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Fatima Ali.\nIk schrijf deze e-mail omdat ik een afspraak wil maken.\n\nIk heb een vraag over de beschikbaarheid.\nKunt u mij helpen met een datum?\nOok wil ik graag weten de tijd.\n\nMet vriendelijke groet,\nFatima Ali",
            "english": "Dear sir/madam,\n\nMy name is Fatima Ali.\nI write this email because I want to make an appointment.\n\nI have a question about availability.\nCan you help me with a date?\nI also want to know the time."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Johan Visser.\nIk schrijf deze e-mail omdat ik informatie nodig heb.\n\nIk heb een vraag over de service.\nKunt u mij helpen met details?\nOok wil ik graag weten de kosten.\n\nMet vriendelijke groet,\nJohan Visser",
            "english": "Dear sir/madam,\n\nMy name is Johan Visser.\nI write this email because I need information.\n\nI have a question about the service.\nCan you help me with details?\nI also want to know the costs."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Emma de Jong.\nIk schrijf deze e-mail omdat ik een klacht heb.\n\nIk heb een vraag over de levering.\nKunt u mij helpen met het probleem?\nOok wil ik graag weten de oplossing.\n\nMet vriendelijke groet,\nEmma de Jong",
            "english": "Dear sir/madam,\n\nMy name is Emma de Jong.\nI write this email because I have a complaint.\n\nI have a question about the delivery.\nCan you help me with the problem?\nI also want to know the solution."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Mark van Dijk.\nIk schrijf deze e-mail omdat ik informatie nodig heb.\n\nIk heb een vraag over het inschrijven.\nKunt u mij helpen met het formulier?\nOok wil ik graag weten de deadline.\n\nMet vriendelijke groet,\nMark van Dijk",
            "english": "Dear sir/madam,\n\nMy name is Mark van Dijk.\nI write this email because I need information.\n\nI have a question about registration.\nCan you help me with the form?\nI also want to know the deadline."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Noor Hassan.\nIk schrijf deze e-mail omdat ik een probleem heb.\n\nIk heb een vraag over mijn bestelling.\nKunt u mij helpen met de oplossing?\nOok wil ik graag weten de status.\n\nMet vriendelijke groet,\nNoor Hassan",
            "english": "Dear sir/madam,\n\nMy name is Noor Hassan.\nI write this email because I have a problem.\n\nI have a question about my order.\nCan you help me with the solution?\nI also want to know the status."
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Bas de Wit.\nIk schrijf deze e-mail omdat ik hulp nodig heb.\n\nIk heb een vraag over de aanvraag.\nKunt u mij helpen met de procedure?\nOok wil ik graag weten de vereisten.\n\nMet vriendelijke groet,\nBas de Wit",
            "english": "Dear sir/madam,\n\nMy name is Bas de Wit.\nI write this email because I need help.\n\nI have a question about the application.\nCan you help me with the procedure?\nI also want to know the requirements."
        }
    ],
    "informalMessage": [
        {
            "dutch": "Hoi Anna,\n\nHoe gaat het?\nIk schrijf je omdat ik een vraag heb.\n\nIk wil je vragen of je mij kunt helpen.\nWanneer heb je tijd?\n\nGroetjes,\nMaria",
            "english": "Hi Anna,\n\nHow are you?\nI write because I have a question.\n\nCan you help me?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Mark,\n\nHoe gaat het?\nIk schrijf je omdat ik iets wil plannen.\n\nIk wil je vragen of je zaterdag kunt komen.\nWanneer heb je tijd?\n\nGroetjes,\nEva",
            "english": "Hi Mark,\n\nHow are you?\nI write because I want to plan something.\n\nCan you come on Saturday?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Sophie,\n\nHoe gaat het?\nIk schrijf je omdat ik iets leuks heb.\n\nIk wil je vragen of je mee wilt gaan naar het park.\nWanneer heb je tijd?\n\nGroetjes,\nTom",
            "english": "Hi Sophie,\n\nHow are you?\nI write because I have something fun.\n\nCan you come with me to the park?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Peter,\n\nHoe gaat het?\nIk schrijf je omdat ik een uitnodiging heb.\n\nIk wil je vragen of je naar mijn feestje komt.\nWanneer heb je tijd?\n\nGroetjes,\nLisa",
            "english": "Hi Peter,\n\nHow are you?\nI write because I have an invitation.\n\nCan you come to my party?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Emma,\n\nHoe gaat het?\nIk schrijf je omdat ik een tip heb.\n\nIk wil je vragen of je morgen wilt afspreken.\nWanneer heb je tijd?\n\nGroetjes,\nNoah",
            "english": "Hi Emma,\n\nHow are you?\nI write because I have a tip.\n\nCan you meet tomorrow?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Lars,\n\nHoe gaat het?\nIk schrijf je omdat ik een idee heb.\n\nIk wil je vragen of je mee wilt helpen.\nWanneer heb je tijd?\n\nGroetjes,\nJulia",
            "english": "Hi Lars,\n\nHow are you?\nI write because I have an idea.\n\nCan you help me?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Noor,\n\nHoe gaat het?\nIk schrijf je omdat ik iets leuks wil doen.\n\nIk wil je vragen of je zin hebt om te fietsen.\nWanneer heb je tijd?\n\nGroetjes,\nAhmed",
            "english": "Hi Noor,\n\nHow are you?\nI write because I want to do something fun.\n\nDo you want to go biking?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Sam,\n\nHoe gaat het?\nIk schrijf je omdat ik een spel heb gekocht.\n\nIk wil je vragen of je wilt komen spelen.\nWanneer heb je tijd?\n\nGroetjes,\nLotte",
            "english": "Hi Sam,\n\nHow are you?\nI write because I bought a game.\n\nDo you want to come play?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Mia,\n\nHoe gaat het?\nIk schrijf je omdat ik een recept wil delen.\n\nIk wil je vragen of je het wilt proberen.\nWanneer heb je tijd?\n\nGroetjes,\nOmar",
            "english": "Hi Mia,\n\nHow are you?\nI write because I want to share a recipe.\n\nDo you want to try it?\nWhen do you have time?"
        },
        {
            "dutch": "Hoi Tim,\n\nHoe gaat het?\nIk schrijf je omdat ik een verrassing heb.\n\nIk wil je vragen of je mee wilt komen.\nWanneer heb je tijd?\n\nGroetjes,\nFleur",
            "english": "Hi Tim,\n\nHow are you?\nI write because I have a surprise.\n\nDo you want to come along?\nWhen do you have time?"
        }
    ],

    "problemRequest": [
        {
            "dutch": "Beste dokter,\n\nIk heb een probleem.\nIk heb pijn in mijn hoofd.\n\nDaarom kan ik niet werken.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nAli",
            "english": "Dear doctor,\n\nI have a problem.\nI have a headache.\n\nSo I cannot work.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste docent,\n\nIk heb een probleem.\nIk heb de opdracht niet af.\n\nDaarom kan ik niet inleveren.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nSanne",
            "english": "Dear teacher,\n\nI have a problem.\nI did not finish the assignment.\n\nSo I cannot submit it.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste baas,\n\nIk heb een probleem.\nIk heb mijn tas verloren.\n\nDaarom kan ik niet werken.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nJeroen",
            "english": "Dear boss,\n\nI have a problem.\nI lost my bag.\n\nSo I cannot work.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste dokter,\n\nIk heb een probleem.\nIk heb buikpijn sinds gisteren.\n\nDaarom kan ik niet sporten.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nFatima",
            "english": "Dear doctor,\n\nI have a problem.\nI have stomach pain since yesterday.\n\nSo I cannot exercise.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste collega,\n\nIk heb een probleem.\nIk heb mijn computer kapot.\n\nDaarom kan ik mijn werk niet doen.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nRuben",
            "english": "Dear colleague,\n\nI have a problem.\nMy computer is broken.\n\nSo I cannot do my work.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste dokter,\n\nIk heb een probleem.\nIk voel me ziek.\n\nDaarom kan ik niet naar school.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nSara",
            "english": "Dear doctor,\n\nI have a problem.\nI feel sick.\n\nSo I cannot go to school.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste leraar,\n\nIk heb een probleem.\nIk heb mijn huiswerk vergeten.\n\nDaarom kan ik het niet inleveren.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nMohammed",
            "english": "Dear teacher,\n\nI have a problem.\nI forgot my homework.\n\nSo I cannot submit it.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste collega,\n\nIk heb een probleem.\nIk heb de printer kapot gemaakt.\n\nDaarom kan ik mijn werk niet doen.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nAnna",
            "english": "Dear colleague,\n\nI have a problem.\nI broke the printer.\n\nSo I cannot do my work.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste manager,\n\nIk heb een probleem.\nIk heb de sleutels verloren.\n\nDaarom kan ik niet naar kantoor.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nTim",
            "english": "Dear manager,\n\nI have a problem.\nI lost my keys.\n\nSo I cannot go to the office.\nCan you help me?\nWhat can I do?"
        },
        {
            "dutch": "Beste dokter,\n\nIk heb een probleem.\nIk heb mijn bril gebroken.\n\nDaarom kan ik niet lezen.\nKunt u mij helpen?\nWat kan ik doen?\n\nMet vriendelijke groet,\nLeila",
            "english": "Dear doctor,\n\nI have a problem.\nI broke my glasses.\n\nSo I cannot read.\nCan you help me?\nWhat can I do?"
        }
    ],
    "complaintEmail": [
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Sara Jansen.\nIk schrijf u omdat ik een probleem heb met mijn bestelling.\n\nHet probleem is dat ik het verkeerde product heb ontvangen.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nSara Jansen",
            "english": "Dear sir/madam,\n\nMy name is Sara Jansen.\nI write because I have a problem with my order.\n\nThe problem is I received the wrong product.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nSara Jansen"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Ahmed El-Sayed.\nIk schrijf u omdat ik een probleem heb met de levering.\n\nHet probleem is dat mijn pakket te laat is.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nAhmed El-Sayed",
            "english": "Dear sir/madam,\n\nMy name is Ahmed El-Sayed.\nI write because I have a problem with the delivery.\n\nThe problem is that my package is late.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nAhmed El-Sayed"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Lisa de Vries.\nIk schrijf u omdat ik een probleem heb met het product.\n\nHet probleem is dat het kapot is aangekomen.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nLisa de Vries",
            "english": "Dear sir/madam,\n\nMy name is Lisa de Vries.\nI write because I have a problem with the product.\n\nThe problem is it arrived broken.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nLisa de Vries"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Tom Bakker.\nIk schrijf u omdat ik een probleem heb met mijn bestelling.\n\nHet probleem is dat het product verkeerd is geleverd.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nTom Bakker",
            "english": "Dear sir/madam,\n\nMy name is Tom Bakker.\nI write because I have a problem with my order.\n\nThe problem is the product was delivered incorrectly.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nTom Bakker"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Fatima Ali.\nIk schrijf u omdat ik een probleem heb met de levering.\n\nHet probleem is dat mijn pakket niet is aangekomen.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nFatima Ali",
            "english": "Dear sir/madam,\n\nMy name is Fatima Ali.\nI write because I have a problem with the delivery.\n\nThe problem is my package did not arrive.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nFatima Ali"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Johan Visser.\nIk schrijf u omdat ik een probleem heb met mijn bestelling.\n\nHet probleem is dat er iets ontbreekt in het pakket.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nJohan Visser",
            "english": "Dear sir/madam,\n\nMy name is Johan Visser.\nI write because I have a problem with my order.\n\nThe problem is something is missing in the package.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nJohan Visser"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Emma de Jong.\nIk schrijf u omdat ik een probleem heb met mijn aankoop.\n\nHet probleem is dat het product niet werkt.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nEmma de Jong",
            "english": "Dear sir/madam,\n\nMy name is Emma de Jong.\nI write because I have a problem with my purchase.\n\nThe problem is the product does not work.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nEmma de Jong"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Mark van Dijk.\nIk schrijf u omdat ik een probleem heb met mijn levering.\n\nHet probleem is dat het pakket beschadigd is aangekomen.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nMark van Dijk",
            "english": "Dear sir/madam,\n\nMy name is Mark van Dijk.\nI write because I have a problem with my delivery.\n\nThe problem is the package arrived damaged.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nMark van Dijk"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Noor Hassan.\nIk schrijf u omdat ik een probleem heb met het product.\n\nHet probleem is dat de handleiding ontbreekt.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nNoor Hassan",
            "english": "Dear sir/madam,\n\nMy name is Noor Hassan.\nI write because I have a problem with the product.\n\nThe problem is the manual is missing.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nNoor Hassan"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Bas de Wit.\nIk schrijf u omdat ik een probleem heb met mijn bestelling.\n\nHet probleem is dat het verkeerde formaat is geleverd.\nIk zou graag willen weten wat u kunt doen om dit op te lossen.\n\nAlvast bedankt voor uw reactie.\n\nMet vriendelijke groet,\nBas de Wit",
            "english": "Dear sir/madam,\n\nMy name is Bas de Wit.\nI write because I have a problem with my order.\n\nThe problem is the wrong size was delivered.\nI would like to know what you can do to fix this.\n\nThank you for your response.\n\nKind regards,\nBas de Wit"
        }
    ],

    "confirmationEmail": [
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Sara Jansen.\nIk wil graag bevestigen dat mijn afspraak op 5 februari om 10:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nSara Jansen",
            "english": "Dear sir/madam,\n\nMy name is Sara Jansen.\nI want to confirm that my appointment on February 5th at 10:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nSara Jansen"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Ahmed El-Sayed.\nIk wil graag bevestigen dat mijn reservering voor 12 maart om 19:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nAhmed El-Sayed",
            "english": "Dear sir/madam,\n\nMy name is Ahmed El-Sayed.\nI want to confirm that my reservation on March 12th at 19:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nAhmed El-Sayed"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Lisa de Vries.\nIk wil graag bevestigen dat mijn afspraak bij de dokter op 20 april om 09:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nLisa de Vries",
            "english": "Dear sir/madam,\n\nMy name is Lisa de Vries.\nI want to confirm that my doctor's appointment on April 20th at 09:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nLisa de Vries"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Tom Bakker.\nIk wil graag bevestigen dat de vergadering op 3 mei om 14:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nTom Bakker",
            "english": "Dear sir/madam,\n\nMy name is Tom Bakker.\nI want to confirm that the meeting on May 3rd at 14:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nTom Bakker"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Fatima Ali.\nIk wil graag bevestigen dat mijn afspraak bij de kapper op 7 juni om 16:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nFatima Ali",
            "english": "Dear sir/madam,\n\nMy name is Fatima Ali.\nI want to confirm that my appointment at the hairdresser on June 7th at 16:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nFatima Ali"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Johan Visser.\nIk wil graag bevestigen dat mijn afspraak bij de tandarts op 15 juli om 11:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nJohan Visser",
            "english": "Dear sir/madam,\n\nMy name is Johan Visser.\nI want to confirm that my dentist appointment on July 15th at 11:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nJohan Visser"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Emma de Jong.\nIk wil graag bevestigen dat mijn reservering in het restaurant op 21 augustus om 18:30 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nEmma de Jong",
            "english": "Dear sir/madam,\n\nMy name is Emma de Jong.\nI want to confirm that my reservation at the restaurant on August 21st at 18:30 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nEmma de Jong"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Mark van Dijk.\nIk wil graag bevestigen dat mijn afspraak op het gemeentehuis op 10 september om 13:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nMark van Dijk",
            "english": "Dear sir/madam,\n\nMy name is Mark van Dijk.\nI want to confirm that my appointment at the town hall on September 10th at 13:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nMark van Dijk"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Noor Hassan.\nIk wil graag bevestigen dat mijn afspraak bij de opticien op 5 oktober om 10:30 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nNoor Hassan",
            "english": "Dear sir/madam,\n\nMy name is Noor Hassan.\nI want to confirm that my appointment at the optician on October 5th at 10:30 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nNoor Hassan"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nMijn naam is Bas de Wit.\nIk wil graag bevestigen dat de vergadering op 20 november om 15:00 doorgaat.\n\nKunt u mij dit bevestigen?\nAlvast bedankt voor uw antwoord.\n\nMet vriendelijke groet,\nBas de Wit",
            "english": "Dear sir/madam,\n\nMy name is Bas de Wit.\nI want to confirm that the meeting on November 20th at 15:00 is scheduled.\n\nCan you confirm this?\nThank you for your response.\n\nKind regards,\nBas de Wit"
        }
    ],

    "thankYouMessage": [
        {
            "dutch": "Hoi Anna,\n\nBedankt voor je hulp.\nDat was heel fijn!\n\nGroetjes,\nMaria",
            "english": "Hi Anna,\n\nThanks for your help.\nThat was very nice!\n\nCheers,\nMaria"
        },
        {
            "dutch": "Hoi Mark,\n\nBedankt voor het advies.\nDat was erg handig!\n\nGroetjes,\nEva",
            "english": "Hi Mark,\n\nThanks for the advice.\nThat was very helpful!\n\nCheers,\nEva"
        },
        {
            "dutch": "Hoi Sophie,\n\nBedankt voor je uitnodiging.\nIk vond het leuk!\n\nGroetjes,\nTom",
            "english": "Hi Sophie,\n\nThanks for your invitation.\nI enjoyed it!\n\nCheers,\nTom"
        },
        {
            "dutch": "Hoi Peter,\n\nBedankt voor je tip.\nDat was erg nuttig!\n\nGroetjes,\nLisa",
            "english": "Hi Peter,\n\nThanks for your tip.\nThat was very useful!\n\nCheers,\nLisa"
        },
        {
            "dutch": "Hoi Emma,\n\nBedankt voor je hulp.\nDat waardeer ik echt!\n\nGroetjes,\nNoah",
            "english": "Hi Emma,\n\nThanks for your help.\nI really appreciate it!\n\nCheers,\nNoah"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nHartelijk dank voor uw snelle reactie.\nDat was erg behulpzaam.\n\nMet vriendelijke groet,\nSara Jansen",
            "english": "Dear sir/madam,\n\nThank you very much for your quick response.\nThat was very helpful.\n\nKind regards,\nSara Jansen"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nBedankt voor uw hulp bij mijn aanvraag.\nIk waardeer uw moeite zeer.\n\nMet vriendelijke groet,\nAhmed El-Sayed",
            "english": "Dear sir/madam,\n\nThank you for your help with my application.\nI really appreciate your effort.\n\nKind regards,\nAhmed El-Sayed"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nHartelijk dank voor de informatie.\nHet was erg nuttig.\n\nMet vriendelijke groet,\nLisa de Vries",
            "english": "Dear sir/madam,\n\nThank you very much for the information.\nIt was very useful.\n\nKind regards,\nLisa de Vries"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nDank u wel voor uw snelle antwoord.\nDat helpt me enorm.\n\nMet vriendelijke groet,\nTom Bakker",
            "english": "Dear sir/madam,\n\nThank you for your quick reply.\nThat helps me a lot.\n\nKind regards,\nTom Bakker"
        },
        {
            "dutch": "Geachte heer/mevrouw,\n\nHartelijk dank voor uw hulp.\nIk waardeer dit zeer.\n\nMet vriendelijke groet,\nFatima Ali",
            "english": "Dear sir/madam,\n\nThank you very much for your help.\nI really appreciate it.\n\nKind regards,\nFatima Ali"
        }
    ]
};
