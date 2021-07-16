// 1. create class BigSeal
class BigSeal {
    constructor() {
    this.height = 80;
    this.width = 130;
    this.x = canvas.width;
    this.y = this.height / 8;
    this.speedX = 2.5;
    this.image = new Image();
    this.image.src = "./images/bigSeal.png";
    };

// 2. draw BigSeal

drawBigSeal = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

// 3. movement of BigSeal

bigSealMovement = () => {
    this.x -= this.speedX;
  };
}