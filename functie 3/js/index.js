function printTafel(tafel){

    for (let i=1;i<=10;i++){
        document.querySelector("#resultaat").innerHTML += `<li>${i} x ${tafel} = ${i*tafel}</li>`
    }

}

let tafel=parseInt(window.prompt("Geef een tafel in:"));
printTafel(tafel);

