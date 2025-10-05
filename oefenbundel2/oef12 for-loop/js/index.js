/* schrijf een promgramma die de groootste gemene deler van 2 getallen op het scherm schrijft
 */
let getal1=parseInt(prompt("Geef een getal"));
let getal2=parseInt(prompt("Geef een getal"));

let grootsteDeler=1;
for (let i=1;i<=getal1;i++){
    if(getal1 %i ===0){
        grootsteDeler = i;
    }
    for (let i=1;i<=getal2;i++){
        if (getal2 %i===0){
            grootsteDeler = i;
        }
    }
}
console.log(grootsteDeler)
