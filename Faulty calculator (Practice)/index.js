let random = Math.random()

let a = prompt("Enter a number: ")
let b = prompt("Enter a number: ")

let c = prompt("Enter operation: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (random>0.1) {
    //Perform correct calculation
    alert('The result is: ', a + b)
}

else{
    //Perform wrong calculation
    c = obj[c]
}