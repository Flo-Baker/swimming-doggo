// DECLARING THE GLOBAL VARIABLES IN MAIN.JS

// 1. CANVAS
let canvas = document.querySelector("#game-canvas");

// 2. DRAWING TOOL "CTX"
let ctx = canvas.getContext("2d");

// 3. DOM ELEMENTS
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startButton = document.querySelector("#start-button");
let restartButton = document.querySelector("#restart-button");

let gameObj;

// ADDING THE EVENT LISTENERS

/* 1.
=> click at startButton
- needs to listen to the click at start button to start game
- when click-event happened the splashScreen needs to disappear and the canvas should show up
=> start button means for the eventListener to create the game ( = new Game) - it's properties and methods 
are in the Game class and need to be "called" -> game loop (appearance of elements, movements etc.) needs to be invoked
*/
startButton.addEventListener("click", () => {
    //startButton.style.backgroundColor = "green"; 
    splashScreen.style.display = "none"; 
    canvas.style.display = "block", "center";

    gameObj = new Game ();

    gameObj.gameLoop ();

});

/* 2.
=> pressing the keys for dogMovement 
=> regarding to the list of DOM events "keydown" will be the right event to listen to?
- needs to listen to the press on the keyboard arrows (left/right or up/down)
-> so there needs to be 2 eventlisteners for each key?
- those control the movement of the dog in order to catch sticks and avoid seals

if arrow up is pressed dogMovement = + 20
if arrow down is pressed dogMovement = -20

*/

// just the basic movement / there needs to be another condition in form of a little "collision" if the max and min at the y-axis is reached
window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp" && gameObj.dog.y > 0) { // means: if the dogs top is > 0 (top of canvas)
        gameObj.dog.dogMovementUp();
    } else if (event.code === "ArrowDown" && gameObj.dog.y + gameObj.dog.height < canvas.height) // means: if the dogs bottom is < canvas.height (bottom of canvas)
        gameObj.dog.dogMovementDown();
})

/* 3. click at restartButton
 - needs to listen to the click at restart button when game was over
 - when click-event happened the gameoverScreen needs to disappear 
 - canvas has to show up again to start a new Game and the game loop (appearance of elements, movements etc.) needs to restart
*/

restartButton.addEventListener("click", () => {
    gameoverScreen.style.display = "none";
    canvas.style.display = "block";
    gameObj = new Game ();
    gameObj.gameLoop ()
})