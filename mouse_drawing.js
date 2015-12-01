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

var boxes = [];
var drawing = false;
var box_size = 10;
document.addEventListener('mousedown', function(e){
  drawing = true;

});

document.addEventListener('mouseup',function(e){
  drawing = false;
});

document.addEventListener('mousemove', function(e){
  // console.log(drawing, e);
  if(drawing == true){
    boxes[boxes.length] = new Box({
      x: e.clientX - box_size/2,
      y: e.clientY - box_size/2,
      width: box_size,
      height: box_size,
      color: random_color(100,255,0,0,0,255,0,5)
    });
  }
})

function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  boxes.forEach(function(box,i){
    context.fillStyle = box.color;
    context.fillRect(box.x, box.y, box.width, box.height);
  })

}

function update(){

}

function random_number(min, max){
  return Math.round(Math.random() * (max - min + 1) + min);
}

function random_color(rmin, rmax, gmin, gmax, bmin, bmax, alpha){
  var r = random_number(rmin, rmax);
  var g = random_number(gmin, gmax);
  var b = random_number(bmin, bmax);
  return 'rgba('+r+','+g+','+b+','+alpha+')';
}

function loop(){
  update();
  draw();
  window.requestAnimationFrame(loop);
}

loop();
/*
there are a lot of mouse events
mouseup = when you release the left mouse button
click
dblclick
mousemove = when you move the mouse this event provides the mouse coordinates
mouseover = when you make the mouse enter the area of an html elemnt
mouseout = when you make the mouse exit the area of an html element
contextmenu = when you right-click or control-click an element
when defining an event, we use the document.addEventListener method
document.addEventListener(function(e){
  console.log(e);
})
*/
