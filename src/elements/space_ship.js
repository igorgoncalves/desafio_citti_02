
// Classe que representa uma nave espacial
class SpaceShip extends SkyElement {
  constructor(x, y) {
    super(x, y);    
  }

  move(){
    this._listenKeyBoard()
  }

  // Verifica se as setas do teclado estão pressionadas, caso sim, move a nave na direção
  _listenKeyBoard() {    
    if (key == "ArrowRight") {
      this.x++;
    }
    if (key == "ArrowLeft") {
      this.x--;
    }
    if (key == "ArrowUp") {
      this.y--;
    }
    if (key == "ArrowDown") {
      this.y++;
    }
  }

  render() {
    noStroke();
    fill(256);
    ellipse(this.x, this.y, 60, 30);
    fill(180);
    ellipse(this.x, this.y-5, 30, 15);
    fill(200);
    ellipse(this.x, this.y-5, 15, 7);
  }
}
