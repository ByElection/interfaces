class Celda extends Figura{
  constructor(x,y) {
    super(x,y);
    this.imagen = document.querySelector("#imagencelda");
    this.ficha=null;
  }
  dibujar(){
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
  }
  setficha(ficha){
    this.ficha=ficha;
  }
  hayficha(){
    if (this.ficha!=null) {
      return true;
    }else {
      return false;
    }
  }
  getcentro(){
    return {x:this.x+this.width/2,
            y:this.y+this.height/2};
  }
  getficha(){
    return this.ficha;
  }
}
