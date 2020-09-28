class Jugador {
  constructor(jugador,cantfichas) {
    this.jugador=jugador;
    this.fichas=[];
    for (let i = 0; i < cantfichas; i++) {
        if (i%2==1) {
          this.fichas[i] = new Ficha(50,75+50*i/2,this.jugador);
        }else{
          this.fichas[i] = new Ficha(100,75+50*i/2,this.jugador);
        }
    }
  }
  dibujar(){
    for (let i = 0; i < this.fichas.length; i++) {
      this.fichas[i].dibujar();
    }
  }
  buscarFicha(x,y){
    for (let i = 0; i < this.fichas.length; i++) {
      if (this.fichas[i].esta(x,y)){
        return this.fichas[i];
      }
    }
  }
}
