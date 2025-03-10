const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public')) // public == file name

// app.get,app.post,app.delete and app.put(path,handler)
app.get('/',(req,res)=>{
    res.send("Hello world2")
})

app.get('/blog/:slug',(req,res)=>{
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
})