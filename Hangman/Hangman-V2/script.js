let start = "oui".toUpperCase().trim();

alert('Avant de commencer à jouer, ouvrez votre console')

while (start === "OUI") {
    console.clear();
    console.log('----------------------------BONNE CHANCE!----------------------------');

    let word = 'Gingembre Alliance Cadran Meubles Guerre Confidentiel Hollywood Sonnaille Sommeil Sel Poils Malheureux Tirer Cheville Rire Chenil Tirer Évolution Logique Description Jeunesse Social Baudet Journalistes Dormir Mode Sentiment Terreurs Convulsion Évier Renard Arbres Physique Vue Chaise Disciple Mariage Rome Asphalte Sujet Football Une Aspirer Rasoir Cacao Fakir Répétition Chaussons Citation Grenade Colonne Spectacle Entre Remarques Maison Épitaphe Céréale Prison Blouse';
    let WordList = word.split(' ');
    let mysteryWord = WordList[Math.floor(Math.random()*WordList.length)].toUpperCase().trim();

    let mysteryWordArray = '_'.repeat(mysteryWord.length).split('');
    let allGuesses = [];
    let WrongGuesses = [];
    
    
    while(mysteryWord !== mysteryWordArray.join("")) {
        let guess = prompt(`Devine une lettre du mot : ${mysteryWordArray.join(" ")}`).toUpperCase().trim();

        while (guess.length !== 1) {
            //pr empecher de mettre plus d'une lettre 
            guess = prompt(`Mets seulement une lettre s'il te plaît : ${mysteryWordArray.join(" ")}`).toUpperCase().trim();
        }

        while(/\d/.test(guess) === true){
            guess = prompt(`Ne mets pas de nombre s'il te plaît: ${mysteryWordArray.join(" ")}`).toUpperCase().trim();           
        }

        if(allGuesses.includes(guess) === true){
            //pr empecher de mettre une lettre déjà mise plus tôt
            guess = prompt(`Vous avez déjà mis la lettre ${guess}, réessayez: ${mysteryWordArray.join(" ")}`).toUpperCase().trim();
        }
        
        let foundPos = mysteryWord.indexOf(guess);
        //trouver l'emplacement de la lettre dans le mot

    
        if (foundPos === -1 && allGuesses.includes(guess) === false){
            WrongGuesses.push(guess);
            console.log(`${guess} n'est pas dans le mot`)
            console.log(`Nombre d\'erreurs : ${WrongGuesses.length}`);
            console.log(`Total lettre(s) fausse(s) : ${WrongGuesses}`);
            console.log('--------------------------------------------------------');

        }
    
    
        while(foundPos !== -1){
            mysteryWordArray.splice(foundPos, 1, guess);
            //ajouter la lettre dans l'array
    
            foundPos = mysteryWord.indexOf(guess, foundPos + 1);
        }
    
        allGuesses.push(guess);
        console.log(`Total lettre(s) testée(s): ${allGuesses}`)
        console.log('--------------------------------------------------------');
        console.log('--------------------------------------------------------');
    }


    if (WrongGuesses.length === 0){
        console.log(`Bravo! Tu as trouvé le mot mystère sans faire d'erreur: c'était ${mysteryWord}`);
    }else{
        if (WrongGuesses.length === 1){
            console.log(`Bravo! Tu as trouvé le mot mystère en ${WrongGuesses.length} erreur: c'était ${mysteryWord}`); 
        } else {
            console.log(`Bravo! Tu as trouvé le mot mystère en ${WrongGuesses.length} erreurs: c'était ${mysteryWord}`); 
        }
    }
    
    start = prompt("Vous avez gagné, voulez-vous rejouer ?? (répondez par oui ou non)").toUpperCase().trim();
    if (start === "OUI"){
        console.log("Une nouvelle partie va débuter");
    }
    
}

alert('A la prochaine! Reviens vite!')
