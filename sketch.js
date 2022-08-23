let cols, rows;
let zoff = 0;
let colZoff = 0;

const inc = 0.15;
const scl = 20;
const numParticles = 100;
const points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background(0);
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;

      let noiseColor = noise(xoff, yoff, colZoff) * 255;
      stroke([angle, noiseColor, noiseColor]);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
  }

  zoff += 0.005;
  colZoff += 0.02;
}
