/* schrijf een programma dat de tafels van vermenigvuldiging in een rij afdrukt:
* je vraagt aan de gebruiker de tafel
* je vraagt aan de gebruiker een eindgetal
* weergave 1x1=x,1x2=2,1x3=3,....
 */

let tafel=parseInt(prompt("Geef een getal(tafel) in:"));
let eindGetal=parseInt(prompt("Geef een eindgetal in:"));

for (let i=1;i<=eindGetal;i++){

    console.log(`${tafel} x ${i} = ${eindGetal}`);
}

