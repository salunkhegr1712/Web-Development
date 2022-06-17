// here we are just writing the four basic functions and after that at end  we will
// call all of the function with  a single superfunction

function add(num1,num2){
  return num1+num2;
}

function substraction(num1,num2){
  return num1-num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function division(num1,num2){
  return num1/num2;
}

// superfunction here we are going to pass the function name as the parameter to the one function
// and that opcode will help us for calling the function in another function
// this type of functions are called as the high order  function
function superfunction(n1,n2,opcode){
  return opcode(n1,n2);
}


// a trick to find the problem in the certain piece of code
// type debugger; and after that write any code you eant to debug and find the error from thaet perticular piece of the code

// debugger;
// code
