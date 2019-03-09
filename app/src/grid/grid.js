'use strict';
import Cell from './cell.js';

export default class Grid {

    constructor(canvasWidth, canvasHeight) {
        this.cellSize = 20;

        // Check if the cell size matches the canvas size
        if(!this.correctSize(canvasWidth, canvasHeight, this.cellSize)) {
            throw "Cannot make grid, canvas width/height incompatible with cellsize";
            return;
        }

        this.grid = {};
        this.generateCell(0, 0, canvasWidth / this.cellSize, canvasHeight / this.cellSize);
    }

    generateCell(x, y, n, m) {
        if(x < n) {
            if(x == 0) {
                this.grid[y] = [];
            }

            var cell = new Cell(x, y);
            this.grid[y].push(cell);

            this.generateCell(x+1, y, n, m);
        } else if(y < m) {
            this.generateCell(0, y+1, n, m)
        }
    }

    log() {
        this.grid.forEach(function(cell) {
            cell.log();
        });
    }

    correctSize(canvasWidth, canvasHeight, cellSize) {
        if((canvasWidth % cellSize) == 0 || (canvasHeight % cellSize) == 0 && cellSize > 0) {
            return true;
        }
        return false;
    }

}