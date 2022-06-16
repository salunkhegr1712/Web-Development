var a=document.getElementsByTagName("img");

var z=Math.random();
z=Math.floor(z*6)+1;
var b="images/dice"+z+".png";
a[0].setAttribute("src",b);


var x=Math.random();
x=Math.floor(x*6)+1;
var f="images/dice"+x+".png";
a[1].setAttribute("src",f);

var d= document.firstElementChild.lastChild.firstElementChild.firstElementChild;

if(z > x){
  d.innerHTML="<h1>&#128681; Player 1 wins</h1>";

}
else if (z===x){
    d.innerHTML="<h1>= A Draw =</h1>";
}
else{
  d.innerHTML="<h1>Player 2 wins &#128681; </h1>";
}
