import './css/style.css';

window.onload = function() {
    let app = new PIXI.Application({
        width: 800, 
        height: 600,
        antialias: true,
        transparent: false,
        resolution: 1
    });
    
    app.renderer.backgroundColor = 0xFFFFFF;
    
    let container = document.getElementById("container");
    container.appendChild(app.view)
}
