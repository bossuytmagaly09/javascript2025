/* Schrijf een programma die alle primgetallen in een rij afdrukt
* Vraag een getal aan de gebruiker
 */

let getal=parseInt(prompt("Geef een getal in:"));

for (let i=2;i<=getal;i++){
    let isPrime = true;
    for (let j=2;j<i;j++){
        if (i % j === 0){
            isPrime = false;
            break;

        }
    }
    if (isPrime){
        console.log(i);
    }
}