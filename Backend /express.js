//express isa framework
// use case => routing 
// routing =>
// https://www/facebook.com/profile/settings  
// /profile/settings => routes 

//types : GET -> jo data tum daloge woo URl mai dikhega  POST-> jo data tum daloge URL mai nhi dikhega usko post route bolte haa !!

const express = require('express')

const app = express()

app.use(function(req,res,next){
    console.log("Middle ware");
    next();
});


app.get('/', function (req, res) {
  res.send('Hello World Doremon ka bhai nodemon')
})

app.listen(3000)

// this is the server side code !!

//-> res = response send by the server .
//-> req = request send by the client .  So , here we listen app.listen(port_num)

//npm i nodemon -g : packages are installed globally in the system untill and unless the windows is formatted !

//npm i nodemon :packages only installed in that folder !

// use of nodemon : baara baara server ko open close nhi karna padega .

// if error arises : nodemon express.js
//fix it by : npx nodemon express.js 

// wha if we want to access from profile :

app.get("/profile",function(req,res){
    res.send("Welcome to my profile")
})

//Middleware : is a function which runs before routes agaer aap koi kaam kaarana chahate hoo !!

// in this concept we learn about the middleware which runs a function before the routes 
// ek dikkat ye haa ki : agar middleware pe aaya to request jaam hoojata and so we need is : next();
// next(); = bhaiya app dusre route pe jao 

// syntax : 

app.use(function(req,res,next){
    console.log("Middle ware");
    next();
});
