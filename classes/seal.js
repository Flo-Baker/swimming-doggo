/* 1. creating the Seal class which needs the position (this.x/y/h/w), the speed on the 
X axis (because of the horizontal Movement), the img size and the img src
*/
class Seal {
  constructor(yPos) {
    this.x = canvas.width;
    this.y = yPos;
    this.height = 110;
    this.width = 60;
    this.speedX = 1.5;
    this.image = new Image();
    this.image.src = "../images/seal.png";
  }

  // 2. drawSeal () {}

  drawSeal = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  // 3. movement of seal

  sealMovement = () => {
    this.x -= this.speedX;
  };
}
