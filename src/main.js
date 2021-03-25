let controller, sky;

function setup() {
  // Muda a velocidade de pintura
  frameRate(10);
  // Cria tela de pintura      
  createCanvas(700, 400);
  // Instancias dos objetos
  controller = new SkyController();
  sky =  new Sky();  
  
  // Constrolador modifica objeto
  controller.putStarsInSky(250, sky);
  controller.putCloudsInSky(2, sky);

}

function draw() {  
  // Controlador verifica estado e altera objeto
  controller.watchTheHour(sky);  
  // Renderiza objeto
  sky.render();
}


