class Tablero {
  constructor(col,fil) {
    this.col=col;
    this.fil=fil;
    this.matriz=[];
    this.tolvas=[];
    let posicion = (canvas.width-50*col)/2;
    for (let x = 0; x < col; x++) {
      this.matriz[x]=[];
      this.tolvas[x]=new Tolva(posicion+50*x);
      for (let y = 0; y < fil; y++) {
        this.matriz[x][y]=new Celda(posicion+50*x,50+50*y);
      }
    }
  }
  dibujar(){
    for (let x = 0; x < this.matriz.length; x++) {
      this.tolvas[x].dibujar();
      for (let y = 0; y < this.matriz[x].length; y++) {
        this.matriz[x][y].dibujar();
      }
    }
  }
  setficha(ficha){
    let posicion=ficha.getposicion();
    for (let x = 0; x < this.tolvas.length; x++) {
      if (this.tolvas[x].esta(posicion.x,posicion.y)) {
        for (let y = this.matriz[x].length-1; y >= 0 ; y--) {
          if (ficha!=null && !this.matriz[x][y].hayficha()){
            let centro = this.matriz[x][y].getcentro();
            ficha.mover(centro.x,centro.y);
            ficha.setusada();
            this.matriz[x][y].setficha(ficha);
            ficha=null;
            cambiaturno();
          }
        }
      }
    }
  }
}
