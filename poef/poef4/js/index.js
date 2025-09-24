/*
*je vraagt aan de gebruiker om km om te zetten naar meter
* *console.log(meters)
 */


// window.prompt("geef het aantal km in:");
// var km= window.prompt("geef het aantal km in:");
//
// var oplossing= km*1000
//
// console.log(oplossing)

let km= parseFloat(window.prompt("Geef een aantal km in: "));

let meters=km * 1000

//? km is ? m
console.log(`${km} km is ${meters} meter`);