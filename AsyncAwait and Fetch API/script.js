async function getdata() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(455)
    //     }, 3500);
    // })
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
    console.log(data)
    return 455
}

async function main() {
    
    console.log("Loading modules")
    console.log("Do something else")
    
    console.log("Load data")
    let data = await getdata()
    console.log(data)
    
    console.log("process data")
}
main()