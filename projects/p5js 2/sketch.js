function setup() {
  createCanvas(720, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(248,248,255);

  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;

  fill(210,180,140, r1);
  rect(width / 2 + r1 / 2, height / 2, r1, r1);

  fill(255,228,225, r2);
  rect(width / 2 - r2 / 2, height / 2, r2, r2);
}