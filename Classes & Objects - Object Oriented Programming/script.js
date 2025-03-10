// let obj = {
//     a: 1,
//     b: "harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit._proto_ = animal;
class animal{
    constructor(name){
        this.name = name
        console.log("object is created")
    }

    eats(){
        console.log("Kha rha hai tu")
    }

    jumps(){
        console.log("Kood rha hai om")
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        console.log("Object is creating and he is a lion...")
    }
}

let a = new animal("Bunny")
console.log(a)

let l = new lion("Sheru")
console.log(l)