/*Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven.
schrijf vervolgens het totaal van alle gegeven getallen op het scherm
 */
let getallen=parseInt(window.prompt("Hoeveel getallen wilt u ingeven"));
let getal1=parseInt(window.prompt("Geef een getal in:"));
let getal2=parseInt(window.prompt("Geef een getal in:"));
let getal3=parseInt(window.prompt("Geef een getal in:"));
let getal4=parseInt(window.prompt("Geef een getal in:"));
let getal5=parseInt(window.prompt("Geef een getal in:"));

let i=1;
let som=0;
while (i>=getallen){
    som = som +i;
    i++;
}
console.log(`som ${getal1+getal2+getal3+getal4+getal5}`);

