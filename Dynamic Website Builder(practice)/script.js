function Createcard(title,cName,views,months,duration,thumbnail){
    let views2
    if(views<1000000){
        views2 = views/1000 + "K"
    }

    else if (views>1000000) {
        views2 = views/1000000 + "M"
    }
    let html = ` <div class="card">
        <div class="thumb"><img src = ${thumbnail} alt = "time">
        <div class="time">${duration}</div>
        </div>
        <div class="title">
            <h2>${title}</h2>
            <p>${cName} . ${views2} views . ${months} months ago</p>
        </div>
    </div>`
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}

Createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

