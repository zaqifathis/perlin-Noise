class particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = 1;
    this.speed = 1;
    this.color = color;
    this.len = 64;
  }

  show() {
    strokeWeight(this.size);
    stroke(this.color);
    point(this.x, this.y);
  }

  update() {
    let theta =
      noise(this.x / noiseScale.value(), this.y / noiseScale.value()) *
      noiseStrength.value();
    this.x += cos(theta) * this.speed;
    this.y += sin(theta) * this.speed;
  }
}
