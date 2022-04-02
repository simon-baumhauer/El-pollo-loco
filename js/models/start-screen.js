 class GAMEOVERSCREEN extends MovableObject {

        GAMEOVER = [
            'img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png'
        ]
    
    
  
    constructor() {
        super().loadImage(this.GAMEOVER[0]);
        this.x = 0;
        this.y = 0;
        this.width = 720;
        this.height = 480;
        this.animate();
    }

    animate() {
        this.playAnimation(this.GAMEOVER);
    }

}

 function startGame() {
    let start_btn = document.getElementById('start-btn');
    let start_screen = document.getElementById('start-screen');
    start_btn.classList.add('d-none');
    start_screen.classList.add('d-none');
    init();
}

// myMusic = new Audio("audio/background_sound.mp3");
// myMusic.stop();