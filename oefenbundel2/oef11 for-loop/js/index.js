/* schrijf een programma die de getaalenreeks van fibonacci opsomt
*vraag de gebruiker hoeveel getallen er dienen worden weer gegeven
 */
let limiet=parseInt(prompt("Geef een limiet in:"));
let a=1, b=1

for (let i=3;i<=limiet;i++){
    if (a <= limiet){
        console.log(a);
        let volgende = a+b;
        a=b;
        b=volgende
    }
}