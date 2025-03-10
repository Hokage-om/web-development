let arr = [1 ,13 , 5, 7, 11]

let newarr = arr.map((e)=>{
    return e**2
})

console.log(newarr)

const greaterThan = (e)=>{
    if (e>7) {
        return true
    }
    return false
}

console.log(newarr.filter(greaterThan))

const n = [1,8,7,11]
let sum = (a,b)=>{
    return a+b
}

console.log(n.reduce(sum))