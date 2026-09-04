const prompt = require("prompt-sync")();
// Somme des Éléments //
/* 
let number = parseInt(prompt("entrez votre number : "));
let result = 0;
let tab = []
for (i = 1; i <= number; i++) {
    let element = parseInt(prompt((`entrez le ${i} element: `)))
    tab.push(element)
    result = result + element
}
console.log(result);
*/
// Trouver le Maximum //
/*
let number = parseInt(prompt("entrez votre number : "));
let max = 0


for (let i = 1; i <= number; i++) {
    let element = parseInt(prompt((`entrez le ${i} element: `)))

    if (element >= max) {
        max = element
    }

}
console.log(max)
*/
// Trouver le Minimum //
/*
let number = parseInt(prompt("entrez votre number : "));
let min = parseInt(prompt("entrez le 1 element : "));

for (let i = 2; i <= number; i++) {
    let element = parseInt(prompt((`entrez le ${i} element: `)))

    if (element <= min) {
        min = element
    }

}
console.log(min) 
*/
// Multiplication des Éléments //
/*
let nombre = parseInt(prompt("entrez votre number : "));
let facteur = parseInt(prompt("entrez le facteur : "));
result = 1;
tab = []
tab2 = []
for (let i = 0; i < nombre; i++) {
    let element = parseInt(prompt(`entrez le ${i + 1} element :`));
    tab.push(element)
    tab2.push(tab[i] * facteur)

}
console.log(tab2)
*/
// Tableau en Ordre Croissant // 
/*
let number = parseInt(prompt("entrez votre number : "));
let tab = []
// let tab2 = []

for (let i = 1; i <= number; i++) {
    let element = parseInt(prompt(`entrez le ${i} number `));
    tab.push(element)
}

for (let i = 0; i < tab.length; i++) {

    for (let k = 1; k < tab.length; k++) {
        if (tab[i] <= tab[k]) {
            let x = tab[i];
            tab[i] = tab[k];
            tab[k] = x;
        }
    }
}

console.log(tab) 
*/
// Inversion d'un Tableau //
/*
let number = parseInt(prompt("entrez votre number : "));
let tab = []
let inverse = []

for (let i = 0; i < number; i++) {
    let element = parseInt(prompt(`entrez le ${1} number`))
    tab.push(element)
}
for (let i = number - 1; i >= 0; i--) { 
    inverse.push(tab[i])
}

console.log(tab)
console.log(inverse) 
*/
// Rechercher un Élément //
/*
let number = parseInt(prompt("entrez votre number : "));
let tab = []
let result = false
for (let i = 1; i < number; i++) {
    let element = parseInt(prompt(`entrez le ${i} number:  `))
    tab.push(element)

}
let x = parseInt(prompt("entrez l'élément à rechercher: "));

for (let i = 0; i < number; i++) {
    if (tab[i] === x) {
        result = true;
        break;
    }
} 

if (result) {
    console.log(" l'élément est présent")
}
else {
    console.log(" l'élément n'est pas présent")
}
*/
// Remplacer un Élément //
/*
let number = parseInt(prompt("entrez votre number : "));
tab = []
for (let i = 1; i <= number; i++) {
    let element = parseInt(prompt(`entrez le ${i} number: `))
    tab.push(element)
}
let x = parseInt(prompt("entrez la valeur à remplacer "));
let z = parseInt(prompt("entrez la nouvelle valeur "));
for (let i = 0; i < number; i++) {
    if (tab[i] === x) {
        tab[i] = z
    }
}
console.log(tab)
*/
// Afficher les Éléments Paire //
/*
tab = []
let number = parseInt(prompt("entrez votre number : "));

for (let i = 1; i <= number; i++) {
    let element = parseInt(prompt(`entrez le ${i} element: `))
    tab.push(element)
}
for (let i = 0; i <= number; i++) {
    if (tab[i] % 2 === 0) {
        console.log(`les elements paires du tableau:` + tab[i])
    }
    
}
*/
//  Afficher les Éléments Impairs //
/*
tab = []
let number = parseInt(prompt("entrez votre number : "));

for (let i = 1; i <= number; i++) {
    let element = parseInt(prompt(`entrez le ${i} element: `))
    tab.push(element)
}
for (let i = 0; i <= number; i++) {
    if ((tab[i] % 2) - 1 === 0) {
        console.log(`les elements impaires du tableau:` + tab[i])
    }

}
*/
//  Calculer la Moyenne //
/*
let number = parseInt(prompt("entrez le nombre d'elements: "))
let somme=0;
let tab = []
for (let i = 1; i <= number; i++) {
    let element = parseInt(prompt(`entrez le ${1} element: `))
    tab.push(element)
    somme = somme + element
}
console.log(somme)
let moyenne = somme / number;
console.log(tab)
console.log(moyenne) 

*/
// Fusion de Deux Tableaux // 
/*
let number1 = parseInt(prompt("entrez le nombre des elements du tab1: "))
let number2 = parseInt(prompt("entrez le nombre des elements du tab2: "))
let tab1 = []
let tab2 = []
let Tab = []
for (let i = 1; i <= number1; i++) {
    let element1 = parseInt(prompt(`entrez le ${i} element du tableau 1:`))
    tab1.push(element1);
}
for (let j = 1; j <= number2; j++) {
    let element2 = parseInt(prompt(`entrez le ${j} element du tableau 2:`))
    tab2.push(element2);
}

Tab.push(...tab1)
Tab.push(...tab2)

console.log(Tab)
*/
