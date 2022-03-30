class Endboss extends MovableObject {
    height = 500;
    width = 300;
    y = -25;

    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/2.Atecion-ataque/1.Alerta/G12.png'

    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_giganton-Dona_Gallinota-/4.Muerte/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2500;
        this.animate();
    }

    animate() {
        setInterval(() => {
                if(this.isDead()) {
                    console.log('endboss is dead');
                    this.playAnimation(this.IMAGES_DEAD);
                } else if (this.energy > 1) {
                    this.playAnimation(this.IMAGES_WALKING);
                    console.log(this.energy)
                }
        }, 1000 / 10);

        
        
        // setInterval(() => {
        //     if(this.isDead()) {
        //         console.log('endboss is dead');
        //         this.playAnimation(this.IMAGES_DEAD);
        //     }
        //     }, 60);
    }


}