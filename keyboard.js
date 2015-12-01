var canvas = document.querySelector("#game");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Box(options){
  this.x = options.x || 10;
  this.y = options.y || 10;
  this.width = options.width || 100;
  this.height = options.height || 100;
  this.color = options.color || "#000000";
}

var player = new Box({
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  color: "#f4ed12",
  speed: 5
});
var bullets = [];
var keys = {};

function input(player){

  if(37 in keys){
    player.x -= player.speed;
  }

  if(39 in keys){
    player.x += player.speed;
  }
  if(38 in keys){
    player.y -= player.speed;
  }
  if(40 in keys){
    player.y += player.speed;
  }

  if(32 in keys){
    bullets[bullets.length] = new Box({
      x: player.x + player.width /2,
      y: player.y + player.height /2,
      width: 4,
      height: 4,
      color: "green",
      speed: 10
    });
  }
}

//detecting boundaries to restrict the player to not got outside of canvas

function boundaries(box){
  if(box.x <=0){
    box.x = 0
  }
  if(box.x + box.width >= canvas.width){
    box.x = canvas.width - box.width;
  }
  if(box.y <=0){
    box.y = 0;
  }
  if(box.y + box.height >= canvas.height){
    box.y = canvas.height - box.height;
  }
}

function draw_box(box){
  context.fillStyle = box.color;
  context.fillRect(box.x, box.y, box.width, box.height);
}

window.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
  e.preventDefault();
})

window.addEventListener("keyup", function(e){
  delete keys[e.keyCode];
})
function update(){
  input(player);
  boundaries(player);
}

function draw(){
  context.clearRect(0,0,canvas.width,canvas.height);
  draw_box(player);
  bullets.forEach(function(bullet){
    draw_box(bullet);
  });

}

function loop(){
  update();
  draw();
  window.requestAnimationFrame(loop);
}

loop();
/*
Detecting Input
keydown = when key is pushed down
keyup = when key is released
keypress = it fires when a key is released and also typically fires repeatedly
held down

*/
