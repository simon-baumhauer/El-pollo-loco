class World {
    character = new Character();
    level = level_1;
    ctx;
    canvas;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    throwableObjects = [];
    startScreen = new StartScreen();

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
         if (this.keyboard.D) {
             let bottle = new TrowableObeject(this.character.x, this.character.y);
             this.throwableObjects.push(bottle);
         }
     }

     checkColisons() {
        this.level.enemies.forEach( (enemy) => {
            if (this.character.isColliding(enemy)) {
                 this.character.hit();
                 this.statusBar.setPercentage(this.character.energy);
            }
        });
     }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.backgroundObjects);
        
        // --- Fixed Object --- 
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
      

        this.addToMap(this.character);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.startScreen);
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

}