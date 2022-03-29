class TrowableObeject extends MovableObject{

    constructor(x, y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
            this.throw();
    }


    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
        this.bottles -= 20;
    }

}
