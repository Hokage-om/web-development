           // WRONG //
// let a = prompt("Enter first number")
// let b = prompt("Enter second number")
// let sum = a+b {A AND B ARE STR}
// console.log(sum)
let a = prompt("Enter first number")
let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("SORRY THIS IS NOT ALLOWED !!!")
}
let sum = parseInt(a)+parseInt(b)

function main (){  
    let x = 1;
    try {
        console.log("The sum is ",sum*y)
        return true
    } catch (error) {
        console.log("Error")
        return false
    }
    finally{
        console.log("Closing programs")
    }
}
let c =main()