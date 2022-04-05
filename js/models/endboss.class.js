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

    GAMEOVER = [
        'img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png',
      
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.GAMEOVER);
        this.x = 2500;
        this.animate();
    }

    animate() {
        let i = 0;
     setInterval(() => {
     if(this.isDead()) {
         i++;
         if (i < 10) {
             this.playAnimation(this.IMAGES_DEAD);
            setTimeout(() => {
                document.getElementById('start-btn').classList.remove('d-none');
            }, 3000);
         }
         if (i > 10) {
             setInterval(() => {
                this.x = 2020;
                this.y = 0;
                 this.height = 500;
                 this.width = 820;
                 this.playAnimation(this.GAMEOVER);
                 
                }, 1000);
         }
     } else  {
         this.playAnimation(this.IMAGES_WALKING);
     }
    }, 1000 / 10); 
    
        if (i > 11) {
            document.getElementById('start-btn').classList.remove('d-none');
        }  
    }

}

// setInterval(() => {
//     if(this.isDead()) {
//         i++;
//         if (i < 10) {
//             this.playAnimation(this.IMAGES_DEAD);   
//         }
//         if (i > 10) {
//             setInterval(() => {
//                 this.x = 2020;
//                 this.y = 0;
//                 this.height = 500;
//                 this.width = 820;
//                 this.playAnimation(this.GAMEOVER);
//                 document.getElementById('start-btn').classList.remove('d-none');
//                }, 1000);
//         }
//     } else  {
//         this.playAnimation(this.IMAGES_WALKING);
//     }
// }, 1000 / 10); 