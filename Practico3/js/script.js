function countdown() {
  let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector("#countdown").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";
    if (distance < 0) {
      clearInterval(x);
      document.querySelector("#countdown").innerHTML = "Ya Estreno";
    }
  }, 1000);
}
window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  document.body.style.setProperty('--scroll',scroll);
}, false);

cargar("pagina","home");
function cargar(contenedor, contenido) {
  fetch("../html/cargando.html").then(response =>{
    response.text().then(text =>{
      document.querySelector("."+contenedor).innerHTML = text;
      if (contenido != "home") {
        document.querySelector(".contenido").classList.remove("hide");
        document.querySelector(".contenido").scrollIntoView(false);
      }
    }).then(function() {
      setTimeout(function() {
        fetch("../html/"+contenido+".html").then(response =>{
          response.text().then(text =>{
            if (contenido != "home"){
              document.querySelector(".contenido").scrollIntoView(false);
            }
            document.querySelector("."+contenedor).innerHTML = text;
            if (contenido === "home"){
              loadhome();
            }else {
              animaentrada();
              eventovolver();
            }
          });
        });
      },2000);
    });
  });
}
function animaentrada() {
  let contenido = document.querySelector(".contenido");
  contenido.classList.add("entrada");
  document.body.classList.add("denegarscroll");
  setTimeout(function() {
    contenido.classList.remove("entrada");
  },1000);
}
function animasalida() {
  let contenido = document.querySelector(".contenido");
  contenido.classList.add("salida");
  document.body.classList.remove("denegarscroll");
  setTimeout(function () {
    document.body.scrollIntoView(true);
    contenido.classList.remove("salida");
    document.querySelector(".contenido").classList.add("hide");
    document.querySelector(".contenido").innerHTML = "";
  }, 1000);
}
function eventovolver(){
  document.querySelector("#volver").addEventListener("click",function(event) {
    event.preventDefault();
    animasalida();
  });
}
function eventos() {
  document.querySelector("#conocerpersonajes").addEventListener("click",function() {
    cargar("contenido", "conocerpersonajes");
  });
  document.querySelector("#vereventos").addEventListener("click",function() {
    cargar("contenido", "vereventos");
  });
  document.querySelector("#spoiler").addEventListener("click",function() {
    cargar("contenido", "spoilerzone");
  });
  document.querySelector("#mensajegoku").addEventListener("click",function() {
    cargar("contenido", "mensajegoku");
  });
  document.querySelector("#revivirkrilin").addEventListener("click",function() {
    document.querySelector("#dialogo p").innerHTML = "Krillin ya resusito demaciado";
    recargardialogo();
  });
  document.querySelector("#crecer5cm").addEventListener("click",function() {
    document.querySelector("#dialogo p").innerHTML = "Ese deseo es muy facil de hacer";
    recargardialogo();
  });
  document.querySelector("#viajartiempo").addEventListener("click",function() {
    document.querySelector("#dialogo p").innerHTML = "Solo Supermo Kaiosama tiene permitido eso";
    recargardialogo();
  });
  document.querySelector("#inmortal").addEventListener("click",function() {
    document.querySelector("#dialogo p").innerHTML = "Ese deseo es muy facil de hacer";
    recargardialogo();
  });
  document.querySelector("#resscell").addEventListener("click",function() {
    document.querySelector("#dialogo p").innerHTML = "Ese deseo es muy facil de hacer";
    recargardialogo();
  });
}
function recargardialogo(){
  setTimeout(function() {
    document.querySelector("#dialogo p").innerHTML = "¿Cual es tu deseo?";
  },3000);
}
function loadhome() {
  countdown();
  eventos();
  setInterval(function() {
    document.querySelector("#rayos").classList.toggle("hide");
  },500);
}
