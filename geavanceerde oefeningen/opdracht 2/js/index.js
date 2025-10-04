/* Bereken de faculteit van een getal: vraag een getal aan de gerbuiker en gebruik een for-loop om de faculteit van dat getal te berekenen
 */


let getal=parseInt(prompt("Geef een getal in:"));

//oplossing 1
//let nieuwGetal=1;
//for (let i=1;i<=getal;i++){
//    nieuwGetal = nieuwGetal * i;
//}
//console.log(nieuwGetal);


let nieuwGetal=1;
for (let i=getal;i>=1;i--){
    nieuwGetal = nieuwGetal * i;
}
console.log(nieuwGetal);