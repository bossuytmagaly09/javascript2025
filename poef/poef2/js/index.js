/* je vraagt het geboortejaar van de gerbuiker (bijv. 1973)
je vraagt ook het huidige jaar (bijvoorbeeld 2025)
je laat de pc uitrekenen hoeveel jaar je bent en doet de onderstaande controle:
om deel te nemen aan de nationale loterij moet je 18 jaar oud zijn.
 */

var geboorteJaar=window.prompt("geef je geboortejaar in:");
var huidigJaar=window.prompt("geef het huidig jaar in:");
if (huidigJaar - geboorteJaar >=18) {
    console.log(`u bent ${huidigJaar - geboorteJaar} jaar u mag deelnemen`);
}else{
    console.log(`u bent ${huidigJaar - geboorteJaar} jaar u mag NIET deelnemen`);
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



