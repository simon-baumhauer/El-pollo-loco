class Character extends MovableObject {
  world;
  y = 0;
  speed = 10;
  bottles = 0;
  coins = 0;
  lost = false;

  walking_sound = new Audio("audio/cartoon_footsteps_walking_fast_jogging.mp3");

  hurt_sound = new Audio("audio/44428_468340-lq.mp3");
  myMusic = new Audio("audio/background_sound.mp3");

  IMAGES_WALKING = [
    "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-22.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-23.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-24.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-25.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-26.png",
  ];
  IMAGES_JUMPING = [
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-31.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-32.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-33.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-34.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-35.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-36.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-37.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-38.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/3.Secuencia_salto/J-39.png",
  ];

  IMAGES_DEAD = [
    "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-51.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-52.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-53.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-54.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-55.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-56.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/5.Muerte/D-57.png",
  ];

  IMAGES_HURT = [
    "img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-41.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-42.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/4.Herido/H-43.png",
  ];

  IMAGES_STADING = [
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-1.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-2.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-3.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-4.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-5.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-6.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-7.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-8.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-9.png",
    "img/2.Secuencias_Personaje-Pepe-correccion/1.IDLE/IDLE/I-10.png",
  ];

  constructor() {
    super().loadImage(
      "img/2.Secuencias_Personaje-Pepe-correccion/2.Secuencia_caminata/W-21.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_STADING);
    this.applyGravity();
    this.animate();
  }

  /**
   * This function has several build in animations of the character and conditions that invoke other animations
   */
  animate() {
    this.myMusic.volume = 0.1;
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        if (!this.isAboveGround()) {
          this.walking_sound.play();
        }
        this.otherDirection = true;
      }
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        if (!this.isAboveGround()) {
          this.walking_sound.play();
        }
        this.otherDirection = false;
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.speedY = 30;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);
    setInterval(() => {
      if (this.isDead()) {
        this.deadAnimaton();
      } else if (this.isHurt()) {
        this.hurtAnimation();
      } else if (this.isAboveGround()) {
        this.jumpAnimation();
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.walkingAnimation();
      }
    }, 60);
    setInterval(() => {
      if (this.isOnGround()) {
        this.standingAnimation();
      }
    }, 500);
  }

  /**
   * This function animates the character to be dead
   */
  deadAnimaton() {
    this.playAnimation(this.IMAGES_DEAD);
    this.walking_sound.pause();
    this.walking_sound.volume = 0.1;
    this.myMusic.pause();
    this.hurt_sound.pause();
  }

  /**
   * This functions animates the character to be hurt
   */
  hurtAnimation() {
    this.playAnimation(this.IMAGES_HURT);
    this.hurt_sound.play();
    this.hurt_sound.volume = 0.1;
  }

  /**
   * This functions animates the character to jump
   */
  jumpAnimation() {
    this.playAnimation(this.IMAGES_JUMPING);
  }

  /**
   * This functions animates the character while walking
   */
  walkingAnimation() {
    this.playAnimation(this.IMAGES_WALKING);
  }

  /**
   * This character animates the character while standing
   */
  standingAnimation() {
    this.playAnimation(this.IMAGES_STADING);
  }
}
