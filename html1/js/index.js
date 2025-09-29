let cursisten=["tom","tim","jan","nathan","yaman"];
//for (let i=0;i< cursisten.length;i++){ // geen gelijkaan want anders zal hij 1 te veek gaan tellen en krijg je error
//    document.querySelector("#cursisten").innerHTML += `<li>${cursisten[i]}</li>`// javasript injection naar HTML van javascript naar HTML kunnen plaatsen
//}

for (cursit of cursisten){
    document.querySelector("#cursisten").innerHTML += `<li>${cursit}</li>`
}