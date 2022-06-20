// you have enter selectors like css inside the jQuery
// A FUNCTION  to create a random number

function number() {
  var f = Math.random();
  f = Math.floor(f * 4);
  return f;
}
// create some variables which make our life handy
var k;
var buttonSequence = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var current;
var n=1;

// using event handler to listen keyboard input
$(document).keypress(handlekey);

// function to create randlomly generate colour frim array
function colourPattern() {
  // a timeout
  var f=setTimeout(function () {
    var haah=10;
  },5000);
  // animation and colour picker
  var randomChosenColour = buttonSequence[number()];
  $("." + randomChosenColour).fadeOut(200).fadeIn(200);
  gamePattern.push(randomChosenColour);

}

//eventlistener for mous key

$(".green").click(playGreen);
$(".blue").click(playBlue);
$(".red").click(playRed);
$(".yellow").click(playYellow);


// 4 funtion for each colout to take inout from mouse AND PLAY animation and music
function playGreen() {

  userPattern.push("green");
  $(".green").slideUp(100).slideDown(100);
  var audio = new Audio('sounds/green.mp3');
  audio.play();
  check();
}

function playRed() {

  userPattern.push("red");
  $(".red").slideUp(100).slideDown(100);
  var audio = new Audio('sounds/red.mp3');
  audio.play();
  check();
}

function playBlue() {
  userPattern.push("blue");
  $(".blue").slideUp(100).slideDown(100);
  var audio = new Audio('sounds/blue.mp3');
  audio.play();
  check();
}

function playYellow() {
  userPattern.push("yellow");
  $(".yellow").slideUp(100).slideDown(100);
  var audio = new Audio('sounds/yellow.mp3');
  audio.play();
  check();
}
// a as input to start gamePattern

function handlekey(event) {
  if (event.key.toLowerCase()=== 'a') {
    $("h1").text("Level " + n );
    gamePattern=[];
    colourPattern();
  }

}

// algo to check values for array of userPattern AND gamePattern
function arrayChecker() {

  var gg=max(gamePattern.length,userPattern.length);
  var jj=0;

  while(jj<gg){

    if (gamePattern[jj] === userPattern[jj]) {

      jj++;
    }
    else {
      return -1;
      break;
    }
  }
  return 1;
}

// main function under main checking and all things works
function check(){

  if (gamePattern.length >0 && gamePattern.length>0 && gamePattern.length ===userPattern.length){
    if(arrayChecker()===1){
      current++;
      n++;
      colourPattern();
      $("h1").text("Level "+ n);
      userPattern=[];

    }
    else {
      $("h1").html("You Loose!! Press A to Restart.")
      gamePattern=[];
      userPattern=[];
      n=1;
    }
  }

  else if (gamePattern.length===0 && userPattern.length===0) {
    if(gamePattern[0]==userPattern[0]){
      n++;
      current++;
      colourPattern();
      $("h1").text("Level "+ n);
      userPattern=[];
    }
  }

}

// a function to find max between 2
function max(a,b){
  if(a>b){
    return a;
  }
  else{
    return b;
  }
}
