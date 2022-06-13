function add(a,b){

    alert(a + " + "+ b +" = " + (a+b));
}

// 10 and 17 are parameters here

add(10,17);

// FUNCTION WITH RETURN valueS
// math practise function

function mathpract(a,b) {
    return ((a+b)+(a*b) + (a-b)+(a/b))
}

mathpract(10,5);

// life in days months weeks
function lifeInWeeks(age) {

/************Don't change the code above************/

    //Write your code here.

    var f=90-age;
    var month=f*12;
    var days=f*365;
    var week=days/7 >>0;

    console.log("You have "+days+" days," +week+" weeks, "+month+" months left");



/*************Don't change the code below**********/
}

lifeInWeeks(51);
