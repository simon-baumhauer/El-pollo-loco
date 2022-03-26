class DrawableObject{
    x = 120;
    y = 190;
    width = 150;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        } 
    }

    drawButton(ctx) {
            ctx.beginPath();
            ctx.rect(0, 0, 200, 200)
            ctx.fillStyle = 'blue';
            ctx.rect(25,72,32,32)
            ctx.closePath()
    }

}



