class Cloud extends MovableObject {

    y = 2;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = 200 + Math.random() * 500;

    }


}