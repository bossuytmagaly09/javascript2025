function palindroom(woord){
    let omgekeerd="";
    for (let i=woord.length -1;i>=0;i--){
        omgekeerd += woord[i];
    }
    return woord === omgekeerd;
}
let woord=parseFloat(window.prompt("Geef een woord in:"));
palindroom(woord);

document.querySelector("#resultaat").innerHTML = palindroom(woord)?`"${woord}" is een palindroom`:`"${woord}" is geen palindroom`;
