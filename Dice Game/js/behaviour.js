// getting javascript with varfibales and dom and targetting the img
// so that we can change it according to the rfandom number
var a=document.getElementsByTagName("img");

var z=Math.random();
z=Math.floor(z*6)+1;
var b="images/dice"+z+".png";
a[0].setAttribute("src",b);


var x=Math.random();
x=Math.floor(x*6)+1;
var f="images/dice"+x+".png";
a[1].setAttribute("src",f);

// here we setting up for the printing new message accroding to who wins

var d= document.firstElementChild.lastChild.firstElementChild.firstElementChild;

// if else statement to print the message with imoji
if(z > x){
  // here we also can use textcontent but we dont have the emojis in JS
  // so we have do the work with inner html
  d.innerHTML="<h1>&#128681; Player 1 wins</h1>";

}
else if (z===x){
    d.innerHTML="<h1>= A Draw =</h1>";
}
else{
  d.innerHTML="<h1>Player 2 wins &#128681; </h1>";
}
