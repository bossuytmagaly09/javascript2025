//print de veelvouden van een gegeven getal: vraag een getal aan de gebruiker en print de veelvouden van dat getal tot aan 100

let getal=parseInt(window.prompt("Geef een getal:"));

for (let i=1;i<=100;i+=getal){
    console.log(i)
}