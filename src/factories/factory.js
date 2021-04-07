
// Fábricas são abstrações de lógica para criação de Objetos
class Factory {
  // Definie que toda classe filha deve ter um método create
  create(){
    // Dispara um erro caso a classe filha não implemente esse metodo
    throw "Defina esse metodo na classe filha"
  }

  // retorna objeto com posições aleatórias
  getRandomPosition() {    
    return {
      x: random(0, 700),
      y: random(0, 200),
    };
  }
}
