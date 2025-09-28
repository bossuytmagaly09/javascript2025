/*print getallen die een bepaald patroon volgen:
*print de getallenreeks 1,2,4,8,16,23,... tot dat de waarde groter is dan een door de gebruiker ingegeven getal
 */
let getal=parseInt(window.prompt("Geef een getal in:"));
for (let i=1;i>=getal;i=i+1){
    console.log(i);
}