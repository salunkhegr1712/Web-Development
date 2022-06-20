// manipulation of the single element  with theuse pf the jQuery

$("h1").css("color", "red");
// if you wnt to get only value of the attribute just do
$("h1").css("color"); // o/p := red

// the timeout is a js function which ad some delay so that we use it to
// some animation with use of the timeout
var f = setTimeout(fcuk, 2000);

function fcuk() {
  $("h1").css("color", "black");
  $("button").css("font-size", "3rem");
}
// here we are selecting multipple number of attribute means mutliple buttons are being manupulated at once
$("button").css("font-size", "10rem");

// add the class with the use of the jquery in javascript file

$("h1").addClass("tryclass tryclass2");

// adding timeout with function
f = setTimeout(newfunc, 5000);

function newfunc() {
  // jquery to remove a class from the element
  $("h1").removeClass("tryclass tryclass2");
  $("h3").text("Hello there welcome to hell called COEP");
}

// to change the text inside the something in javascript with jquery we use .text to change the inner text
// in the elementlike h1 and paragraph and section

// manipulation of the text with use of the jQueries
// the working of text is just like the textContent which we used in the dom model

$("td").text("change the subject inside the table bitch");

// to change the html in the selected region

$("h1").html("<em>hey<em>")

// $(".new").html();
// '\n    <label for=""> Enter your name Here::</label>\n    <input type="text" name="None" value="">\n  '

// all of functions like .text .html in the jQueries are just object method which are
// created inside the js file and we use that file to make our life easy

// in the DOM if you want to see any attribute you have to do use the setatrribute and getattribute
// inorder to set and get value of currently selected attributeof a element

// here we only have
// .attr
$("h1").attr("color"); //black
$("h1").attr("class");
$("h1").attr("id", "grs");
// outputs
// $("h1");
// S.fn.init [h1#grs, prevObject: S.fn.init(1)]0: h1#grslength: 1prevObject: S.fn.init [document][[Prototype]]: Object(0)
// $("h1").attr("id");
// 'grs'
//atttribute are values like src class id which present inside of elementtag


// event listener in the jQueries for only one element


// it is so much easy to make the event listener inside the jqueries
$("h1").click(name);

// function with runs if event listener hear something
function name() {
  $("h1").css("color", "green");
  $("h1").css("font-size", "5rem");
  f = setTimeout(fcuk, 2000);
}

// event listener in the jQueries for a group of element
// as in dom you have need to apply the for loop and eventlistener one by one but it do not
// need to mention externally

$("button").click(name);

// function with runs if event listener hear something
function name() {
  $("button").css("color", "green");
  $("button").css("font-size", "5rem");
  $("button").css("background-color", "skyblue");
}


// eventlistener for keypress

// so there is blank box and event.key will help us to detect the value which user put in textbox

$("input").keypress(function() {
  console.log(event.key);
});


// if you want to selct whole doc just do as follow
// so now your button color will change with responce of the keyboard
// $(document).keypress(name);

//challenge to show the text given in keyboard on heading 1

$(document).keypress(newf);

function newf(event) {
  $("h1").text(event.key);
}

// other events in eventlistener

// on is also universal eventlistener and you just have to insert
// syntax
// on("event","function")

$("h1").on("mouseover", fcuk);

// append and prepend add the data inside of mentioned element
// before and after add the data inside of mentioned element
$("h1").before("<em>hell</em>");
// S.fn.init [h1#grs, prevObject: S.fn.init(1)]
$("h1").after("<em>hell</em>");
// S.fn.init [h1#grs, prevObject: S.fn.init(1)]
$("h1").append("<em> hell</em>");
// S.fn.init [h1#grs, prevObject: S.fn.init(1)]
$("h1").prepend("<em> hell </em>");
// S.fn.init [h1#grs, prevObject: S.fn.init(1)]


// to remove a element
// $("h1").remove();


// animations
// $("h1").hide(); it is used to hide a element
// $("h1").show(); it is used to unhide a element
// $("h1").toggle(); it will switch between show and hide

// $("h1").fadeOut(); hide with some fading out effect
// $("h1").fadeIn(); this will back the faded out element with some fadein effect

//  fade is change in the opacity
//
// slideup and slide down to collapse and un collapse the element
// slideup and slideDown look quite good as the effect
// $("h1").slideUp();
// $("h1").slideDown();

// if you want some pertivular animation according to your need with css
//
// use the animate function() inside you can declare css rules in curly{} braces
//  here you can only provide element which has numerical value not like
//  background-color:red;
//
// $("h1").animate({opacity:.5})
