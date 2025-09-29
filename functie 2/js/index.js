function isEven(getal){
    return getal%2===0;
}

let getal=parseInt(window.prompt("Geef een getal in:"));
let resultaat =isEven(getal);
document.querySelector("#resultaat").innerText = resultaat;

