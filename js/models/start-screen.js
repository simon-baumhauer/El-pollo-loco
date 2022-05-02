class StartScreen extends MovableObject {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 720;
    this.height = 480;
  }
}

function startGame() {
  let start_btn = document.getElementById("start-btn");
  let start_screen = document.getElementById("start-screen");
  start_btn.classList.add("d-none");
  start_screen.classList.add("d-none");
  init();
}
