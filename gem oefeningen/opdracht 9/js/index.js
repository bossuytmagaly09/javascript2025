// print getallen tussen 1 en n die deelbaar zijn door 5: vraag een getal aan de gebruiker en print alle getallen van 1 tot n die deelbaar zijn door 5

let n=parseInt(window.prompt("Geef een getal in:"));
for (let i=1;i<=n;i++){
    let resultaat = i / 5;
    console.log(`${i} gedeeld door 5 is ${resultaat}`);
}