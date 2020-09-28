let tablero;
let jugadores;
let turno;
let ultimaficha;
juegonuevo();

function juegonuevo(){
  let filas = document.querySelector("#filas").value;
  let columnas = document.querySelector("#columnas").value;
  tablero = new Tablero(columnas,filas);
  jugadores = new Array(new Jugador(1,25),new Jugador(2,25));
  turno = 2;
  cambiaturno();
  actualizar();
}
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
  ctx.font = "30px Arial";
  if (turno==1) {
    ctx.fillStyle = "cyan";
    ctx.fillText("Turno de Jugador 1", canvas.width/2-130, 30);
  }else if(turno==2){
    ctx.fillStyle = "magenta";
    ctx.fillText("Turno de Jugador 2", canvas.width/2-130, 30);
  }
}

function actualizar() {
  borrarTodo();
  tablero.dibujar();
  for (let i = 0; i < jugadores.length; i++) {
    jugadores[i].dibujar();
  }
}
document.querySelector("#juegonuevo").addEventListener("click",juegonuevo);

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
    if (!tablero.setficha(ultimaficha)){
      ultimaficha.moverorigen();
    }
    if (tablero.hayganador(ultimaficha.getjugador())){
      let canvas = document.querySelector('#canvas');
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = "#7C7C7C";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "100px Arial";
      if (turno==2) {
        ctx.fillStyle = "cyan";
        ctx.fillText("Gano el Jugador 1", 0, canvas.height/2-100);
      }else if(turno==1){
        ctx.fillStyle = "magenta";
        ctx.fillText("Gano el Jugador 2", 0, canvas.height/2-100);
      }
    }else{
      actualizar();
    }
    ultimaficha=null;
  }
})


function cambiaturno() {
  if (turno==1) {
    turno=2;
  }else {
    turno=1;
  }
}
