
// npm => node pacakge manager 

// npm => files of packages which has already been coded or made before .

//npm => is installed with node js  but we need to learn the usage .

//npm i package_name or npm install package_name 

// where do we get this package from :
// npm js website 

// example one liner joke copy and paste in the command line .
/*
//Steps to follow :

//example 1 :
//install the package  : npm i one-liner-joke

//use the package usage already given in the website .
var a = require('one-liner-joke');

// require('one-liner-joke'); -> gets the package of it 

console.log(a.getRandomJoke());  // -> calls the function get random jokes .

//output of it !!  

*/

//Example 2 : 

//npm i figlet

var figlet = require("figlet");

figlet("Laura baara", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});



// How to use node packages .



