/* create a buisness name generator using adjectives shop name and other word

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine 
Foods
Garments

other word:
Bros
Limited
Hub*/

let rand = Math.random()
let first,second,third
if (rand<0.33) {
    first="Foods"
}
else if (rand>0.33 && rand<0.66) {
    first="Engine"
}
else {
    first="Garment"
}



rand = Math.random()

if (rand<0.33) {
    second="Crazy"
}
else if (rand>0.33 && rand<0.66) {
    second="Amazing"
}
else {
    second="Fire"
}



rand = Math.random()

if (rand<0.33) {
    third="Bros"
}
else if (rand>0.33 && rand<0.66) {
    third="Limited"
}
else {
    third="Hub"
}
console.log(first+" "+second+" "+third)













































