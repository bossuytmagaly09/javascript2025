let number=parseInt(window.prompt("Voer een getal in:"));
let reversed=0;

for (let i=number;i>0;i=(i-(i%10))/10){
    let laatsteCijfer=i % 10;//haalt laatste cijfer weg
    reversed = reversed * 10 + laatsteCijfer;
}
console.log(reversed)