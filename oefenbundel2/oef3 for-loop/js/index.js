 var sterretje="*"
 let aantalLijnen=parseInt(window.prompt("Hoeveel (even nummer) lijnen met sterretjes?"));

for (let i=1;i<=aantalLijnen;i=i+1){
    console.log(sterretje);
    sterretje = sterretje + "*";
}