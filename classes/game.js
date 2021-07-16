/* 1. creating the Game class which includes the bg and 
the dog as main character, bg and dog as new obj and stick, seal as an array that will have a randomly appearance
*/

class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./images/ocean.png";
    this.dog = new Dog();
    this.minY = 80;
    this.maxY = 325;
    /*this.stick = new Stick();
    this.seal = new Seal();
    this.bigSeal = new BigSeal();*/
    this.sticksArray = [];
    this.sealsArray = [];
    this.bigSealsArray = [];
    this.isGameOn = true;    
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
    if (!this.sticksArray.length || this.sticksArray[this.sticksArray.length -1].x < canvas.width / 1.2) {
        let randomStickY = Math.floor(Math.random() * (canvas.height -120));
        let stick = new Stick (randomStickY);
        this.sticksArray.push(stick);
    };
}

// 3. creating the array of seals 

createSeals = () => {
    if (!this.sealsArray.length || this.sealsArray[this.sealsArray.length -1].x < canvas.width / 1.4) {
    let randomSealY = Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY);
    let seal = new Seal (randomSealY);
    this.sealsArray.push(seal);
    }
};


// creating the bigSeals
createBigSeals = () => {
    if (!this.bigSealsArray.length || this.bigSealsArray[this.bigSealsArray.length -1].x < canvas.width / 4) {
    //let randomBigSealY = Math.floor(Math.random())
    let bigSeal = new BigSeal //(randomBigSealY);
    this.bigSealsArray.push(bigSeal);
    }
}

// 4. game loop fct

  gameLoop = () => {
// 1. clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

/* 
2. movement of the elements 
=> elements: dog, sticks, seals
*/
    this.dog.dogWaterMovementDeepSea();

    this.createSticks();
    this.sticksArray.forEach(eachStick => {
        eachStick.stickMovement()
    });
    
    this.createSeals();
    this.sealsArray.forEach(eachSeal => {
        eachSeal.sealMovement()
    });

    this.createBigSeals();
    this.bigSealsArray.forEach(eachBigSeal => {
        eachBigSeal.bigSealMovement()
    });
    
//=> other things to consider: 
/*- here to implement the dogStickCollision to get the stickScore*/
    this.sticksArray.forEach((eachStick, index) => {
        if (this.dog.dogStickCollision(eachStick)) {
            // start counting by 0 and adding every collided stick to the score
            let previousScore = Number (stickScoreSpan.innerText);
            stickScoreSpan.innerText = previousScore +1;
            // removing the collided stick from the array => .splice and same for seals
            this.sticksArray.splice(index, 1);
        }
    })

// this collision is for the dogLife
    this.sealsArray.forEach((eachSeal, index) => {
        if (this.dog.dogSealCollision(eachSeal)) {
        // implementing the dogLife after the collision detection (starting by 3 until reached 0)
        let previousDogLife = Number (dogLifeSpan.innerText);
        dogLifeSpan.innerText = previousDogLife -1;
        this.sealsArray.splice (index, 1);
    }

        //to stop the game after the dogLifeSpan === 0 (means 3 collisions)
        if (Number (dogLifeSpan.innerText) === 0) {    
//game stop = remove canvas + show gameoverScreen
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreen.style.display = "flex";
        stickScore.style.display = "flex"; //change this to "none"
        finalScore.style.display = "flex"; //change this fo "flex"
        dogLife.style.display = "none";
        }
    });

// 1 collision between dog & bigSeal to end the game
    this.bigSealsArray.forEach((eachBigSeal, index) => {
        if (this.dog.dogBigSealCollision(eachBigSeal)) {
        this.bigSealsArray.splice (index, 1);
        this.isGameOn = false;
        canvas.style.display = "none";
        gameoverScreen.style.display = "flex";
        stickScore.style.display = "flex"; //change this to "none"
        finalScore.style.display = "flex"; //change this fo "flex"
        dogLife.style.display = "none";
        }
    });

/*
- removing canvas when game stopped
- appearance of gameoverScreen
*/  
   /* 3. using ctx & this. to draw the neccessary elements in the canvas 
    => bg img, dog, sticks, seals & score (sticks and seals)?
   */
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
     
    this.sealsArray.forEach(eachSeal => {
        eachSeal.drawSeal()
    });

    this.sticksArray.forEach(eachStick => {
        eachStick.drawStick()
    });
    
    this.bigSealsArray.forEach(eachBigSeal => {
        eachBigSeal.drawBigSeal()
    });

    this.dog.drawDog();

    // 4. request animation
    if (this.isGameOn) {
        requestAnimationFrame(this.gameLoop);
    };
  };
};