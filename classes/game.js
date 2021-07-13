/* 1. creating the Game class which includes the bg and 
the dog as main character, bg and dog as new obj and stick, seal as an array that will have a randomly appearance
*/

class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "../images/ocean.png";
    this.dog = new Dog();
    this.stick = new Stick();
    this.seal = new Seal();
    this.sticksArray = [];
    this.sealsArray = [];
    this.isGameOn = true;
    //? this.sound = ;
  }

/* 2. creating the array of sticks = "createSticks" for the automatic and random appearance on the canvas
=> first stick has to appear when canvas is empty of sticks = "empty array of sticks" and has to be added to the sticksArray
- there should be more than 2 or 3 sticks in the canvas at the same time 
=> means if first stick reached 1/2, 1/3 or 1/4 of the canvas.width (start with 1/2, if too slow give 1/3 or 1/4 a try!)
=> appearence needs to be randomly in the height
=> when createSticks is written before createSeals, the first stick should appear before the first seal appears
*/
// sticks
createSticks = () => {
    if (!this.sticksArray.length || this.sticksArray[this.sticksArray.length -1].x < canvas.width / 2) {
        let randomStickY = Math.floor(Math.random() * canvas.height / 2);
        let stick = new Stick (randomStickY);
        this.sticksArray.push(stick);
    };
}

/* 3. creating the array of seals for sealAppearance
=> there should be more than 2 or 3 seals in the canvas at the same time
=> next should start when the previous one has arrived at 1/4 of the canvas
=> appearence definitely needs to be randomly in the height
=> to make the game more difficult for the player the seals should be bigger and appear faster/more often?
*/

// seals
createSeals = () => {
    if (!this.sealsArray.length || this.sealsArray[this.sealsArray.length -1].x < canvas.width / 2) {
    let randomSealY = Math.floor(Math.random() * canvas.height / 2)
    let seal = new Seal (randomSealY);
    this.sealsArray.push(seal);
    }
};
// 4. game loop fct

  gameLoop = () => {
// 1. clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

/* 
2. movement of the elements 
=> elements: dog, sticks, seals
*/
    //dogWaterGravity ();
    this.createSticks();
    this.sticksArray.forEach(eachStick => {
        eachStick.stickMovement()
    });
    
    this.createSeals();
    this.sealsArray.forEach(eachSeal => {
        eachSeal.sealMovement()
    });
    
//=> other things to consider: 
/*- here to implement the stickScore function for collision detection of dog & sticks?
    this.sticksArray.forEach(eachStick => {
        if (this.dog.dogStickCollision(eachStick)) {
            stickScore.style.display = "flex"
        }
    })
*/
// this collision is for the stop of the game (currently if dog collides with a seal 1x)
    this.sealsArray.forEach(eachSeal => {
        if (this.dog.dogSealCollision(eachSeal)) {
        // if this.dog.dogSealCollision (eachSeal) happens 3x -> this.isGameOn = false     
//game stop = remove canvas + show gameoverScreen
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreen.style.display = "flex";
        stickScore.style.display = "flex";
        }
    });

/*
- removing canvas when game stopped
- appearance of gameoverScreen
*/  
   /* 3. using ctx & this. to draw the neccessary elements in the canvas 
    => bg img, dog, sticks, seals
    => neccessary to draw the score?
    */
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    this.sticksArray.forEach(eachStick => {
        eachStick.drawStick()
    });
    
    this.seal.drawSeal();

    this.sealsArray.forEach(eachSeal => {
        eachSeal.drawSeal()
    });

    this.dog.drawDog();

    // 4. request animation
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop);
    };
  };
};