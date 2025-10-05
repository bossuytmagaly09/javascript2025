/* Schrijf een programma waar je de gebruiker naar een getal vraagt. controleer ieder getal tussen 0 en het ingegeven getal en druk de even getallen af op het scherm

 */

let getal=parseInt(prompt("Geef een getal in:"));

for (let i=1;i<=getal;i++){
    if (i %2 ===0){
        console.log(i);
    }
}