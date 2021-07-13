/* 1. creating the Stick class which needs the position (this.x/y/h/w), the speed on the 
X axis, the img size and the img src
(x, y, height, weight, speed, image, image.src)
*/
class Stick {
  constructor(yPos) {
    this.x = canvas.width;
    this.y = yPos;
    this.height = 40;
    this.width = 100;
    this.speedX = 1.5;
    this.image = new Image();
    this.image.src = "./images/stick.png";
  }

  // 2. drawStick

  drawStick = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  // 3. movement of stick

  stickMovement = () => {
    this.x -= this.speedX;
  };
}
