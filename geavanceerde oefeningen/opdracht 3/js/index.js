/*print getallen die een bepaald patroon volgen:
*print de getallenreeks 1,2,4,8,16,23,...,liemiet *100 (= maal2) tot dat de waarde groter is dan een door de gebruiker ingegeven getal
 */
let limiet=parseInt(window.prompt("Geef een limiet in:"));
for (let i=1;i<=limiet;i=i*2){ //let i =1"we tellen vanaf 1" - i<=limiet"tot aan het ingegeven getal" i=i*2 in de loop a lde vermenigvuldiging zetten.
    console.log(i);
}



// oplossing 1
//for (let i=1;i<=limiet;i=+0){
 //   console.log(i);
//    i=i*2;
//}



// oplossing 2
//for (let i=1;i<=limiet;i++){
//    console.log(i);
//    i=i*2-1
//}

