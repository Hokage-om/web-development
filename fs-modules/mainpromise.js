import fs from "fs/promises"

let a = await fs.readFile("om.txt")
let b = await fs.writeFile("om.txt","this is")
console.log(a.toString())
console.log(b)
