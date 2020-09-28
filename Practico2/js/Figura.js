class Figura {
  constructor(x,y) {
    this.canvas = document.querySelector('#canvas');
    this.ctx = canvas.getContext('2d');
    this.width = 50;
    this.height = 50;
    this.x = x;
    this.y = y;
  }
}
