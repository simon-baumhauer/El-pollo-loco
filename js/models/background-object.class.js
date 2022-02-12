class BackgroundObject extends MovableObject {

    width = 720;
    height = 250;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }
}