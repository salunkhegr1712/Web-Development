// create a random number between the 1 to 100 and then see that is number
//  is less than 50 or bigger than that and print output accorfingly

var n=Math.random();
n=Math.floor(n*100)+1;

// now our number is generated with the help of math floor and random
//
// syntax of javascript for the  if else statement

// if (condition){
//   code if condition is true;
// }
// else {
//     code if condition is not true;
// }

// syntax for else if

// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }


// so now we will use if else-if  else statement
if (n >50){
  console.log(" Number is bigger than 50");
}
else if(n==50){
  console.log(" Number = 50");
}
else{
  console.log(" Number is smaller than 50");
}
