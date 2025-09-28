//schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven
//Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm

let getallen=parseInt(window.prompt("Hoeveel getallen wenst u?"));
let getal1 =parseInt(window.prompt("Geef een getal in"));
let getal2 =parseInt(window.prompt("Geef een getal in"));
let getal3 =parseInt(window.prompt("Geef een getal in"));
let som=0;

for (let i=1;i>=getallen;i++){
    som = som + i;
}
console.log(`som: ${getal1 + getal2 + getal3}`);






