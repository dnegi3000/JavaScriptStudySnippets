var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Point(pointX ,pointy){
 this.x = pointX 
 this.y = pointy 
}

function Polygon(points)
  {
    this.vertexes= points;
 } 


Polygon.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.beginPath();
  if (this.vertexes !== undefined)
    {
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    }
}


function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  requestAnimationFrame(loop);
}

loop();

