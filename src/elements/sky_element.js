
// Classe que representa uma generalização de todos os elementos no céu
class SkyElement {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Definie que toda classe filha deve ter um método move
  move() {
    throw "Implementar o método move na classe filho";
  }

  // Definie que toda classe filha deve ter um método render
  render() {
    throw "Implementar o metodo render método na classe filho";
  }
}
