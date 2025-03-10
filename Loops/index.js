console.log("This is tutorial on loops")

let a = 6
let b = 1
for (let i = 0; i < a; i++) {
    console.log(b+i)
}

let obj = {
    Name: "Abhinav and Om",
    Class: "8 and 7",
    School: "SCS"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}

for (const c of "Abhinav and Om") {
    console.log(c)
}