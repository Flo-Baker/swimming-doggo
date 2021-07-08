// DECLARING THE GLOBAL VARIABLES IN MAIN.JS

// 1. CANVAS
let canvas = document.querySelector("game-canvas");

// 2. DRAWING TOOL "CTX"
let ctx = canvas.getContext("2d");

// 3. DOM ELEMENTS
let splashScreen = document.querySelector("splash-screen");
let gameoverScreen = document.querySelector("gameover-screen");
let startButton = document.querySelector("start-button");
let restartButton = document.querySelector("restart-button");

let game;

// ADDING THE EVENT LISTENERS

/* 1.
=> click at startButton
- needs to listen to the click at start button to start game
- when click-event happened the splashScreen needs to disappear and the canvas should show up
*/

/* 2.
=> pressing the keys for dogMovement
- needs to listen to the press on the keyboard arrows (left/right or up/down)
-> so there needs to be 2 eventlisteners for each key?
- those control the movement of the dog in order to catch sticks and avoid seals
*/

/* 3. click at restartButton
 - needs to listen to the click at restart button when game was over
 - when click-event happened the gameoverScreen needs to disappear and the canvas has to show up again
 */