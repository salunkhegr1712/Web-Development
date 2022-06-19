function music(ff) {
  switch (ff) {
    case 'w':

      // audio is object and Audio is a constructor function
      var a = new Audio("sounds/crash.mp3");
      // function inside the constructor function
      a.play();

      break;
    case 'W':
      // audio is object and Audio is a constructor function
      var a = new Audio("sounds/crash.mp3");
      // function inside the constructor function
      a.play();

      break;

    case 'a':
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();

      break;
    case 'A':
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();

      break;

    case 's':
      var a = new Audio("sounds/snare.mp3");
      a.play();
      break;

    case 'S':
      var a = new Audio("sounds/snare.mp3");
      a.play();

      break;

    case 'd':
      var a = new Audio("sounds/tom-1.mp3");
      a.play();

      break;
    case 'D':
      var a = new Audio("sounds/tom-1.mp3");
      a.play();

      break;

    case 'j':
      var a = new Audio("sounds/tom-2.mp3");
      a.play();

      break;
    case 'J':
      var a = new Audio("sounds/tom-2.mp3");
      a.play();

      break;

    case 'k':
      var a = new Audio("sounds/tom-3.mp3");
      a.play();

      break;

    case 'K':
      var a = new Audio("sounds/tom-3.mp3");
      a.play();

      break;

    case 'l':
      var a = new Audio("sounds/tom-4.mp3");
      a.play();

      break;

    case 'L':
      var a = new Audio("sounds/tom-4.mp3");
      a.play();

      break;
  }
}


function handleclick() {
  this.style.color = "#E75480";
  // this thee html element for which the handleclick() function
  //  was invoked at the first step
  // this is tag so we can extract the text content and play the sound according to interval
  // this audio is changed to Audio

  var ff = this.textContent;
  // switch case is used when you have multiple case to handle the
  // every time after code in each of the case you have type the break keyword
  music(ff);
  animation(ff);
}

var f = document.getElementsByClassName("btt");
for (var i = 0; i < f.length; i++) {
  f[i].addEventListener("click", handleclick);
}


document.addEventListener("keypress", handlekeyboard);

function handlekeyboard(event) {
  var ff = event.key;
  music(ff);
  animation(ff);
}

// read timeout
function animation(ff) {
  var d = "." + ff
  var c = document.querySelector(d);
  c.classList.add("pressed");
  // the timeout function syntax:
  // setTimeout(function, milliseconds, param1, param2, ...)
  let timeout = setTimeout(cd, 100,c);

}
// function to be called after timeout
function cd(c){
  c.classList.remove("pressed");
}

// here we get the key for bye tapping event.key and you get key pressed in keyboard
// the argument event is show us event for which the EventListener called the function
// event is a object as show in below object which specifies information related to the
// event which invoked the functiom
// isTrusted: true
// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// charCode: 97
// code: "KeyA"
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 0
// eventPhase: 0
// isComposing: false
// key: "a"
// keyCode: 97
// location: 0
// metaKey: false
// path: (4) [body.all, html, document, Window]
// repeat: false
// returnValue: true
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
// srcElement: body.all
// target: body.all
// timeStamp: 4433.9000000003725
// type: "keypress"
// view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// which: 97
// [[Prototype]]: KeyboardEvent
