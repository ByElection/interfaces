"use strict"
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let imagen;
let imageScaledWidth;
let imageScaledHeight;

function borrarTodo(){
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  imagen=null;
}

function cargarImagen(){
  let input = document.querySelector('#imagenacargar');
  input.click();
  input.onchange = imagenacargar => {
    borrarTodo();
    let imagencargada = imagenacargar.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imagencargada);
    reader.onload = readerEvent => {
      let content = readerEvent.target.result;
      imagen = new Image();
      //image.crossOrigin = 'Anonymous';
      imagen.src = content;
      imagen.onload = function () {
        let imageAspectRatio = (1.0 * this.height) / this.width;
        imageScaledWidth = canvas.width;
        imageScaledHeight = canvas.width * imageAspectRatio;
        ctx.drawImage(this, 0, 0, imageScaledWidth, imageScaledHeight);
      }
    }
  }
}

function original(){
  ctx.drawImage(imagen, 0, 0, imageScaledWidth, imageScaledHeight);
}

function escalaGrises() {
  ctx.drawImage(imagen, 0, 0, imageScaledWidth, imageScaledHeight);
  let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
  for (var x = 0; x < imageData.width; x++) {
    for (var y = 0; y < imageData.height; y++) {
      let gris = (getR(imageData,x,y)+getG(imageData,x,y)+getB(imageData,x,y))/3;
      setR(imageData,x,y,gris);
      setG(imageData,x,y,gris);
      setB(imageData,x,y,gris);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function negativo() {
  ctx.drawImage(imagen, 0, 0, imageScaledWidth, imageScaledHeight);
  let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
  for (var x = 0; x < imageData.width; x++) {
    for (var y = 0; y < imageData.height; y++) {
      setR(imageData,x,y,255-getR(imageData,x,y));
      setG(imageData,x,y,255-getG(imageData,x,y));
      setB(imageData,x,y,255-getB(imageData,x,y));
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function sepia() {
  ctx.drawImage(imagen, 0, 0, imageScaledWidth, imageScaledHeight);
  let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
  for (var x = 0; x < imageData.width; x++) {
    for (var y = 0; y < imageData.height; y++) {
      setR(imageData,x,y,(getR(imageData,x,y)*.393+getG(imageData,x,y)*.769+getB(imageData,x,y)*.189));
      setG(imageData,x,y,(getR(imageData,x,y)*.349+getG(imageData,x,y)*.686+getB(imageData,x,y)*.168));
      setB(imageData,x,y,(getR(imageData,x,y)*.272+getG(imageData,x,y)*.534+getB(imageData,x,y)*.131));
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function brillo() {
  let brillo = document.querySelector('#brillo').value;
  ctx.drawImage(imagen, 0, 0, imageScaledWidth, imageScaledHeight);
  let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
  for (var x = 0; x < imageData.width; x++) {
    for (var y = 0; y < imageData.height; y++) {
      setR(imageData,x,y,(getR(imageData,x,y)*brillo));
      setG(imageData,x,y,(getG(imageData,x,y)*brillo));
      setB(imageData,x,y,(getB(imageData,x,y)*brillo));
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function blur() {//BLUR 3x3
  ctx.drawImage(imagen, 0, 0, imageScaledWidth, imageScaledHeight);
  let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
  for (let x = 1; x < imageData.width-1; x++) {
    for (let y = 1; y < imageData.height-1; y++) {
      setR(imageData,x,y,(getR(imageData,x-1,y-1)+getR(imageData,x-1,y)+getR(imageData,x-1,y+1)+getR(imageData,x,y-1)+getR(imageData,x+1,y-1)+getR(imageData,x,y)+getR(imageData,x+1,y+1)+getR(imageData,x+1,y)+getR(imageData,x,y+1))/9);
      setG(imageData,x,y,(getG(imageData,x-1,y-1)+getG(imageData,x-1,y)+getG(imageData,x-1,y+1)+getG(imageData,x,y-1)+getG(imageData,x+1,y-1)+getG(imageData,x,y)+getG(imageData,x+1,y+1)+getG(imageData,x+1,y)+getG(imageData,x,y+1))/9);
      setB(imageData,x,y,(getB(imageData,x-1,y-1)+getB(imageData,x-1,y)+getB(imageData,x-1,y+1)+getB(imageData,x,y-1)+getB(imageData,x+1,y-1)+getB(imageData,x,y)+getB(imageData,x+1,y+1)+getB(imageData,x+1,y)+getB(imageData,x,y+1))/9);
    }
  }
}

function getR (imageData,x,y){
  let index = (x+y*imageData.width)*4;
  return imageData.data[index];
}

function getG (imageData,x,y){
  let index = (x+y*imageData.width)*4;
  return imageData.data[index+1];
}

function getB (imageData,x,y){
  let index = (x+y*imageData.width)*4;
  return imageData.data[index+2];
}

function setR (imageData,x,y,value){
  let index = (x+y*imageData.width)*4;
  imageData.data[index]=value;
}

function setG (imageData,x,y,value){
  let index = (x+y*imageData.width)*4;
  imageData.data[index+1]=value;
}

function setB (imageData,x,y,value){
  let index = (x+y*imageData.width)*4;
  imageData.data[index+2]=value;
}



window.onload= eventos();
function eventos() {
  document.querySelector('#brillo').addEventListener("change",brillo);
  document.querySelector('#original').addEventListener("click",original);
  document.querySelector('#cargarimagen').addEventListener("click",cargarImagen);
  document.querySelector('#escalagrises').addEventListener("click",escalaGrises);
  document.querySelector('#negativo').addEventListener("click",negativo);
  document.querySelector('#sepia').addEventListener("click",sepia);
  document.querySelector('#borrartodo').addEventListener("click",borrarTodo);
  document.querySelector('#blur').addEventListener("click",blur);
}
