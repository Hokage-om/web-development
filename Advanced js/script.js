async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main() {
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)
    let obj = {
        a:1,
        b:2,
        c:3
    }
    let {a,b} = obj
    console.log(a,b)
})()