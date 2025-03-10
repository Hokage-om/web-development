// write a program to calculate a factorial of a Number using reduce and for loop

let a = 1
let b = prompt("Enter a number whose factorial you want")
let newarr = []

for (let index = 0; index <b; index++) {
   console.log(newarr.push(a+index))
   console.clear()
}

console.log(newarr)

let fact = (a,b)=>{
    return a*b
}

alert(newarr.reduce(fact))