
function handleclick(){
  this.style.color="#E75480";
  // this thee html element for which the handleclick() function
  //  was invoked at the first step
  // this is tag so we can extract the text content and play the sound according to interval
  // this audio is changed to Audio
  var ff=this.textContent;
  if(ff==='w'){
    var a=new Audio("sounds/crash.mp3");
    a.play();
  }
  else if (ff==='a') {
    var a=new Audio("sounds/kick-bass.mp3");
    a.play();
  }
  else if (ff==='s') {
    var a=new Audio("sounds/snare.mp3");
    a.play();
  }
  else if (ff==='d') {
    var a=new Audio("sounds/tom-1.mp3");
    a.play();
  }
  else if (ff==='j') {
    var a = new Audio("sounds/tom-2.mp3");
    a.play();
  }
  else if (ff==='k') {
    var a=new Audio("sounds/tom-3.mp3");
    a.play();
  }
  else {
    var a=new Audio("sounds/tom-4.mp3");
    a.play();
  }

}

var f=document.getElementsByClassName("btt");
for(var i=0; i < f.length;i++){
  f[i].addEventListener("click",handleclick);
}

var a=new Audio("sounds/crash.mp3");
a.play();
