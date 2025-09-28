/*Schrijf een programma die de facultateit van een getal weergeeft. Vraag dit getal aan de gebruiker
 */

let getal=parseInt(window.prompt("Geef een getal in"));
function berekenFaculteit(getal){
    if (getal<0){
        return "faculteit is niet gedefinieerd van negatieve getallen";
    }
    let faculteit=1;
    let i=1;
    while (i<=getal){
        faculteit *= i;
        i++;
    }
    return faculteit
}
let resultaat = berekenFaculteit(getal);
console.log(`de faculteit van ${getal} is ${resultaat}`)