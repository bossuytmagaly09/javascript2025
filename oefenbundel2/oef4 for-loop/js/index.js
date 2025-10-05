/*schrijf een programma die faculteit van een getal weergeeft
 */

let getal=parseInt(prompt("Geef een getal in:"));

let nieuwGetal=1;
for (let i=1;i<=getal;i++){
    nieuwGetal = nieuwGetal * i;
}
console.log(nieuwGetal)