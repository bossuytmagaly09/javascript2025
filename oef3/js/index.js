/*
*vraag 2 prompts waar je elk 1 getal opvraagt aan de gebruiker
* in de console toont je de som van deze 2 getallen
 */


var getal1= window.prompt("Geef getal 1 in:");
var getal2 =window.prompt("Geef getal 2 in:");
console.log("optelling:",parseInt(getal1) + parseInt(getal2))
console.log("aftrekking:",parseInt(getal1) - parseInt(getal2))
console.log("vermenigvuldiging:",parseInt(getal1) * parseInt(getal2))
console.log("delen door:",parseInt(getal1) / parseInt(getal2))

// versie ES5
console.log("de som van" + getal1 + "+" + getal2 + "=" + (parseInt(getal1)+parseInt(getal2)));

// versie ES6
console.log(`de som van ${getal1} + ${getal2} = ${parseInt(getal1)+parseInt(getal2)}`);

//rest van een deling
console.log("rest van deling:",getal1%getal2);
//machtsverheffing
console.log("machtsverheffin:",getal1**getal2);
//1bijtellen
console.log(getal1++);
