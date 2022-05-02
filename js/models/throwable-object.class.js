class TrowableObeject extends MovableObject {
  SPLASH_SAUCE = [
    "img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png",
    "img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png",
    "img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png",
    "img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png",
    "img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png",
    "img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png",
  ];

  constructor(x, y) {
    super().loadImage("img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png");
    this.loadImages(this.SPLASH_SAUCE);
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 100;
    this.throw();
  }

  /**
   * This function animates the the throw of a bottle
   */
  throw() {
    this.speedY = 30;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
