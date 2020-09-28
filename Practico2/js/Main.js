let tablero = new Tablero(10,10);
let jugadores = new Array(new Jugador(1,20),new Jugador(2,20));
actualizar();
let turno;
let ultimaficha;
cambiaturno();

function borrarTodo(){
  let canvas = document.querySelector('#canvas');
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = "#7C7C7C";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "cyan";
  ctx.font = "30px Arial";
  ctx.fillText("Jugador 1", 10, 30);
  ctx.fillStyle = "magenta";
  ctx.font = "30px Arial";
  ctx.fillText("Jugador 2", canvas.width-150, 30);
}

function actualizar() {
  borrarTodo();
  tablero.dibujar();
  for (let i = 0; i < jugadores.length; i++) {
    jugadores[i].dibujar();
  }
}

canvas.addEventListener("mousedown",function(e) {
  ultimaficha=jugadores[turno-1].buscarFicha(e.layerX,e.layerY);
});

canvas.addEventListener("mousemove",moverfichitas);
function moverfichitas(e) {
  if (ultimaficha != null){
    ultimaficha.mover(e.layerX,e.layerY);
    actualizar();
  }
}
canvas.addEventListener("mouseup",function() {
  if (ultimaficha!=null) {
    tablero.setficha(ultimaficha);
    ultimaficha=null;
    actualizar();
  }
})


function cambiaturno() {
  if (turno==1) {
    turno=2;
  }else {
    turno=1;
  }
}
