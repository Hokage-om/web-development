let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b> Hey enjoy your click </b>"
})

let button1 = document.getElementById("but")

button1.addEventListener("contextmenu", ()=>{
    document.querySelector(".box").innerHTML = "<b> Hey enjoy your click </b>"
})

// button1.addEventListener("keydown", (e)=>{
//     console.log(e)
// })

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)
})