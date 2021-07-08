# SWIMMING DOGGO
Swimming Doggo is the game created for the first project at Ironhack
[GitHub](https://github.com/Flo-Baker/swimming-doggo)


## Description
SWIMMING DOGGO is a single page HTML-game based on JavaScript. After pressing the play button the player receives a dog as main character which is placed on the left side of the canvas. The canvas itself is the ocean and the dog has to catch the sticks and avoid the seals that appear randomised from the right side of the canvas. In case of three collisions with the seals the game will end. In the following the player will receive the message "Your dog is now a seal".

## MVP 
* dog will be moving vertically on the left side of the canvas
* sticks and seals will appear randomised horizontally from the right side of the canvas
* dog needs to catch sticks and avoid colliding with seals
* dog and sticks collide = sticks will disappear
* dog and seals collide 2 times = seals will disappear
* dog and seals collide 3 times = GAME OVER, screen changes from canvas to GAME OVER

## Backlog
* score of catched sticks when collided with the dog
* water current acting like opposite gravity to move the dog sometimes

## Data structure
### index.html
* implementing the stylesheet and js-classes
* creating the splashScreen, Canvas, gameoverScreen and (re)start button

### style.css
* defining the classes and ids from HTML

### main.js
#### declaring the global variables

#### Managing DOM elements
* splashScreen 
* gameScreen // canvas
* gameoverScreen

#### Event Listeners
* startButton (click)
* dogMovement (keyboard arrows up/down or left/right?!)
* restartButton (click)

### game.js
* class Game {}
* creatingSticks () {}
* creatingSeals () {}
* scoreOfSticks () {} (backlog feature?)
* stickAppearance () {}
* sealAppearance () {}
* gameLoop () {}
    1. clearing canvas = ctx.clearRect (x,y,w,h)

    2. movement of elements = dog, stick, seal
        * collisions (score, game stop)
        * game stop
        * removing canvas
        * gameover screen

    3. drawing elements
        * background = ctx.drawImage (x,y,w,h)
        * dog = ctx.drawDog or this.dog.drawDog ()
        * stick = ctx.drawStick or fct/method
        * seal = ctx.drawSeal or fct/method
        (stick and seal might be similiar!?)

    4. request animation
        

### dog.js
* class Dog {}
* drawDog () {}
* dogMovement () {}
* dogStickCollision () {}
* dogSealCollision () {}
// for both collisions have a look @ MDN collision 2D
* dogWaterGravity () {} (backlog feature)

### stick.js
* class Stick {}
* drawStick () {}


### seal.js
* class Seal {}
* drawSeal () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Task
Task definition in order of priority
* search for ocean bg img
* use placeholder img for dog, stick, seal

* main.js - DOM
* main.js - splashScreen
* main.js - gameScreen / canvas
* main.js - gameoverScreen
* main.js - startButton
* main.js - restartButton
* main.js - addEventListeners

* game.js - class Game
* game.js - gameLoop
* game.js - creatingSticks
* game.js - creatingSeals

* dog.js - class Dog
* dog.js - drawDog
* dog.js - dogMovementSpace
* dog.js - dogStickCollision

* stick.js - class Stick
* stick.js - drawStick
* stick.js - stickAppearance

* seal.js - class Seal
* seal.js - drawSeal
* seal.js - sealApperance

* replacing the placeholder imgs of dog, stick, seal

* dog.js - dogWaterGravity (backlog feature?)
* game.js - scoreOfSticks (backlog feature?)

* if there's still time for some "fun" put an img or gif of your swimming dog into the splashScreen

## Additional Links

### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)