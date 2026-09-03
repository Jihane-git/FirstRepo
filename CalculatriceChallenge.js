const prompt = require("prompt-sync")();

function Somme(a, b) {
    return a + b
}
function Multi(a, b) {
    return a * b
}
function Division(a, b) {
    if (b === 0)
        return ("Erreur : division par zéro impossible.");
    else
        return ("Résultat :", a / b);
}
function Substraction(a, b) {
    return a - b
}



let choix;
do {
    console.log(" CHOIX D'OPERATION \n - 1 => Addition \n - 2 => Multiplication \n - 3 => Division \n - 4 => Substraction \n -5 Quitter ")
    choix = parseInt(prompt("Entrez votre choix: "))
    switch (choix) {
        case 1:
            let a1 = parseFloat(prompt("Le 1er nombre : "));
            console.log("+")
            let b1 = parseFloat(prompt("Le 2eme nombre : "));
            console.log("Résultat :", Somme(a1, b1));
            break;
        case 2:
            let a2 = parseFloat(prompt("Le 1er nombre : "));
            console.log("*")
            let b2 = parseFloat(prompt("Le 2eme nombre : "));
            console.log("Résultat :", Multi(a2, b2));
            break;
        case 3:
            let a3 = parseFloat(prompt("Le 1er nombre : "));
            console.log("/")
            let b3 = parseFloat(prompt("Le 2eme nombre : "));
            console.log("Résultat :", Division(a3, b3));
            break;
        case 4:
            let a4 = parseFloat(prompt("Le 1er nombre : "));
            console.log("-")
            let b4 = parseFloat(prompt("Le 2eme nombre : "));
            console.log("Résultat :", Substraction(a4, b4));
            break;
        default:
            console.log("Merci de choisir un numéro parmi ceux proposés.");
    }
}
while (choix !== 5)
