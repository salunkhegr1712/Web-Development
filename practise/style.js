function time(){
  var a=new Date();
  var b=a.getFullYear();
  var c=a.getMonth();
  var d=a.getDate();

  var e=a.getHours();
  var f=a.getMinutes();
  var g=a.getSeconds();

  var date="Date : "+d+ " / "+c +" / "+b;
  var time="Time: "+e+ " : "+f +" : "+g;

  var datetime=date + " " +time;
  return datetime;
}
function ht(){
  var html="<button type='button' class='btn' name='button'>Click here to view current date and time </button> <br> <br>";
  html= html + " " + time();
  return html;
}

var j=0;
// on event query
var gh=document.querySelector("div");
var button=document.querySelector("button");

button.addEventListener('click', event => {
gh.innerHTML=ht();});
