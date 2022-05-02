class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;

  /**
   * This function loades all background images 
   * 
   * @param {href} imagePath This parameter is the path for the backgroundimages
   * @param {number} x This paratmeter is the a variable to place the background images in the canvas
   */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.y = 480 - this.height;
    this.x = x;
  }
}
