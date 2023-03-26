//functions : 

//1.normal function :

function sayhello(){

    console.log("hello guys");
};

sayhello();  // function call 
//-------------------------------------------------------------------------------------
//2.function in variable :

n1 = function (){
    console.log("supratick");
};

n1(); // function call 
//-------------------------------------------------------------------------------------
//3.arrow function call

var arrow =(p,q) =>{

    console.log(p+q);
}

arrow(2,3); //function call 

//-------------------------------------------------------------------------------------

//application : 

//lets create a array and check it has even elements 
// var iseven = (e)=>(e%2===0)
//or
var iseven = (e)=>{
      
    return e%2===0;
};

var res=[2,4,6,8].every(iseven);

console.log(res);





