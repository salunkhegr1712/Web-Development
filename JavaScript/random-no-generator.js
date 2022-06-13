// code to generate the random number from  the given maximum number
var c=Math.random()
var range=prompt("enter the maximum element");

c=c*range;

// due to floor we will get numbers from the range of the 0 to 99 and never get 100
// so to solve these problem we just add 1 in output of the floor
c=Math.floor(c)+1;

console.log(c);


// code for the love calculator

var c=Math.random()
var range=100;

c=c*range;


c=Math.floor(c)+1;


console.log((c) + "%");
