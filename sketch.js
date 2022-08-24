let cols, rows;
let zoff = 0;

const inc = 0.15;
const scl = 20;
const offset = 1.1;

function setup() {
  const cnv = createCanvas(700, 700);
  cols = floor(width / scl);
  rows = floor(height / scl);
  //   background(200);
}

function draw() {
  background(0);
  let yoff = 0;
  for (let y = offset; y < rows; y++) {
    let xoff = 0;
    for (let x = offset; x < cols; x++) {
      let noiseWave = noise(xoff, yoff, zoff);

      //angle
      let angle = noiseWave * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;

      //color
      let r = map(noiseWave, 0, 1, 240, 0);
      let g = map(noiseWave, 0, 1, 0, 255);
      let b = map(noiseWave, 0, 1, 255, 100);
      let transparency = map(noiseWave, 0.3, 0.6, 50, 170);

      let color = [r, g, b, transparency];

      stroke(color);
      strokeWeight(map(noiseWave, 0, 1, 0.2, 3.5));
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl * angle * 0.35, 0);
      fill(color);
      circle(0.5, 0.5, angle);
      pop();
    }
    yoff += inc;
  }
  zoff += 0.01;
}

function keyTyped() {
  if (key === "s") {
    noLoop();
  } else if (key === "c") {
    loop();
  }
}
