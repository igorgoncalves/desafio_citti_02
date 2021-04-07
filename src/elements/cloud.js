// Classe que representa uma nuvem
class Cloud extends SkyElement {
  constructor(x, y, initialSize) {
    super(x, y);
    this.size = initialSize;
    this.moveFactor = 2 * random(-1, 1);
  }

  move(){
    this._wind();
  }
  
  _wind() {    
    if(this.x >= width || this.x <= 0){
      this.moveFactor *= -1;
    }
    this.x = this.x + this.moveFactor;
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
