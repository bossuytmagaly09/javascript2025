/* om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
schrijf een prompt die de leeftijd vraagt en zorg er voor dat je een nummer uitkomt*/

var leeftijd= window.prompt("Geef de leeftijd in");

if (leeftijd >= 18) {
    console.log(`u bent ${leeftijd} jaar u mag deelnemen`)
}else{
    console.log(`u bent ${leeftijd} u bent te jong`)
}



