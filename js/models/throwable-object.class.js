class TrowableObeject extends MovableObject{

    constructor() {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = 100;
        this.y = 100;
        this.height = 100;
        this.width = 100;
        this.throw(110, 140);
    }

    throw(x, y,) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }

}