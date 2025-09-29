/* Bereken de faculteit van een getal: vraag een getal aan de gerbuiker en gebruik een for-loop om de faculteit van dat getal te berekenen
 */
let getal=parseInt(window.prompt("Geef een getal in:"));
function berekenFaculteit(getal){
    if (getal<0){
        return "faculteit kan niet worden berekend op negatieve getallen";
    }
    let faculteit=1;
    for (let i=1;i<=getal;i++){
        faculteit *= i;
    }
    return faculteit
}
let resultaat = berekenFaculteit(getal);
console.log(`de faculteit van ${getal} is ${resultaat}`)