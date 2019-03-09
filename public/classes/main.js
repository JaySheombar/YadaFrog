window.onload = function() {
    let app = new PIXI.Application({width: 800, height: 600});

    let container = document.getElementById("container");
    container.appendChild(app.view)
}
