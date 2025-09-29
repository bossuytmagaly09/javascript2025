/*Schrijf een programma die de faculteit van een getal weergeeft.
*Vraag dit getal aan de gebruiker
 */
let getal=parseInt(window.prompt("Geef een getal in"));

function berekenFaculteit(getal){
    if (getal<0){
        return "faculteit word niet gedefinieerd"
    }
    let faculteit=1;
     for (let i=1;i<=getal;i++){
         faculteit *= i;
    }
     return faculteit
}
let resultaat=berekenFaculteit(getal);
console.log(`De facultiet van ${getal} is ${resultaat}`)