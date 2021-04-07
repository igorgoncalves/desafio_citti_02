/*

Estrutura do projeto
  - elements: Classe que representam objetos presentes no contexto to problema;
  - facades: agrega funções que alteram outros objetos mas não tem propriedade
   próprias, nem inseridas no problema;
  - factories: Classes que geram objetos e comportam a logica de criação das 
  instancias deles;
  - main.js :  programa principal que aciona toda a estrutura criada;

*/

let controller, sky, ship;

// Configuração da cena
function setup() {
  // Muda a velocidade de pintura
  frameRate(10);
  // Cria tela de pintura
  createCanvas(700, 400);
  // Instancias dos objetos
  sky = new Sky();  
  controller = new SkyController();
  ship = new SpaceShip(width/2, height/2);  
  
  // Constrolador modifica objeto
  controller.putStarsInSky(250, sky);
  controller.putCloudsInSky(5, sky);
  
  sky.addSkyElement(ship);
}

// Loop de desenho dos frames
function draw() {
  ship.move();  
  controller.watchTheHour(sky);
      
  // Para entender como funciona a função forEach veja: 
  // https://clovisdasilvaneto.github.io/explorando-javascript-filter-reduce-map-every-some-e-foreach
  sky.render((elements) => elements.forEach((el) => { el.move(); el.render(); }));
}
