var neww=prompt("Your Comment (Max 140 Characters)::");
var b= neww.length;

alert("You have written total of "+ b + " Characters and left is " + (140-b));


// // variable.length will print the length of the variable independent of the typeof the variable
// if you want to do any of the mathematical activity inside the alert so you must have to be
// carefull and must put that value in brackets else it will cause something as the error
// in normal a+b but in alert (a+b) in order to avoid any kind of the error

// after that when you have something error it is possible that you came to see the value Nan
// which majorly shows that there is something is fishy in your code
//
// Syntax::
// string.slice(start, end)

// Parameters::
// start	Required.
      // The start position.
      // (First character is 0).
// end	Optional.
      // The end position (up to, but not including).
      // Default is string length.

// slice code

// length of output::end-start

var neww=prompt("Your Comment (Max 140 Characters)::");
var b= neww.length;
var text=neww.slice(0,140);

alert("as per the limit afetr applying slicing if necceasary your text will look like :: "+ text);

// javascript follow the camel script having multiple words without spaces and big alphabet detct as new word
//ex: helloGhanshamSalunkheHere
// code by using functions like toUpperCase and toLowerCase

// this code will write name in format of first letter capital and remaining are small once
var ghansham= prompt("What is ur name?");
// then just alert the variable you created

var g1 =ghansham.slice(0,1);
var g2=ghansham.slice(1,);
g1=g1.toUpperCase();
g2=g2.toLowerCase();

alert("Hello there, " + g1+g2);
