/*De gebruiker dient zijn geboortejaar in te geven
*De gebruiker dient eveneens het lopende jaartal in te geven
* Wanner het verschil tussen het lopende jaartal en geboortejaar groter of gelijk is aan 18,
dan schrijf je op het scherm:"vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen".
* in alle andere gevallen:"gelukkig heb ik mijn ouders die alles voor me regelen"
 */

let geboorteJaar=parseInt(prompt("Geef je geboortejaar in:"));
let lopendJaar=parseInt(prompt("Geef het lopende jaar in:"));
let resultaat=lopendJaar - geboorteJaar

if (resultaat>=18){
    console.log("vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen");
}else{
    console.log("Gelukkig heb ik mijn ouders die alles voor me regelen");

}






