// std1 is an object

function sum(n,m){
  return n+m;
}
function mul(n,m){
  return n*m;
}
function div(n,m){
  return n/m;
}
function sub(n,m){
  return n+m;
}
function calculate(num1,num2,op){
  return op(num1,num2);
}

var std1= {
  // properties for a object is written in  comma seperated fashion
  // meand var1:value, var2:value in such fashion
  name:"ghansham",
  std:"B. Tech",
  branch:"CSE",
  year: 2023,
  // you can pass any type of the value like number string or even a array which is
  // a mixture of the all of datatype inside a object and you dont have need to declare the
  // object before using the object
  lang:["c","c++","JS","Python"]

}
var std2= {
  name:"ghansham",
  std:"B. Tech",
  branch:"CSE",
  year: 2023,
  lang:["c","c++","JS","Python"],
  // you're also able to write the functions for objects and the all the varibles created from that object
  //  will able touse that perticular function
  gh:function(n1,n2,op){
    console.log(calculate(n1,n2,op));
    alert("studying");
  }
}

// this is a keyword is points towards the currently selected class

// this is common way to create object but this method will such in furthur time as you need to write a
// large number of code a you just have to type 5 lines of code for each of the single Object
// so lets generalise it with constructor function

// first letter of the function for a constructor function is capital letter always  this is for our
// simplicity that help us to seprate the common function higherOrder functions and the constructor
// functions

// a non parametric constructor function

function Constructor(){
  this.name="Ghansham";// here we use semicolon as it is a function
  this.std="B. Tech";
  this.branch="CSE";
}

function Constructor1(name,std,branch){
  this.name=name;// here we use semicolon as it is a function
  this.std=std;
  this.branch=branch;
}

// code and outputs
// as you assign new varible to the constructor so you have to use the tag new
var a=new Constructor();
//Constructor {name: 'Ghansham', std: 'B. Tech', branch: 'CSE'}


var b=new Constructor1("ghansham","10th","computer");
//Constructor1 {name: 'ghansham', std: '10th', branch: 'computer'}


// lets try to use the functions inside the inside a constructor function which is used for the
// creation of the objects

// this is function which is use as the paramteric function iside of the Constructor functions


function NewConstructor(num1,mum2,op){
  the fun is a function inside a constructor function and it's initialisation differs in direct object
  declaration and the
  // x.function =function(){} in the Constructor function
  // x.function:function(){} in th normal direct objec declaration
  this.fun= function(num1,num2,op){
    console.log(calculate(n1,n2,op));
    alert("studying");
  }

}
