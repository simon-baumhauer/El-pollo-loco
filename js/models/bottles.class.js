class Bottles extends DrawableObject{

    height = 90;
    width = 75;
    y = 350;

  constructor() {
    super().loadImage('img/6.botella/1.Marcador.png');
    this.x = 550 + Math.random() * 1000;
  }
}