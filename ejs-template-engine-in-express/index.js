const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let sitename = "Adidas"
  let searchtext = "Its a very good brand"
  let arr = [24,54,98]
  res.render("main",{sitename:sitename,searchtext:searchtext,arr})
})

app.get('/blog/:slug', (req, res) => {
  let blogtitle = "Adidas"
  let blogcontent = "Its a very good brand"
  res.sendFile("blogpost",{blogtitle:blogtitle, blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})