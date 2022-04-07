class World {
    character = new Character();
    level = level_1;
    ctx;
    canvas;
    keyboard;
    camera_x = -100;
    lost_sound = new Audio('audio/113988_311243-lq.mp3')
    statusBar = new StatusBar();
    coinsBar = new CoinsBar();
    bottlesBar = new BottlesBar();
    lostScreen = new LostScreen();
    throwableObjects = [];
    endboss = level_1.enemies.find( e => e instanceof Endboss) ;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

     run() {
         setInterval(() => {
            this.checkColisons();
            this.checkThrowObjects();
        }, 200);
     }

     checkThrowObjects() {
         if (this.keyboard.D && this.character.bottles > 0) {
             let bottle = new TrowableObeject(this.character.x, this.character.y);
             this.throwableObjects.push(bottle);
             this.character.bottles -= 20;
             this.bottlesBar.setPercentage(this.character.bottles);
         }
     }

     checkColisons() {
        this.level.enemies.forEach( (enemy) => {
            if (this.character.isColliding(enemy)) {
                 this.character.hit(5);
                 this.statusBar.setPercentage(this.character.energy);
            }
        });
        this.level.bottles.forEach( (bottle, index) => {
            if (this.character.isColliding(bottle)) {
                 this.character.chargeBottle(bottle);
                 this.bottlesBar.setPercentage(this.character.bottles);
                    this.level.bottles.splice(index, 1);
                         
            }
        });
        this.level.coins.forEach( (coins, index) => {
            if (this.character.isColliding(coins)) {
                 this.character.chargeCoins();
                 this.coinsBar.setPercentage(this.character.coins);
                 this.level.coins.splice(index, 1);
            }
        });
        this.throwableObjects.forEach( (bottle, index) => {
            if (this.endboss.isColliding(bottle)) {
                this.throwableObjects.splice(index, 1);
                this.endboss.hit(20);
            }
        });
     }

   

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
              }
             else if (this.character.isDead()) {
                this.keyboard = false;
                this.ctx.translate(-this.camera_x, 0);
                this.addToMap(this.lostScreen);
                this.ctx.translate(this.camera_x, 0);
                this.lost_sound.play();
             }
         this.ctx.translate(-this.camera_x, 0);
         let self = this;
         requestAnimationFrame(function() {
             self.draw();
         });
     }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

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

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    // lostScreen() {
    //     this.keyboard = false;
    //     return
    //     this.addToMap(this.lostScreen);  
        
    // }
}