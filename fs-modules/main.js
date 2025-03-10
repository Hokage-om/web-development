const fs = require("fs")
// console.log(fs)

// fs.writeFileSync("Abhinav.txt", "Abhinav is good boy")
// fs.writeFileSync("om.js", "console.log()")
fs.writeFile("om.txt","Abhinav and om is a intelligent boy",()=>{
    console.log("done")
    fs.readFile("om.txt",(error,data)=>{                                                                    
        console.log(error,data.toString())
    })
})

fs.appendFile("om.txt", "winner",(e,d)=>{
    console.log(d)
})