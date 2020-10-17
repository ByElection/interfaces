function cargar(contenedor, contenido) {
  fetch("../html/cargando.html").then(response =>{
    response.text().then(text =>{
      document.querySelector("."+contenedor).innerHTML = text;
    }).then(function() {
      setTimeout(function() {
        fetch("../html/"+contenido+".html").then(response =>{
          response.text().then(text =>{
            document.querySelector("."+contenedor).innerHTML = text;
          });
        });
      },5000);
    });
  });
}
cargar("pagina","home");
