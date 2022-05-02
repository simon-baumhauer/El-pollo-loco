class DrawableObject {
  x = 120;
  y = 190;
  width = 150;
  height = 250;
  img;
  imageCache = {};
  currentImage = 0;

  /**
   * This funtion creates a images object
   * 
   * @param {variable} path This parameter is the path of the image
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * This function places the images(objects) on the canvas
   * 
   * @param {canvas} ctx This paratmer is the canvas object
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * This function creates an image(object) for each element of the array 
   * 
   * @param {array} arr This array is for all the images that should be loaded
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * This function draws the images on the canvas and deletes the old ones
   * 
   * @param {varialbe} ctx This variable stand of the canvas object
   */
  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss ||
      this instanceof TrowableObeject
    ) {
      ctx.beginPath();
      ctx.strokeStyle = "transparent";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
