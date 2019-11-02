'use strict';

function Bombard(canvas, game, playerNumber, lives = 1) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.game = game;
    this.lives = lives;
    this.size = 100;
    this.x = 0;
    this.y = 100;
    this.isWithinInvincibilityFrames = false;
    this.playerNumber = playerNumber
}

Bombard.prototype.draw = function() {
    const bombard = new Image()
    bombard.src='img/player/Bombard3centered.jpg'
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
    this.lives -= damage;
}





Bombard.prototype.placeNoteBomb = function(canvas) {
    var noteBomb = new NoteBomb(canvas, this.x, this.y, this);   /* timer in loop? */
    this.game.noteBombs.push(noteBomb);
    noteBomb.draw();
}

Bombard.prototype.didCollide = function(somethingWithXYandSize) {
    if(somethingWithXYandSize.isGoal){
        var playerLeft = this.x;
        var playerRight = this.x-1 + this.size;
        var playerTop = this.y+1;
        var playerBottom = this.y + this.size;
        
        var somethingLeft = somethingWithXYandSize.x;
        var somethingRight = somethingWithXYandSize.x + somethingWithXYandSize.size;
        var somethingTop = somethingWithXYandSize.y;
        var somethingBottom = somethingWithXYandSize.y + somethingWithXYandSize.size;
        
        // Check if the somethingWithXYandSize intersects any of the player's sides
        var crossLeft = somethingLeft <= playerRight && somethingLeft >= playerLeft;
            
        var crossRight = somethingRight >= playerLeft && somethingRight <= playerRight;
        
        var crossBottom = somethingBottom >= playerTop && somethingBottom <= playerBottom;
        
        var crossTop = somethingTop <= playerBottom && somethingTop >= playerTop;
        
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
            somethingWithXYandSize.x = 0-somethingWithXYandSize.size;
            return true;
        }
        return false;
    // } else if (somethingWithXYandSize.isNoteBomb){
        //check areaOfEffectX and areaOfEffectY
    } else {
        var playerLeft = this.x;
        var playerRight = this.x + this.size;
        var playerTop = this.y;
        var playerBottom = this.y + this.size;
        
        var somethingLeft = somethingWithXYandSize.x;
        var somethingRight = somethingWithXYandSize.x + somethingWithXYandSize.size;
        var somethingTop = somethingWithXYandSize.y;
        var somethingBottom = somethingWithXYandSize.y + somethingWithXYandSize.size;
        
        // Check if the somethingWithXYandSize intersects any of the player's sides
        var crossLeft = somethingLeft <= playerRight && somethingLeft >= playerLeft;
            
        var crossRight = somethingRight >= playerLeft && somethingRight <= playerRight;
        
        var crossBottom = somethingBottom >= playerTop && somethingBottom <= playerBottom;
        
        var crossTop = somethingTop <= playerBottom && somethingTop >= playerTop;
        
        if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
            somethingWithXYandSize.x = 0-somethingWithXYandSize.size;
            return true;
        }
        return false;
    }
}


Bombard.prototype.handleArrivingToGoal = function() {
    if(this.playerNumber == 1) {
        if (this.didCollide(this.game.goalForPlayer1)){
            this.game.gameOver()
        }
    }
}


// Bombard.prototype.handleBurn = function() {
    // if(this.didCollide(notebomb.areaOfEffectY) {
    //     this.receiveDamage(1);
    // }
//  if(this.didCollide(notebomb.areaOfEffectX)) {
    //     this.receiveDamage(1);
    // }
// }