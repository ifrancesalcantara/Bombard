'use strict';

function Bombard(canvas, game, lives = 3) {
    this.canvas = canvas;
    console.log(canvas);
    this.ctx = this.canvas.getContext('2d');
    this.game = game;
    this.lives = lives;
    this.size = 100;
    this.x = 0;
    this.y = 100;
}

Bombard.prototype.draw = function() {
    const bombard = new Image()
    bombard.src='img/player/player.png'
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

Bombard.prototype.receiveDamage = function (damage) {
    this.lives -= 1;
}





Bombard.prototype.placeNoteBomb = function(canvas) {
    var noteBomb = new NoteBomb(canvas, this.x, this.y);   /* timer in loop? */
    this.game.noteBombs.push(noteBomb);
    noteBomb.draw();
}