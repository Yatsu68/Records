let start = 'oui'.toUpperCase();

while (start === 'OUI') {

let mysteryword = prompt("Choisissez le mot mystère").toUpperCase().trim();
//selection mot mystère, pr potentiellement tenter de mettre des asterisques .replace(/./g, '*')

while (mysteryword === '') {
    mysteryword = prompt("S'il vous plaît veuillez écrire un mot mystère").toUpperCase().trim();
}

let display = '_'.repeat(mysteryword.length)
//creation des _ comme au pendu

let timer = 6
//pour limiter le nombre de tentatives




while (mysteryword !== display && timer > 0){

    let guess = prompt(`Devine une lettre du mot : ${display}`).toUpperCase().trim();
    //selection des lettres pr trouver le mot

    while (guess.length !== 1) {
        //pr empecher de mettre plus d'une lettre 
        guess = prompt(`Met seulement une lettre s'il te plaît : ${display}`).toUpperCase().trim();
    }

    let foundPos = mysteryword.indexOf(guess);
    //pr trouver la position de la lettre dans le mot mystère


    if (foundPos === -1) {
        timer = timer - 1
        if (timer === 1) {
            alert(`c'est ta dernière chance !!`);
        } else {
            if (timer === 0) {
            } else {
                alert(`Cette lettre n'est pas dans le mot mec, tu peux faire encore ${timer} erreurs`);
            }
        }
    }   
    

    
    while (foundPos !== -1) {
        // letter found , timer 
        
        let firstpart = display.substring(0, foundPos);
        let lastpart = display.substring(foundPos + 1, mysteryword.length);
        //separation du mot en deux parties pr inserer la lettre à sa place
        
        display = `${firstpart}${guess}${lastpart}`;
        
        foundPos = mysteryword.indexOf(guess, foundPos + 1);
        //on cherche guess dans le mot à partir de foundPos + 1        
        
    } 

}


if (mysteryword === display || timer > 0) {
    //lorsque le mot est trouvé
    alert(`Tu as trouvé le mot mystère : c'était  ${mysteryword} `)
} else {
    //lorsque le mot n'est pas trouvé
    alert(`Tu as perdu, le mot mystère était ${mysteryword}`)
}





start = prompt("Vous avez gagné, voulez-vous rejouer ?? (répondez par oui ou non)").toUpperCase().trim();
//savoir si le joueur veut refaire une partie

if (start === 'OUI') {
    //le joueur veut rejouer
    alert("Une nouvelle partie va débuter")
} else {
    //le joueur ne veut pas rejouer
    alert('A une prochaine fois peut-être ! Reviens quand tu veux')
}

}

//faire feature pr qu'on puisse pas mettre de caractères speciaux
