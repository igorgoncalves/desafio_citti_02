// Classe que representa o céu
class Sky {
  constructor() {
    this.elements = [];
    this.color = color(135, 206, 235);
    this.isNight = false;
  }

  // adiona um elemento no céu
  addSkyElement(element) {
    this.elements.push(element);
  }

  sunrise() {
    this.isNight = false;
    this.color = color(135, 206, 235);
  }

  sunset() {
    this.isNight = true;
    this.color = color(26);
  }

  // callback é uma função que é passada como parametro para outra função
  render(callback) {
    let filteredElements;
    let filter;

    background(this.color);

    if (this.isNight) {
      // o operador 'instaceof' verifica se um objeto é uma instancia de uma certa classe
      /* filter recebe uma função que pede um parametro como entrada e verifica se é uma estrela
         ou nave espacial, o retorno é verdadeiro ou falso */
      filter = (element) => element instanceof Star || element instanceof SpaceShip;
    } else {
      filter = (element) => element instanceof Cloud;      
    }

    /* a função filter filtra os elementos de um Array baseado em uma função que 
      retorne verdadeiro ou fals */
    filteredElements = this.elements.filter(filter);
    
    // aqui o callback é executado passando a lista de elementos filtrados como parametro
    callback(filteredElements);
  }
}
