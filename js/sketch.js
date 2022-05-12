var mont1 = {
  r: 0,
  g: 0,
  b: 0
}

var star1 = 0;
var star2 = 0;
var star3 = 0;
var star4 = 0;
var cynthia;
var sky = {
  r: 0,
  g: 0,
  b: 0
}
var sun = {
  x: 0,
  y: 600,
  g: 0
};
var spot={
  x:0,
  y:0
}

function setup() {
  createCanvas(400, 400);
  
}
// function preload(){
//   cynthia = createImg("cynthia.gif");
  
// }
function draw() {
  
  sky.r = map(mouseX, 0, 250, 20, 200)
  if (mouseX > 200) {
    sky.r = map(mouseX, 200, 500, 200, 20)
  }
  sky.g = map(mouseX, 0, 250, 50, 230)
  if (mouseX > 200) {
    sky.g = map(mouseX, 200, 500, 230, 50)
  }
  sky.b = map(mouseX, 0, 250, 70, 250)
  if (mouseX > 200) {
    sky.b = map(mouseX, 200, 500, 250, 70)
  }
  background(sky.r, sky.g, sky.b);
  


  
//   mont1.r = map(mouseX, 0, 300, 130, 24)
//   if (mouseX > 300) {
//     mont1.r = map(mouseX, 300, 600, 24, 130)
//   }
//   mont1.g = map(mouseX, 0, 300, 155, 77)
//   if (mouseX > 300) {
//     mont1.g = map(mouseX, 300, 600, 77, 155)
//   }
//   mont1.b = map(mouseX, 0, 300, 166, 89)
//   if (mouseX > 300) {
//     mont1.b = map(mouseX, 300, 600, 89, 166)
//   }
//   fill(mont1.r, mont1.g, mont1.b),
//     triangle(-350, 600, 70, 250, 400, 600);

//   mont1.r = map(mouseX, 0, 300, 130, 24)
//   if (mouseX > 300) {
//     mont1.r = map(mouseX, 300, 600, 24, 130)
//   }
//   mont1.g = map(mouseX, 0, 300, 155, 77)
//   if (mouseX > 300) {
//     mont1.g = map(mouseX, 300, 600, 77, 155)
//   }
//   mont1.b = map(mouseX, 0, 300, 166, 89)
//   if (mouseX > 300) {
//     mont1.b = map(mouseX, 300, 600, 89, 166)
//   }
//   triangle(100, 600, 400, 350, 800, 600);

  
   push();
  star1 = 70-mouseX
  if (mouseX > 100) {
    star1 = mouseX-200
  }
fill(255,210,34,star1)

  translate(150,50);
  rotate(frameCount / -120.0);
  star(0, 0, 4, 15,4); 
  pop();

  push();
  star2 = 80-mouseX
    if (mouseX > 100) {
    star2 = mouseX-300
  }
fill(255,210,34,star2);
  translate(350,80);
  rotate(frameCount / -240.0);
  star(0, 0,5, 15, 4); 
  pop();

push();
    star3 = 30-mouseX
    if (mouseX > 100) {
    star3 = mouseX-250
  }
fill(255,210,34,star3);
  translate(300,100);
  rotate(frameCount / -100.0);
  star(0, 0,5, 11, 4); 
  pop();
  
push();
    star4 = 40-mouseX
    if (mouseX > 100) {
    star4 = mouseX-250
  }
fill(255,210,34,star4);
  translate(290,280);

  star(0, 0,3, 15, 4); 
  pop();
  
  
  
  sun.x = mouseX,
  
    sun.y = 350-sqrt(50000-sq(sun.x-250));
  // if (sun.x > 200) {
  //   sun.y = mouseX - 100
  // }

  sun.g = map(mouseX, 0, 250, 100, 133)
  if (mouseX < 250) {
    sun.g = map(mouseX,250, 500, 133, 100)
  }
//   color of sun
  fill(218, sun.g, 138);

  noStroke();
  ellipse(sun.x, sun.y, 120, 120);
  
  fill("#FFFFFF")
  rect(0, 0, 380, 20);
  rect(0, 0, 60, 380);
  rect(330, 0, 120, 400);
  rect(0,260, 400, 300);
  
  push();
  stroke(25);
  strokeWeight(5);
  line(60, 20, 330, 20);
  line(60, 260, 330, 260);
  line(60, 20, 60, 260);
   line(330, 20, 330, 260);
  pop();
  
  
  // cynthia.position(0, 120);
  
    // Text
  let s = 'Move your cursor here!  鼠标在此移动看看！';
fill(50,50);
  textSize(18);
text(s, 10, 370, 450, 480);
  
  
  
  
}



function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}