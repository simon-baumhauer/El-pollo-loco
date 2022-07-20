let canvas;
let world;
let keyboard = new Keyboard();
let space = "Space";
background_sound = new Audio("audio/background_sound.mp3");

/**
 * This function insert the world object into the canvas object
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * This function extends the screen fullsize of the screen
 */
function fullscreen() {
  canvas.requestFullscreen();
}

/**
 * This function plays the background music
 */

function playBackgroundMusic() {
  this.background_sound.play();
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode === 37) {
    keyboard.LEFT = true;
  }
  if (event.keyCode === 38) {
    keyboard.UP = true;
  }
  if (event.keyCode === 40) {
    keyboard.DOWN = true;
  }
  if (event.keyCode === 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode === 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode === 39) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode === 37) {
    keyboard.LEFT = false;
  }
  if (event.keyCode === 38) {
    keyboard.UP = false;
  }
  if (event.keyCode === 40) {
    keyboard.DOWN = false;
  }
  if (event.keyCode === 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode === 68) {
    keyboard.D = false;
  }
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

/**
 * This function allow to change between mobile and keyboard control
 */
function toggleSwitch() {
  let switches = document.getElementById("smartphone");
  switches.classList.toggle("d-none-smartphone-panel");
  console.log("clicked");
}

/**
 * This function are executed via touch buttons (smartphone version)
 */

function touchDownLeft() {
  keyboard.LEFT = true;
}

function touchUpLeft() {
  keyboard.LEFT = false;
}

function touchDownRight() {
  keyboard.RIGHT = true;
}

function touchUpRight() {
  keyboard.RIGHT = false;
}

function touchDownJump() {
  keyboard.UP = true;
}

function touchUpJump() {
  keyboard.UP = false;
}

function touchDownThrow() {
  keyboard.D = true;
}

function touchUpThrow() {
  keyboard.D = false;
}
