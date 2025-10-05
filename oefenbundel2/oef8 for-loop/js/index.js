/* Schrijf een programma die de volgende reeks horizontaal op het scherm schrijft
*1,2,4,8,16,32,64 vraag een getal aan de gebruiker
 */

let getal=parseInt(prompt("Geef een getal in:"));

for (let i=1;i<=getal;i=i*2){
    console.log(i);
}