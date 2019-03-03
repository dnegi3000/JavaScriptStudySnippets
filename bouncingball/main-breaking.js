var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


var ball ;
var paddle ;

var START_X=2;
var START_Y=1;

var rightPressed = false;
var leftPressed = false;

var STOP_GAME = false ;


// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

//Ball 
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

//paddle
function Paddle(x,y){
            this.height = 20;
            this.width = 200;
            this.x = x;
            this.y = y;
            this.color = 'Red'


}


//The wall 

/*fucntion  Wall(x,y,rowNum,columnNum){

    this.x =  x;
    this.y=y;
    this.rowNum=rowNUm ;
    this.cloumnNUm= columnNUm;
    this.brickArray;  



}
*/

//Update method for the ball 
// UPdate the position
Ball.prototype.update = function() {

  
  if (paddle == undefined ) 
  {
    console.log("paddle is initialiazed ");
    return;
  }

  

  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ( (this.x < paddle.x) || (this.x <= paddle.x+paddle.width) ){
    
      if ((this.y + this.size) >= (height- paddle.height)) {
        this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= paddle.height) {
        this.velY = -(this.velY);
      }
    
  }
  //Condotion for game over
  if ((this.y + this.size) >= (height)) {
    STOP_GAME = true;
  }

  if ((this.y - this.size) <= 0) {
    STOP_GAME = true;
  }

  this.x += this.velX;
  this.y += this.velY;
}

//Prototype the draw method on ball 
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

//Draw method on the Paddle 
Paddle.prototype.draw = function(){
    ctx.beginPath();
    ctx.fillStyle= this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fill();
    ctx.closePath();

 }

Paddle.prototype.update = function(){

      if (rightPressed == true )
      {
        console.log(rightPressed  + ',' + leftPressed);
        this.x =this.x+10;
        rightPressed = false;

      }
      if (leftPressed == true)
      {
        console.log(rightPressed  + ',' + leftPressed);
        this.x=this.x-10;
        leftPressed = false;
      }


}




function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  if (STOP_GAME)
    {
     document.getElementById('score').innerHTML ='Game Over'  ;

      return ;
    } 

  if (ball == undefined) {
       ball = new Ball(
      random(0,width),
      random(0,height),
      START_X,
      START_Y,
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      10
    );
   
  }
  if (ball != undefined){
    ball.draw();
    ball.update();
  }
  
   if (paddle)
   {

   }
   else {

        paddle = new Paddle(0,height-20);
    }
   paddle.draw();
   requestAnimationFrame(loop);

}

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
   console.log("key pressed : " +  leftPressed + " , " + rightPressed) ;
   paddle.update();

}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

loop();
