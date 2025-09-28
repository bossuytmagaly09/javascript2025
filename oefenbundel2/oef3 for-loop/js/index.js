 var sterretje="*"
 let aantalLijnen=parseInt(window.prompt("Hoeveel lijnen met sterretjes?"));

for (let i=1;i<=aantalLijnen;i=i+1) {
    sterretje = sterretje + "*"
        console.log(sterretje);
}
 for (let j =1;j<=aantalLijnen;j=j+1) {
     sterretje = sterretje - "*"
     console.log(sterretje);
 }

