
let x;
let y;
let encontrado = false;

function setup() {
  createCanvas(400, 400);
  x = int(random(400));
  y = int(random(400));
}

function draw() {
  background(160,82,45);
  
  if (!encontrado) {
    x = x + random(-5, 5);
    y = y + random(-5, 5);
    x = constrain(x, 0, 400);
    y = constrain(y, 0, 400);
  }

  let distancia = dist(mouseX, mouseY, x, y);
if(distancia < 50){
   fill(218,165,32)
 } else {
   fill (205,133,63)
 }
  circle(mouseX, mouseY, distancia);
  
  
if (distancia < 3) {
    encontrado = true; 
    textSize(32);
    fill(255);
  
    text("Encontrei!", 150, 140);
    noLoop();
  }

  if (encontrado) {
    fill (255, 228, 225);
    circle(x, y, 8);
    
    
    
  }
}