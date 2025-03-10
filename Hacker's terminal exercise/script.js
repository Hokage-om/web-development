async function get(initializinghacking, detecting, copy, sending, clean) {
    setTimeout(() => {
        let html = `<div class= "box"> ${initializinghacking} </div>`
        document.querySelector(".box").innerHTML=document.querySelector(".box").innerHTML+html
    }, 2000);

    setTimeout(() => {
        let html = `<div class= "box"> ${detecting} </div>`
        document.querySelector(".box").innerHTML=document.querySelector(".box").innerHTML+html
    }, 4000);

    setTimeout(() => {
        let html = `<div class= "box"> ${copy} </div>`
        document.querySelector(".box").innerHTML=document.querySelector(".box").innerHTML+html
    }, 6000);

    setTimeout(() => {
        let html = `<div class= "box"> ${sending} </div>`
        document.querySelector(".box").innerHTML=document.querySelector(".box").innerHTML+html
    }, 8000);

    setTimeout(() => {
        let html = `<div class= "box"> ${clean} </div>`
        document.querySelector(".box").innerHTML=document.querySelector(".box").innerHTML+html
    }, 10000);
}
get("Initializing hacking...","Reading your files...","Password files detected...","Sending files to server...","Cleaning up...")
