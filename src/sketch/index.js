function getRandom(min, max) {  
  return Math.random() * (max - min) + min;
}

export default function sketch(canva) {
  canva.setup = () => {
    canva.createCanvas(640, 560);
    canva.background(220);
  };

  canva.draw = () => {
  
  };
}
