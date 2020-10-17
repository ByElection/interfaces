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
  document.querySelector("."+contenedor).innerHTML = fetch("../html/cargando.html").then(function() {
    setTimeout(function() {
      fetch("../html/"+contenido+".html").then(response =>{
        document.querySelector("."+contenedor).innerHTML = response.body;
        console.log(response);
        if (contenido === "home"){
          loadhome();
        }
      });
    },5000);
  });
}
function loadhome() {
  countdown();
  setInterval(function() {
    if (document.querySelector("#rayos").style.display === "none") {
      document.querySelector("#rayos").style.display = "block";
    } else {
      document.querySelector("#rayos").style.display = "none";
    }
  },500);
}
