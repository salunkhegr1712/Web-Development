var n1=["ghansham","vijay","adesh","abhishek","jaydeep","yash","aditya","mandar","chaitanya"];
console.log(n1);

n1.includes("vijay");
// output
// true
n1.length;
//9
n1.entries()
// Array Iterator {}


//fizzbuzz problem
// multiple of 3 Fizz
// multiple of 5 Buzz
// multiple of both 3 and 5 then FizzBuzz

var arr=[];
var i=1;

function fizzbuzz(){

  if(i %15===0){
    arr.push("FizzBuzz");
    i++;
  }
  else if (i%3===0) {
    arr.push("Fizz");
    i++;
  }
  else if (i%5===0) {
    arr.push("Buzz");
    i++;
  }
  else{
    arr.push(i);
    i++;
  }

}
var j=0;

// if you forget to increment variables inside of the while loop so
// you may ingage yourselve to infinite loop
// while Syntax
while (count<100) {
  fizzbuzz();
  j=j+1;
}

  console.log(arr);
