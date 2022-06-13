var n1=["ghansham","vijay","adesh","abhishek","jaydeep","yash","aditya","mandar","chaitanya"];

var p=Math.random();
// we multiply by 10 so that we can get number from 0 to 8
var a=n1.length
p=p*a;

p=Math.floor(p);

console.log(p);
console.log(n1[p] + " is going to buy lunch today");
