let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas)
}

window.addEventListener('keypress', (event) => {
    console.log(event)
});