var arr = [];

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  var n1 = 1;
  var n2 = 1;
  var i = 0;
  var j;

  //Write your code here:
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    arr.push(n1);
    return arr;
  } else if (n == 2) {
    arr.push(n1);
    arr.push(n2);
    return arr;
  } else {
    arr.push(n1);
    arr.push(n2);
    for (i = 0; i < n - 2; i++) {
      j = n2;
      n2 = n1 + n2;
      n1 = j;
      arr.push(n2);

    }
    return arr;
  }
  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}
