'use strict';

function Bombard(canvas, lives = 3) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.size = 100;
    this.x = 0;
    this.y = 0;
}

Bombard.prototype.draw = function() {
    const bombard = document.createElement("img")
    bombard.src='img/player.png'
    bombard.onload = function() {
        this.ctx.drawImage(bombard, this.x, this.y, this.size, this.size);
    }.bind(this)
};




Bombard.prototype.move = function(direction) {

    if(direction=="moveUp") {
        this.y -= this.size;
    } else if(direction=="moveRight") {
        this.x += this.size;
    } else if (direction=="moveDown") {
        this.y += this.size
    } else if (direction=="moveLeft") {
        this.x -= this.size
    }
};



Bombard.prototype.handleScreenCollision = function() {
    var screenTop = 1;                         //!!! I have to put +1?
    var screenBottom = this.canvas.height-1;    //!!! I have to put -1?
    var screenLeft = 1;                         //!!! I have to put +1?
    var screenRight = this.canvas.width-1;
    if (this.y > screenBottom) {this.y -= this.size}
    else if (this.y + this.size < screenTop) {this.y += this.size}
    else if (this.x > screenRight) {this.x -= this.size}
    else if (this.x + this.size < screenLeft) {this.x += this.size}
};





