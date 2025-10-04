/*fibonaci reeks */
let limiet=parseInt(prompt("geef limiet in:"));
let a=1, b=1;

for (let i=3;i<=limiet;i++){
    if (a <=limiet){
        console.log(a);
        let volgende= a+b;
        a=b;
        b=volgende;
    }
}

