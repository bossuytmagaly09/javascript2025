/*minimum 18 jaaroud zijn
 */
//bullitin van 12 vakjes is €20
//bullitin van 8 vakjes is €16
//bullitin van 6 vakjes is €12
//bullitin van 4 vakjes is €8
//bullitin van 2 vakjes is €4
let leeftijd=parseInt(prompt("Vul je leeftijd in:"));
if (leeftijd>=18){
    console.log("Je bent 18 of ouder u mag deelnemen");
    let bullitIn=parseInt(prompt("Welke bullitin wenst u te kopen?"));
    if (bullitIn===12){
        alert("te betalen bedrag is €20")
    }else if (bullitIn===8){
        alert("te betalen bedrag is €16")
    }else if (bullitIn===6){
        alert("te betalen bedrag is €12")
    }else if (bullitIn===4){
        alert("te betalen bedrag is €8")
    }else if (bullitIn===2){
        alert("te betalen bedrag is €4")
    }
}else{
    console.log("Om deel te nemen aan de spelen van de Nationale Loterij moet je minimum 18 jaar zijn")
}







