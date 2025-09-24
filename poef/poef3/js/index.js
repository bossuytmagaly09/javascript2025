/* je vraagt het geboortejaar van de gerbuiker (bijv. 1973)
je vraagt ook het huidige jaar (bijvoorbeeld 2025)
je laat de pc uitrekenen hoeveel jaar je bent en doet de onderstaande controle:
om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
 */

var getal1=window.prompt("geef een jaartal:");
var getal2=window.prompt("geef een jaartal:");
var kleinste = getal2
var grootste = getal1
var leeftijd = 18

if (leeftijd>=18) {
    console.log(`u bent ${getal1 - getal2} jaar u mag deelnemen`)
}else{
    console.log(`u bent ${getal2 - getal1} jaar u mag NIET deelnemen`)
}














// /* om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
// schrijf een prompt die de leeftijd vraagt en zorg er voor dat je een nummer uitkomt*/
//
// var leeftijd= window.prompt("Geef de leeftijd in");
//
// if (leeftijd >= 18) {
//     console.log(`u bent ${leeftijd} jaar u mag deelnemen`)
// }else{
//     console.log(`u bent ${leeftijd} u bent te jong`)
// }



