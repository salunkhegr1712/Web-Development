//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight,height){
    var b=height**2;
    var bmi=weight/b >>0;
    return bmi;

}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.

*/
var height=1.8;
var weight=65;
var bmi= bmiCalculator(65,1.8);
if(bmi <=18.5) {
  alert("bmi of person with " +height+ " m height & "+weight+" kg is: "+bmi );
  alert("you're Underweight");

}
else if(bmi >18.5 && bmi <=24.9){
  alert("bmi of person with " +height+ " m height & "+weight+" kg is: "+bmi );
  alert("you're Fit");

}
else{
  alert("bmi of person with " +height+ " m height & "+weight+" kg is: "+bmi );
  alert("you're Overweight");
}
