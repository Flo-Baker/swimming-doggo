/* 1. creating the Dog class which needs the position (this.x/y/h/w), starting position has to be in the middle of 
the Y-Axis(height/2), speed on the Y axis (because of the vertical dogMovement), the img size and the img src
*/
class Dog {
  constructor() {
    this.height = 80;
    this.width = 80;
    this.x = 0;
    this.y = canvas.height / 2 - this.height / 2;
    this.speedY = 1;
    this.image = new Image();
    this.image.src = "./images/dog.png";
  }

// FUNCTIONS THAT ARE NEEDED FOR THE DOG

// drawDog () {}

drawDog = () => {
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
};

// dogMovement () {} 
// depending on which key arrow is pressed: up = +height at Y-Axis / down = -height at Y-Axis => both starting from canvas.height / 2
// do I need to work with two functions (movementUp and movementDown)?
// two eventListeners listening two those two functions?

dogMovementDown = () => {
    this.y += 20
}

dogMovementUp = () => {
    this.y -= 20
}

/* -------------
BONUS: dogWaterMovement () {} 
// if dog > this.height => gets pushed to the beach by gravity where more seals are waiting
// if dog < this.height => gets pulled into to sea by the ocean flow
*/
/*dogWaterMovementBeach = () => {
  if (this.height + this.y > canvas.height / 2) { 
    this.y++
    }
  }
dogWaterMovementDeepSea = () => {
  if (this.height + this.y < canvas.height / 2) {
    this.y--
  }
}
*/

/*dogWaterMovementDeepSea = () => {
  if (this.y < this.y + this.height) {
    this.y--
  }
}
*/

// collision -> MDN collision 2d

// dogSealCollision () {}
dogSealCollision = (seal) => {
  if (this.x < seal.x + seal.width && 
    this.x + this.width > seal.x && 
    this.y < seal.y + seal.height &&
    this.y + this.height > seal.y) {
     // collision detected!
     return true
  } 
}
/*
// dogStickCollision () {} for the score => just counting the collisions for the score at canvas and gameoverScreen
*/
dogStickCollision = (stick) => {
  if (this.x < stick.x + stick.width &&
    this.x + this.width > stick.x &&
    this.y < stick.y + stick.height &&
    this.y + this.height > stick.y) {
      // collision detected!
      return true;
    }
  }
};