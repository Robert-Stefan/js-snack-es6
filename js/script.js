// jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

/*
const bikes = [
    {
        name: 'Pink',
        peso: 7
    },
    {
        name: 'brown',
        peso: 8
    },
    {
        name: 'bianchi',
        peso: 7.5
    }
];

let lessWeightIndex = 0;

for (let i = 0; i < bikes.length; i++) {
    
    if(bikes[i].peso < bikes[lessWeightIndex].peso) {
        lessWeightIndex = i;
    }
    
}
console.log('La bici col peso minore è la bici', bikes[lessWeightIndex]);*/




//jsnack 2
/**
 * Creare un array di oggeti di squadre di calcio.
 * Ogni squadra avrà diverse proprietà: nome, punti, falli subiti.
 * Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
 * 
 * B
 * Generare numeri random al posto degli 0 nelle proprietà punti falli e falli subiti
 * 
 * C
 * Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

 /*const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const teams = [
    {
        name: 'Palermo',
        points: 0,
        fouls: 0
    },
    {
        name: 'Foggia',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Sassuolo',
        points: 0,
        fouls: 0
    },
    {
        name: 'Cagliari',
        points: 0,
        fouls: 0
    },
];

let newArrayResults = [];

for(let i = 0; i < teams.length; i++) {
    teams[i].points = randomNumber(0, 100);
    teams[i].fouls = randomNumber(0, 100);
        newArrayResults.push({
            name: teams[i].name,
            fouls: teams[i].fouls
        })
};

console.log('Results', teams);
console.log('New results', newArrayResults);*/

//jsnack 3 
//Si scriva una funzione che accetti tre argomenti, un array e due numeri ( a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

/*const myArray = ['Paolo', 'Fabio', 'Lorenzo', 'Didier', 'Alexander', 'Salvatore'];
let min = parseInt(prompt('Inserisci un numero tra 0 e 5'));
while(isNaN(min) || min < 0 || min > myArray.length) {
    min = parseInt(prompt('Inserisci un numero tra 0 e 5'));
}
let max = parseInt(prompt('Inserisci un numero tra '+min+' e 5'));
while(isNaN(max) || max < min || max > myArray.length) {
    max = parseInt(prompt('Inserisci un numero tra '+min+' e 5'));
}

//ES5

let newArray = [];

/*function filterArray(arr, min, max) {
    for(var i = 0; i < arr.length; i++) {
        const tmp = arr[i];
        if(min <= i && max >= i) {
            newArray.push(tmp);
        }
    }
}

filterArray(myArray, min, max);

console.log(newArray);*/

//ES6

/*const newFilterArray = myArray.filter((element, index) => {
    return min <= index && max >= index;
})

console.log(newFilterArray);*/

//Con forEach
/*function filterArray(min, max) {
    myArray.forEach((element,index) => {
        if(min <= index && max >= index) {
            newArray.push(element);
        }
    })
}

filterArray(min, max);

console.log(newArray);*/


//New Snack
const arrayObj = [
    {name: 'Poppy', type: 'tshirt', color: 'red'},
    {name: 'Jumping', type: 'occhiali', color: 'blue'},
    {name: 'CrissCross', type: 'scarpe', color: 'black'},
    {name: 'Jenny', type: 'borsa', color: 'pink'},
];

const newArrayObj = arrayObj.map((element) => {
    const newElement = {
        ...element,
        position: randomNumber(0,5)
    }

    return newElement;

})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(newArrayObj);