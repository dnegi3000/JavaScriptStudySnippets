var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

//paddle
function Paddle(x,y){
            this.height = 20;
            this.width = 200;
            this.x = x;
            this.y = y;
            this.color = 'Red'


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


Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Paddle.prototype.draw = function(){
   if(rightPressed)
    { 
     this.x
    }
}

Paddle.prototype.update = function(){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.rect(this.x, this.y,this.width,this.height);
  ctx.fill();
  ctx.closePath();
}


var balls = [];
var paddle ;
var START_X=1;
var START_Y=1;
var rightPressed = false;
var leftPressed = false;

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 1) {
    var ball = new Ball(
      random(0,width),
      random(0,height),
      START_X,
      START_Y,
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      10
    );
    balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
   }
   console.log("h : "+ height);
   console.log(width);

   paddle = new Paddle(0,height-20);
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
