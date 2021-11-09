let ball = {};
let soundFile;

function setup() {
  createCanvas(710, 500);
}

function draw() {
  background(112,128,144);
  ball.x = constrain(mouseX,0, width);
  ellipse(ball.x, height / 2, 100, 100);
}

function mousePressed() {
  // map the ball's x location to a panning degree
  // between -1.0 (left) and 1.0 (right)
  let panning = map(ball.x, 0, width, -1.0, 1.0);
}