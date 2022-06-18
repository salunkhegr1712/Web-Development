function handleclick() {
  this.style.color = "#E75480";
  // this thee html element for which the handleclick() function
  //  was invoked at the first step
  // this is tag so we can extract the text content and play the sound according to interval
  // this audio is changed to Audio

  var ff = this.textContent;
  // switch case is used when you have multiple case to handle the
  // every time after code in each of the case you have type the break keyword
  switch (ff) {
    case 'w':
      var a = new Audio("sounds/crash.mp3");
      a.play();
      break;

    case 'a':
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;

    case 's':
      var a = new Audio("sounds/snare.mp3");
      a.play();
      break;

    case 'd':
      var a = new Audio("sounds/tom-1.mp3");
      a.play();
      break;

    case 'j':
      var a = new Audio("sounds/tom-2.mp3");
      a.play();
      break;

    case 'k':
      var a = new Audio("sounds/tom-3.mp3");
      a.play();
      break;

    case 'l':
      var a = new Audio("sounds/tom-4.mp3");
      a.play();
      break;
  }
}

var f = document.getElementsByClassName("btt");
for (var i = 0; i < f.length; i++) {
  f[i].addEventListener("click", handleclick);
}

var a = new Audio("sounds/crash.mp3");
a.play();
