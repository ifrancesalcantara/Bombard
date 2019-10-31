'use strict';

function Bombard(canvas, lives = 3) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.size = 100;
    this.x = 0;
    this.y = 800;
}



Bombard.prototype.draw = function() {
    const bombard = document.createElement("img")
    bombard.src='img/player.png'
    console.log("Bombard did draw");
    bombard.onload = function() {
        this.ctx.drawImage(bombard, this.x, this.y, this.size, this.size);
    }.bind(this)
};




Bombard.prototype.move = function(direction) {

    if(direction=="moveUp") {
        console.log("moveUp");
        this.y -= 100;
    } else if(direction=="moveRight") {
        this.x += 100;
    } else if (direction=="moveDown") {
        this.y += 100
    } else if (direction=="moveLeft") {
        this.x -= 100
    }
};