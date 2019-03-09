'use strict';

export default class Cell {

    constructor(xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.occupied = false;
    }

    log() {
        console.log(`x: ${this.x} y:${this.y}`);
    }
}