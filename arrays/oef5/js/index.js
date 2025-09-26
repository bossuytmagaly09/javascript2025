//Oefening 5: Zoeken in een array
// Schrijf een programma dat controleert of een bepaald getal aanwezig is in een array en "Gevonden!" afdrukt als het aanwezig is, anders "Niet gevonden".

//we hebben een array met getallen
let getallen=[10,20,30,40,50];

//Het getal dat we willen zoeken
let gezocht=30;

//een vlag(boolean) die bijhoudt of het getal gevonden is
let gevonden=false;

//We doorlopen de array met een for-loop
for (let i=0;i<getallen.length;i++){
    //Controleer of het huidige element gelijk is aan het gezochte getal
    if (getallen[i] === gezocht){
        gevonden = true;//zet de vlag op treu
        break; //stopt de lus meteen, verder zoeken is niet nodig
    }
}
//Achteraf beslissen we wat we tonen op basis van de vlag
if (gevonden){
    console.log(`${gezocht} is gevonden!`);//template string (ES6) voor netere output
}else{
    console.log(`${gezocht} is niet gevonden!`);
}
