console.log("Abhinav")

// let omsh = document.getElementsByClassName("box")
// console.log(omsh)

// omsh[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor = "green"
})