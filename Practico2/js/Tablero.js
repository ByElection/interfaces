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
        this.matriz[x][y]=new Celda(posicion+50*x,100+50*y);
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
            return true;
          }
        }
      }
    }
    return false;
  }
  hayganador(jugador){
    for (let x = 0; x < this.matriz.length; x++) {
      for (let y = this.matriz[x].length-1; y >= 0 ; y--) {
        if (this.matriz[x][y].getficha()!=null && this.matriz[x][y].getficha().getjugador()==jugador){
          if (x<this.matriz.length-3 && this.matriz[x+1][y].getficha()!=null && this.matriz[x+2][y].getficha()!=null && this.matriz[x+3][y].getficha()!=null && this.matriz[x+1][y].getficha().getjugador()==jugador && this.matriz[x+2][y].getficha().getjugador()==jugador && this.matriz[x+3][y].getficha().getjugador()==jugador) {//busca a la derecha
            return true;
          }else if (y>2 && this.matriz[x][y-1].getficha()!=null && this.matriz[x][y-2].getficha()!=null && this.matriz[x][y-3].getficha()!=null && this.matriz[x][y-1].getficha().getjugador()==jugador && this.matriz[x][y-2].getficha().getjugador()==jugador && this.matriz[x][y-3].getficha().getjugador()==jugador) {//busca para arriba
            return true;
          }else if (x>2 && y>2 && this.matriz[x-1][y-1].getficha()!=null && this.matriz[x-2][y-2].getficha()!=null && this.matriz[x-3][y-3].getficha()!=null && this.matriz[x-1][y-1].getficha().getjugador()==jugador && this.matriz[x-2][y-2].getficha().getjugador()==jugador && this.matriz[x-3][y-3].getficha().getjugador()==jugador) {//busca para arriba-izquierda
            return true;
          }else if (x<this.matriz.length-3 && y>2 && this.matriz[x+1][y-1].getficha()!=null && this.matriz[x+2][y-2].getficha()!=null && this.matriz[x+3][y-3].getficha()!=null && this.matriz[x+1][y-1].getficha().getjugador()==jugador && this.matriz[x+2][y-2].getficha().getjugador()==jugador && this.matriz[x+3][y-3].getficha().getjugador()==jugador) {//busca para arriba-derecha
            return true;
          }
        }
      }
    }
    return false;
  }
}
