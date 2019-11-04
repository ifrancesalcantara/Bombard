'use strict';

function Bombard(canvas, game, playerNumber, name, lives = 1) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.game = game;
    this.lives = lives;
    this.size = 100;
    this.x;
    this.y;
    this.isWithinInvincibilityFrames = false;
    this.playerNumber = playerNumber
    this.name = name;
    this.enemysName;
    this.isInInvincibilityFrames = false;
    this.lookingRight = true;
    this.identifier = Math.random();
    this.isMovingUp = false;
    this.isMovingDown = false;
    this.isMovingRight = false;
    this.isMovingLeft = false;
}




Bombard.prototype.getName = function(newName) {
    this.name = newName
}

Bombard.prototype.getEnemyName = function(){
    if(this.game.isPvP) {
        this.game.bombards.forEach((bombard, index)=>{
            if(bombard.name != this.name) {
                this.enemysName = bombard.name;
            }
        })
    }
}


Bombard.prototype.getPosition = function() {
    if (this.playerNumber == 1){
        this.x = 0;
        this.y = 800;
    } else if (this.playerNumber == 2){
        this.x = 800;
        this.y = 0;
    }
}


Bombard.prototype.draw = function() {
    if(this.lookingRight) {
        const bombard = new Image()
        bombard.src='img/player/Bombard_transparent_with_lute.png'
        bombard.onload = function() {
            this.ctx.drawImage(bombard, this.x, this.y, this.size, this.size);
        }.bind(this)
    } else {
        const bombard = new Image()
        bombard.src='img/player/Bombard_trans_looking_left.png'
        bombard.onload = function() {
            this.ctx.drawImage(bombard, this.x, this.y, this.size, this.size);
        }.bind(this)
    }
};

Bombard.prototype.changeLookingDirection = function() {
    if(this.lookingRight) {
        this.lookingRight = false;
    } else {
        this.lookingRight = true;
    }
}

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

Bombard.prototype.handleBrickWallCollision = function() {
    this.game.bombards.forEach(bombard=>{
        if(bombard.identifier == this.identifier) {
            this.game.brickWallInstances.forEach(brickwall=>{
                if(bombard.isMovingUp) {
                    if(bombard.didCollide(brickwall)) {
                        this.y += this.size;
                    }
                } else if (bombard.isMovingRight) {
                    if(bombard.didCollide(brickwall)) {
                    this.x -= this.size;
                    }
                } else if (bombard.isMovingDown) {
                    if(bombard.didCollide(brickwall)) {
                    this.y -= this.size;
                    }
                } else if (bombard.isMovingLeft) {
                    if(bombard.didCollide(brickwall)) {
                    this.x += this.size;
                    }
                }

            })
        }
    })
}

Bombard.prototype.handleBlockWallCollision = function() {
    this.game.bombards.forEach(bombard=>{
        if(bombard.identifier == this.identifier) {
            this.game.blockWallInstances.forEach(blockwall=>{
                if(bombard.isMovingUp) {
                    if(bombard.didCollide(blockwall)) {
                        this.y += this.size;
                    }
                } else if (bombard.isMovingRight) {
                    if(bombard.didCollide(blockwall)) {
                    this.x -= this.size;
                    }
                } else if (bombard.isMovingDown) {
                    if(bombard.didCollide(blockwall)) {
                    this.y -= this.size;
                    }
                } else if (bombard.isMovingLeft) {
                    if(bombard.didCollide(blockwall)) {
                    this.x += this.size;
                    }
                }

            })
        }
    })
}

Bombard.prototype.handleDogBite = function() {
    this.game.bombards.forEach(bombard=>{
        if(bombard.identifier == this.identifier) {
            this.game.listOfAllEnemies.forEach(enemy=>{
                if(bombard.didCollide(enemy)){
                    console.log("dogBite!");
                    if(!bombard.isInInvincibilityFrames) {
                        bombard.isInInvincibilityFrames = true;
                        setTimeout(()=>{
                            bombard.isInInvincibilityFrames = false;
                        }, 2000)
                        bombard.lives -= 1;
                    }
                }
            })
        }
    })
}


Bombard.prototype.receiveDamage = function (damage) {
    this.lives -= damage;
}





Bombard.prototype.placeNoteBomb = function(canvas) {
    var noteBomb = new NoteBomb(canvas, this.x, this.y, this);
    this.game.noteBombs.push(noteBomb);
    noteBomb.getTheGameYouNeed(this.game);
    noteBomb.draw();
}

Bombard.prototype.didCollide = function(somethingWithXYandSize) {
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
    
    var somethingLeft = somethingWithXYandSize.x;
    var somethingRight = somethingWithXYandSize.x + somethingWithXYandSize.size;
    var somethingTop = somethingWithXYandSize.y;
    var somethingBottom = somethingWithXYandSize.y + somethingWithXYandSize.size;
    
    
    var crossLeft = somethingLeft <= playerRight && somethingLeft >= playerLeft;
        
    var crossRight = somethingRight >= playerLeft && somethingRight <= playerRight;
    
    var crossBottom = somethingBottom >= playerTop && somethingBottom <= playerBottom;
    
    var crossTop = somethingTop <= playerBottom && somethingTop >= playerTop;
    
    if (crossLeft && crossRight && crossTop && crossBottom) {
        return true;
    } else {
        return false;
    }
}

Bombard.prototype.resetDirection = function() {
    this.isMovingUp = false;
    this.isMovingRight = false;
    this.isMovingDown = false;
    this.isMovingLeft = false;
}


Bombard.prototype.handleArrivingToGoal = function() {               //!!! collides with square to the left of goal
    if (this.didCollide(this.game.goalForPlayer1)){
        this.game.gameOverWin();
    }
}