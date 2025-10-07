/*schrijf een programma die je alle potentiële mogelijk combinaties geeft
* in een 2-decimale vorm uitprint met kommma ertussen en tot en met 99.
* 00,01,02,03,04,05,06,07,08,09,10,11...99
 */

let resultaat=""
for (let i=0;i<=99;i++){
    if (i<=9){
        resultaat = resultaat + "0" + i + ","
    }else if(i===99){
        resultaat = resultaat + i
    }else{
        resultaat = resultaat + i + ","
    }
}
console.log(resultaat)