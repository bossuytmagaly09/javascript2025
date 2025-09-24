/*
je vraagt wat ze doen van werk
*zelfstandige werkt zeer veel
*arbeider werkt veel
*bediende werkt
*ambtenaar duuuh
 */

let keuze=parseInt(window.prompt("1=zelfstandige, 2=arbeider, 3=bediende, 4=ambtenaar"));

if(keuze === 1){
    alert("werkt zeer veel")
}else if(keuze === 2){
    alert("werkt veel")
}else if(keuze === 3){
    alert("werkt")
}else if(keuze === 4){
    alert("duuuh")
}else{
    alert("everything else")
}