

class Star {
    constructor(x, y, initialSize){
      this.x = x;
      this.y = y;    
      this.size = initialSize;    
    }
    
    shiny(){
       this.size = random(5, 10);      
    }  
    
    render(){
      noStroke();
      fill(256);
      ellipse(this.x, this.y, this.size, this.size)
    }
}
  