
// Classe que representa uma estrela
class Star extends SkyElement {
    constructor(x, y, initialSize){
      super(x, y, () => this.shiny());    
      this.size = initialSize;    
    }
    // Sobrescrita do método move
    move(){
      this._shiny();
    }

    _shiny(){
       this.size = random(2, 5);      
    }  
    
    // Sobrescrita do método move
    render(){
      noStroke();
      fill(256);
      ellipse(this.x, this.y, this.size, this.size)
    }
}
  