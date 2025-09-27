/*Schrijf een programma die een aantal getallen inleest en eindigd wanneer de gebruiker een negatief getal ingeeft.
Schrijf daarna de som van de getallen op het scherm
 */
let getal=parseInt(window.prompt("Geef een getal in:"));
let i=1;
let som=0;
while (i<=20){
    som += i;
    i++;
    if (getal!==20){
        console.log("Negatief getal");
    }else{
        console.log("De som van de getallen 1 tot 20 is" +som)
    }
}
