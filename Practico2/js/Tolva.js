class Tolva extends Figura{
  constructor(x) {
    super(x,50);
    this.imagen = document.querySelector("#imagentolva");
  }
  dibujar(){
    this.ctx.rect(this.x,this.y,this.width,this.height);
    this.ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
  }
  esta(x,y){
    return (x<=this.x+this.width && x>this.x && y<=this.y+this.height && y>this.y)
  }
}
