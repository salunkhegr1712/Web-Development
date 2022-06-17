function handleclick(){
  
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

  var gh=document.querySelector("div");
  var html="<button type='button' class='btn' name='button'>Click here to view current date and time </button> <br> <br>";
  html= html + " " + datetime;
  gh.innerHTML=html;
}

// on event query




var f= document.querySelector("button");

f.addEventListener("click",handleclick);
