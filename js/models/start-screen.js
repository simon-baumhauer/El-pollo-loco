class StartScreen extends DrawableObject{

    start_screen_pic = new Image();

    constructor(ctx) {
        super().loadImage('../img/9.Intro _ Outro Image/Start Screen/Opción 1.png');
        this.start_screen_pic.src = '../img/9.Intro _ Outro Image/Start Screen/Opción 1.png';
        this.x = 0;
        this.y = 0;
        this.width = 720;
        this.height = 480;
    }
}


function startGame() {
    let start_btn = document.getElementById('start-btn');
    start_btn.classList.add('d-none');
}

