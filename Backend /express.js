//express isa framework
// use case => routing 
// routing =>
// https://www/facebook.com/profile/settings  
// /profile/settings => routes 

//types : GET -> jo data tum daloge woo URl mai dikhega  POST-> jo data tum daloge URL mai nhi dikhega usko post route bolte haa !!

const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

// this is the server side code !!

//-> res = response send by the server .
//-> req = request send by the client .  So , here we listen app.listen(port_num)



