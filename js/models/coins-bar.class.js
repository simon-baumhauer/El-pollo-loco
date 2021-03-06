class CoinsBar extends DrawableObject {
  IMAGES = [
    "img/7.Marcadores/Barra/Marcador moneda/azul/0_.png",
    "img/7.Marcadores/Barra/Marcador moneda/azul/20_.png",
    "img/7.Marcadores/Barra/Marcador moneda/azul/40_.png",
    "img/7.Marcadores/Barra/Marcador moneda/azul/60_.png",
    "img/7.Marcadores/Barra/Marcador moneda/azul/80_.png",
    "img/7.Marcadores/Barra/Marcador moneda/azul/100_.png",
  ];

  precentage = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercentage(0);
    this.x = 20;
    this.y = 50;
    this.width = 200;
    this.height = 60;
  }

  /**
   * This function deletes the coin on the canvas
   */
  delete() {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);
  }


  /**
   * This Function sets the coinsbar after the the amount fo coins left or picked up 
   * 
   * @param {variable} percentage This varilable shows how much of the bar should be displayed in the coinsbar
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * This funtion sets the perctenage to the amount of bottles
   * 
   * @returns the number tha will be displayed in the bar in terms of length
   */
  resolveImageIndex() {
    if (this.percentage >= 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
