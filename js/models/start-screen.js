class StartScreen extends DrawableObject{
    
    
    constructor() {
        super().loadImage('img/9.Intro _ Outro Image/Start Screen/Opción 1.png');
        this.x = 0;
        this.y = 0;
        this.width = 720;
        this.height = 480;
    }
}


function startGame() {
    let start_btn = document.getElementById('start-btn');
    let start_screen = document.getElementById('start-screen');
    start_btn.classList.add('d-none');
    start_screen.classList.add('d-none');
    myMusic = new Audio("audio/background_sound.mp3");
    myMusic.stop();
    init();
}