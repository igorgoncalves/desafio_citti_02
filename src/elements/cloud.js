// let cloud =  new Cloud(100, 200, 50);
class Cloud {
  constructor(x, y, initialSize) {
    this.x = x;
    this.y = y;
    this.size = initialSize;
  }

  wind() {
    let moveFactor = 2;
    this.x = this.x + moveFactor;
  }

  render() {
    noStroke();
    fill(256);
    ellipse(this.x, this.y, this.size, this.size);
    ellipse(this.x + this.size / 2, this.y, this.size, this.size);
    ellipse(this.x - this.size / 2, this.y, this.size, this.size);
    ellipse(
      this.x + this.size / 4,
      this.y - this.size / 4,
      this.size,
      this.size
    );
    ellipse(
      this.x - this.size / 4,
      this.y - this.size / 4,
      this.size,
      this.size
    );
  }
}
