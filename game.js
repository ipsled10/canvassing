var canvas = document.querySelector("#game");
// var canvas = doucment.getElementById("game");
var context = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 400;

//context.beginPath();//this method indicates that we are going to start drawing.
// it starts a new path
//after that we have context.moveTo(x,y)
//context.lineTo();
//context.stroke();

//now lets draw HI
// context.beginPath();
// //H
// context.moveTo(20,20);
// context.lineTo(20,50);
//
// context.moveTo(20,35);
// context.lineTo(35,35);
//
// context.moveTo(35,20);
// context.lineTo(35,50);
//
// context.stroke();
//
// //I
// context.moveTo(50,20);
// context.lineTo(65,20);
//
// context.moveTo(57,20);
// context.lineTo(57,50);
//
// context.moveTo(50,50);
// context.lineTo(65,50);
//
// context.strokeStyle = "red";
// context.lineWidth = 10;
// context.lineCap = "square";//["butt","round","square"] gives your line differernt
// //end caps
// context.font = "50px sans-serif";
// context.fillText("hello",100,100);
//
//
// context.stroke();


//to write the word hello


 
function Box(){
  this.x = 10;
  this.y = 10;
  this.width = 100;
  this.height = 100;
  this.color;
}

var boxes = [];
var total_boxes = 10;

for(var i = 0; i < total_boxes; i++){
  boxes[i] = new Box();
  boxes[i].color = random_color(0, 255, 0, 255, 0, 255, .5);

}
// var box = {
//   x: 0,
//   y: 10,
//   width: 100,
//   height: 100
// };

function loop(){
  update();
  draw();
  requestAnimationFrame(loop);//60 frames per second
}
function random_number(min , max){
  return Math.round(Math.random() * (max - min + 1) + min);
}
function random_color(rmin,rmax,gmin,gmax,bmin,bmax,alpha){
  var r = random_number(rmin,rmax);
  var g = random_number(rmin,rmax);
  var b = random_number(bmin,bmax);
  return 'rgba('+r+','+g+','+b+','+alpha+')';
}
function update(){

  boxes.forEach(function(box,i){

    box.x += random_number(-5,5);
    box.y += random_number(-5,5);
  })


}


function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  boxes.forEach(function(box,i){
    context.fillRect(box.x, box.y, box.width, box.height);
    context.fillStyle = box.color;
  })

}
loop();
