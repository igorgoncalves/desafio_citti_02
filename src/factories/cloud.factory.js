
// Classe que é responsável por manter a lógica de criação de nuvens
class CloudFactory extends Factory {
  
  // Sobrescrita de método que está em factory
  create() {
    return this.createSmallCloud();
  }

  // Variação da criação de nuvens
  createSmallCloud() {
    const position = super.getRandomPosition();
    return new Cloud(position.x, position.y, random(20, 50));
  }

  // Variação da criação de nuvens
  createBigCloud() {
    const position = super.getRandomPosition();
    return new Cloud(position.x, position.y, random(50, 60));
  }
  
}
