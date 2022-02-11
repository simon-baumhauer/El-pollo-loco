class BackgroundObject extends MovableObject {

    width = 720;
    height = 250;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}