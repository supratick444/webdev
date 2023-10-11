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

# we are creating static files(folders):

-ek bahar mai public folder banana .
- ek images folder -> public ka andar 
- ek stylesheet folder -> public ka andar 
- ek javascript folder -> public ka andar.

- configure the express static in the express file express.js
- understand the path .

# Render karne k liye :

- install ejs package 
npm i ejs 

-configure ejs 

app.set("view engine" , "ejs");

-ek views folder banao

-usmein ejs files banao
 
-send ki jagah render 
