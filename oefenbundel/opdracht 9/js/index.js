/* dit is ee noefening delen door 3**/
var resultaat="";
for(let i=1;i<=30;i++) {

    if (i%3==0) {
        if (i == 30)
            resultaat = resultaat + i
    }else{
        resultaat = resultaat + i + ","

    }
}
console.log(resultaat);
//tip examen