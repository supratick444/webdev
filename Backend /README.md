const express = require('express')

express variable mai -> express ka shaktia         

const app = express()

app ne express ka shaktia use kia .

app.get('/', function (req, res) {
    
  res.send('Hello World')
})

app.listen(3000)

app.get('/',function()) is the route 

/ is the route which we are in , in the base web page 