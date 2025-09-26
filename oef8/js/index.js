
//variabelen
let teRadenGetal=7;
let getal=0;
let teller=0
while(getal !== teRadenGetal){
    getal = parseInt(window.prompt("raad het getal"));
    teller = teller + 1;
}
console.log(`dit is het getal: ${getal} in ${teller} keer geraden`);