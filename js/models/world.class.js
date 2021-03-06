class World {
  character = new Character();
  level = level_1;
  ctx;
  canvas;
  keyboard;
  camera_x = -100;
  lost_sound = new Audio("audio/113988_311243-lq.mp3");
  collect_sound = new Audio("audio/135936_2487914-lq.mp3");
  hit_sound = new Audio("audio/523769_6142149-lq.mp3");
  chicken_sound = new Audio("audio/316920_4921277-lq.mp3");
  chicken_hit = new Audio("audio/audio_chicken_hit.mp3");
  statusBar = new StatusBar();
  coinsBar = new CoinsBar();
  bottlesBar = new BottlesBar();
  lostScreen = new LostScreen();
  throwableObjects = [];
  endboss = level_1.enemies.find((e) => e instanceof Endboss);

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * this function set the world object as the same as the world object in the character object
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * This function checks continously collsions between objects
   */
  run() {
    setInterval(() => {
      this.checkColisons();
      this.checkThrowObjects();
    }, 200);
  }

  /**
   * This function get invokes under certaint conditons and create a new bottle object and removes one of the bottlebar
   */
  checkThrowObjects() {
    if (this.keyboard.D && this.character.bottles > 0) {
      let bottle = new TrowableObeject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
      this.character.bottles -= 20;
      this.bottlesBar.setPercentage(this.character.bottles);
    }
  }

  /**
   * This function checks collsion between certain objects
   */
  checkColisons() {
    this.character_enemy();
    this.character_bottle();
    this.character_coins();
    this.bottle_endboss();
  }
  /**
   * This fucntion checks collsions between the enemys objects and the character obejct
   */
  character_enemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(5);
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

  /**
   * This function checks collisons between character and bottle objects
   */
  character_bottle() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.character.chargeBottle(bottle);
        this.bottlesBar.setPercentage(this.character.bottles);
        this.level.bottles.splice(index, 1);
        this.collect_sound.play();
      }
    });
  }

  /**
   *
   * This function checks collsions between character between and coins
   */
  character_coins() {
    this.level.coins.forEach((coins, index) => {
      if (this.character.isColliding(coins)) {
        this.character.chargeCoins();
        this.coinsBar.setPercentage(this.character.coins);
        this.level.coins.splice(index, 1);
      }
    });
  }

  /**
   * This function checks collsions between bottle objects and the endboss object
   */
  bottle_endboss() {
    this.throwableObjects.forEach((bottle, index) => {
      if (this.endboss.isColliding(bottle)) {
        this.throwableObjects.splice(index, 1);
        this.endboss.hit(20);
        this.chicken_hit.play();
      }
    });
  }

  /**
   * This function draws all the object on the canvas
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectToMap(this.level.backgroundObjects);
    this.addObjectToMap(this.level.clouds);

    // --- Fixed Object ---
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.coinsBar);
    this.addToMap(this.bottlesBar);
    this.ctx.translate(this.camera_x, 0);

    this.addToMap(this.character);
    this.addObjectToMap(this.level.coins);
    this.addObjectToMap(this.level.bottles);
    this.addObjectToMap(this.level.enemies);
    this.addObjectToMap(this.throwableObjects);
    if (this.endboss.energy === 0) {
      this.keyboard = false;
      this.character.myMusic.pause();
    } else if (this.character.isDead()) {
      this.lostAnimations();
    }
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * This fucntion adds object to the canvas
   *
   * @param {variable} objects This variable stands for objects
   */
  addObjectToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * This function add movableObjects to the canvas
   *
   * @param {variable} mo this variable stands for movalbe object
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * This function turn the Images(object) if one direction
   *
   * @param {varialbe} mo This variable stands for movableObjects
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * This image remes the conditons set of the flipImage function
   *
   * @param {variable} mo This variable stands for movableObjects
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  /**
   * This function disables the keyboad and displays a Screeen that shows the gamer tha the game is lost
   */
  lostAnimations() {
    this.keyboard = false;
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.lostScreen);
    this.ctx.translate(this.camera_x, 0);
    let start_btn = document.getElementById("start-btn");
    start_btn.classList.remove("d-none");
  }
}
