import Grid from './src/grid/grid.js';
import './css/style.css';

window.onload = function() {
    const frameWidth = 800;
    const frameHeight = 600;

    let app = new PIXI.Application({
        width: frameWidth,
        height: frameHeight,
        antialias: true,
        transparent: false,
        resolution: 1
    });
    
    app.renderer.backgroundColor = 0xFFFFFF;

    let container = document.getElementById("container");
    container.appendChild(app.view)

    let grid = new Grid(frameWidth, frameHeight);
    // grid.log();
}
