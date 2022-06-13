
// this code will give us the differnce between the == and === which are both
// equality operators inside of the javascript and we have to check for conclusion
//
// theory
// ==	    equal to
// ===	    equal value and equal type

// practical

var a="1"; // datatype = string
var b=1;   // datatype = number

console.log(typeof(a));
console.log(typeof(b));

if (a==b){
  console.log("values are the same");
}

if (a===b){
  console.log("values are not same");
}
