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
        dimensionarcontenido();
      }
    }).then(function() {
      setTimeout(function() {
        fetch("../html/"+contenido+".html").then(response =>{
          response.text().then(text =>{
            document.querySelector("."+contenedor).innerHTML = text;
            if (contenido === "home"){
              loadhome();
          });
        });
      },5000);
    });
  });
}
function eventos() {
  document.querySelector("#conocerpersonajes").addEventListener("click",function() {
    cargar("contenido", "conocerpersonajes");
  });
  document.querySelector("#vereventos").addEventListener("click",function() {
    cargar("contenido", "vereventos");
  });
  document.querySelector("#mensajegoku").addEventListener("click",function() {
    cargar("contenido", "mensajegoku");
  });
  document.querySelector("#revivirkrilin").addEventListener("click",function() {

  });
  document.querySelector("#crecer5cm").addEventListener("click",function() {

  });
  document.querySelector("#viajartiempo").addEventListener("click",function() {

  });
  document.querySelector("#inmortal").addEventListener("click",function() {

  });
  document.querySelector("#resscell").addEventListener("click",function() {

  });
}
function dimensionarcontenido() {
  let contenido = document.querySelector(".contenido");
  if (!contenido.classList.contains("dimensionescontenido")) {
    contenido.classList.add("dimensionescontenido");
  }
}
function loadhome() {
  countdown();
  eventos();
  setInterval(function() {
    if (document.querySelector("#rayos").style.display === "none") {
      document.querySelector("#rayos").style.display = "block";
    } else {
      document.querySelector("#rayos").style.display = "none";
    }
  },500);
}
