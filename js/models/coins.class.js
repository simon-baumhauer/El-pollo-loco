class Coins extends DrawableObject{

    height = 90;
    width = 75;
    y = 350;

  constructor() {
    super().loadImage('img/8.Coin/Moneda1.png');
    this.x = 550 + Math.random() * 1000;
  }
}

