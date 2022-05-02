class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  gameover = 0;

/**
 * This function applies gravity to object that are above ground (Y = 0)
 */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * This function differentiates between TrowableObeject and other object aboveground for example the character
   * 
   * @returns the return statement returns a boolean
   */
  isAboveGround() {
    if (this instanceof TrowableObeject) {
      return true;
    } else {
      return this.y < 180;
    }
  }

  /**
   * This function stores the value of the y axis on the ground
   * 
   * @returns returns y axis of the ground
   */
  isOnGround() {
    return this.y > 190;
  }

  /**
   * This function stores the values that indicate collisons between objects
   * 
   * @param {variable} mo 
   * @returns returns the values of indicatios for collsions between objects
   */
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  /**
   * This function substracts energy of the character and invokes an other function 
   * 
   * @param {vaialbe} number This varialbe stores the amount of energy that will be take of the character if the functions gets invoked
   */
  hit(number) {
    this.energy -= number;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * This function adds one coins in terms of percatange the coins variable
   */
  chargeCoins() {
    this.coins += 20;
  }

  /**
   * This function adds one bottle in terms of percatange the bottles variable
   */
  chargeBottle() {
    this.bottles += 20;
  }

  /**
   * this function set the condition and timing for an animations before the dying animation
   * 
   * @returns returns the passed time
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  /**
   * This function stores the conditons of a dead character
   * 
   * @returns This return returns the value of 0 energery
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * This function runs the animatons of characters(objects)
   * 
   * @param {array} images This array stores images for the animation
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * This function moves an object to the right
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * This function moves an object to the left
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * This functions determinens the how fast the jump animations should rund
   * 
   * @returns return the value of which the speed animation should be run on the canvas
   */
  jump() {
    return (this.speedY = 30);
  }
}
