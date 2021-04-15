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

 const randomNumber = (min, max) => {
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
console.log('New results', newArrayResults);



