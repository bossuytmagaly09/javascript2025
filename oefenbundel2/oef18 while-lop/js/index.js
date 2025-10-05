/* de gebruiker geeft een eindgetal in bv100
* Het programma kiest daarvan zelf een getal tussen nul en 100 die de gebruiker niet kent
* vervolgens dient de gebruiker het getal te raden
* Het programma antwoordt telkens als volgd:
*   het getal is kleiner of het getal is groter
* het resultaat: proficiat u hebt het getal in x aantal keren geraden
 */
let getal= parseInt(prompt("Geef een getal in:"));
let correctGetal =40;
let poging=parseInt(prompt("Raad een getal:"));

while(poging !== correctGetal){
    poging=parseInt(prompt("fout, probeer opnieuw"));
}
console.log("gefeliciteerd, je hebt het juiste getal geraden");