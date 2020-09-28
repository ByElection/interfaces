class Ficha extends Figura {
  constructor(x,y,jugador) {
    if (jugador==1) {
      super(x,y);
    }else if (jugador==2) {
      super(canvas.width-x,y);
    }
    this.xorigen=x;
    this.yorigen=y;
    this.usada=false;
    this.radio=20;
    this.imagen = document.querySelector("#imagenficha");
    this.jugador=jugador;
    this.dibujar();
  }
  dibujar(){
    this.ctx.beginPath();
    if (this.jugador == 1){
      this.ctx.fillStyle = "cyan";
    }else if (this.jugador==2) {
      this.ctx.fillStyle = "magenta";
    }
    this.ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.drawImage(this.imagen, this.x-this.radio, this.y-this.radio, this.width-this.radio/2, this.height-this.radio/2);
  }
  moverorigen(){
    this.x=this.xorigen;
    this.y=this.yorigen;
  }
  mover(x,y){
    if (!this.usada) {
      this.x=x;
      this.y=y;
    }
  }
  esta(x,y){
    return (x<this.x+this.radio && x>this.x-this.radio && y<this.y+this.radio && y>this.y-this.radio)
  }
  getposicion(){
    return {x:this.x,
            y:this.y};
  }
  setusada(){
    this.usada=true;
  }
  getjugador(){
    return this.jugador;
  }
}
