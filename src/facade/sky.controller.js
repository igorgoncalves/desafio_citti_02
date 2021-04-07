// SkyController é uma fachada, ela agrega funções que alteram 
// outras classes, mas não tem propriedades carateristicas próprias
class SkyController {
  constructor (){
    this.starFactory = new StarFactory();
    this.cloudFactory = new CloudFactory();
  }
  
  putStarsInSky(nStars, sky) {
    for (var i = 0; i < nStars; i++) {
      // solicita a fábrica que crie uma estrela e adiciona ela no céu         
      sky.addSkyElement(this.starFactory.create());
    }
  }

  putCloudsInSky(nClouds, sky) {
    for (var i = 0; i < nClouds; i++) {    
      // solicita a fábrica que crie uma nuvem e adiciona ela no céu
      sky.addSkyElement(this.cloudFactory.create());
    }
  }
  
  // verifica hora e altera estado do céu
  watchTheHour(sky) {
    let now = hour();
    if (now < 18) {
      sky.sunset();
    } else if (now < 18 && now > 6) {
      sky.sunrise();
    }
  }
}
