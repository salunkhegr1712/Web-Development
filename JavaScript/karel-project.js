/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main(){

   alternateBeeper();
}

function cornerToCorner(){

   turnLeft();
   move4Times();
   move3TimesToLeft();
   move4Times();
}

function move4Times(){
   move();
   move();
   move();
   move();
}

function digonalBeeper(){
   putBeeper();
   move();
   turnLeft();
   move();
   action();
   move();
   turnLeft();
   move();
   action();



}
function action(){
   putBeeper();
   move();
   move3TimesToLeft();
   move();
   putBeeper();
}
function move3TimesToLeft(){
   turnLeft();
   turnLeft();
   turnLeft();

}

function alternateBeeper(){
   act1();
   act2();
   act3();
   act1();
   act2();
   act3();
   act1();

}

function act1(){
   turnLeft();
   putBeeper();
   move();
   move();
   putBeeper();
    move();
   move();
   putBeeper();
}

function act2(){
  move3TimesToLeft();
   move();
   move3TimesToLeft();
}

function act3(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnLeft();
   move();
}
