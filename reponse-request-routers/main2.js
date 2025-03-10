const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  console.log("Hey")
  res.send('Hello World2!')
})

app.post('/', (req, res) => {
  res.send('Hello World2 post!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Important
// res.sendFile('templates/index.html',{root: __dirname})
// "templates" is a folder name 
app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, d:4})
})