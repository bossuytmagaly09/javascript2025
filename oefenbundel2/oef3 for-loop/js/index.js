 var sterretje="*"
 let aantalLijnen=parseInt(window.prompt("Hoeveel lijnen met sterretjes?"));

for (let i=1;i<=aantalLijnen;i=i+1) {
    sterretje = sterretje + "*"
        console.log("*".repeat(i));
}
 for (let j =aantalLijnen-1;j>=1;j--) {
     sterretje = sterretje - "*"
     console.log("*".repeat(j));
 }

