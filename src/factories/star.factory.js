
// Classe que é responsável por manter a lógica de criação de estrelas

class StarFactory extends Factory {
  // Sobrescrita de método que está em factory
  // retorna uma Estrela em posição aleatória
  create() {
    const position = super.getRandomPosition();
    return new Star(position.x, position.y, 5);
  }
}
