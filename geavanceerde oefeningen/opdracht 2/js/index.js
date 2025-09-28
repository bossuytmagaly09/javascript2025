/* Bereken de faculteit van een getal: vraag een getal aan de gerbuiker en gebruik een for-loop om de faculteit van dat getal te berekenen
 */
let getal=parseInt(window.prompt("Geef een getal in:"));
let n = getal
for (let i=1;i<=getal;i=i-1){
    n = getal * i;
    console.log("De faculteit van het ingevoerde getal is",n);
}