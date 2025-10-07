/*UITBREIDING op oefening 3
* totaal mag nooi een negatief getal zijn
* laat de gebruiker weten waarom
 */

let geboorteJaar=parseInt(prompt("Geef je geboortejaar in:"));
let lopendJaar=parseInt(prompt("Geef het lopende jaar in:"));
let resultaat=lopendJaar - geboorteJaar

if (resultaat>=18){
    console.log("vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen");
}else if (resultaat<=0){
    alert("het getal mag niet negatief zijn onheldig geboortejaar of huidig jaar")
}else{
    console.log("Gelukkig heb ik mijn ouders die alles voor me regelen");
}

