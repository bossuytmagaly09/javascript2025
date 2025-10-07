

const aantal=parseInt(prompt("Geef een reeks aan getallen"));

const getallen=[];
const getallen2=[];
const som=[]

//in een array altijd vanaf null beginnen te tellen
for (let i=0;i<aantal;i++){
    const input=parseFloat(prompt(`geef getal ${i + 1}:`));
    getallen.push(input);
    getallen2.push(input);
    som.push(getallen[i]+getallen2[i]);
}

console.log("je array is:",getallen);
console.log("je array is",getallen2);
console.log("je resultaat is",som)



