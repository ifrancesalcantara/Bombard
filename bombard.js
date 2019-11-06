'use strict';

function Bombard(canvas, game, playerNumber, name, lives = 1) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.game = game;
    this.lives = lives;
    this.size = 100;
    this.x;
    this.y;
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
    this.canPlaceBomb = true;
    this.bombPlaceAllowanceTicker = 1500;
    this.hasIllimitedBombs = false;
    this.imageRightNormal;
    this.imageLeftNormal;
    this.imageRightInvulnerable;
    this.imageLeftInvulnerable;
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

Bombard.prototype.placeBombTicker = function () {
    if(this.bombPlaceAllowanceTicker <= 0){
        this.bombPlaceAllowanceTicker = 1500
        this.canPlaceBomb = true;
    }
    else {
        this.bombPlaceAllowanceTicker -= 100
    }   
}

Bombard.prototype.getImage = function() {
    const imageRightNormal = new Image()
    imageRightNormal.src='./img/player/Bombard_transparent_with_lute.png'
    this.imageRightNormal = imageRightNormal;

    const imageLeftNormal = new Image()
    imageLeftNormal.src='img/player/Bombard_trans_looking_left.png'
    this.imageLeftNormal = imageLeftNormal;

    const imageRightInvulnerable = new Image()
    imageRightInvulnerable.src='img/player/Bombard_invulnerable_right.png'
    this.imageRightInvulnerable = imageRightInvulnerable;

    const imageLeftInvulnerable = new Image()
    imageLeftInvulnerable.src='img/player/Bombard_invulnerable_left.png'
    this.imageLeftInvulnerable = imageLeftInvulnerable;
}

Bombard.prototype.draw = function() {
    if(this.lookingRight) {
        if(!this.isInInvincibilityFrames) {
            this.ctx.drawImage(this.imageRightNormal, this.x, this.y, this.size, this.size);
            this.ctx.fill()
        } else {
            this.ctx.drawImage(this.imageRightInvulnerable, this.x, this.y, this.size, this.size);
            this.ctx.fill()

        }
    } else {
        if(!this.isInInvincibilityFrames) {
            this.ctx.drawImage(this.imageLeftNormal, this.x, this.y, this.size, this.size);
            this.ctx.fill()
        } else {
            this.ctx.drawImage(this.imageLeftInvulnerable, this.x, this.y, this.size, this.size);
            this.ctx.fill();
        }
    }
    this.placeBombTicker()
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


Bombard.prototype.cardCollision = function() {
    this.game.bombards.forEach(bombard=>{
        if(bombard.identifier == this.identifier) {
            this.game.cardInstances.forEach(card=>{
                if(bombard.didCollide(card)) {
                    card.effect(this)
                    card.deleteYourself();

                    let cardpickSound = document.querySelector(".pickup-sound")
                    cardpickSound.play()
                }
            })
        }
    })
}


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

Bombard.prototype.handleBrickWallCollision = function() {       // !!!!    Handle other player collision???
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
        if(!this.isInInvincibilityFrames) {
            this.isInInvincibilityFrames = true;
            setTimeout(()=>{
                this.isInInvincibilityFrames = false;
            }, 2000)
            this.lives -= 1;

            var damageSound = document.querySelector(".damage-sound")
            damageSound.play();
        }
    
}





Bombard.prototype.placeNoteBomb = function(canvas) {
    if(!this.game.gameIsOver){
        if(!this.hasIllimitedBombs){
            if(this.canPlaceBomb){
                var noteBomb = new NoteBomb(canvas, this.x, this.y, this);
                this.game.noteBombs.push(noteBomb);
                noteBomb.getImage()
                noteBomb.getTheGameYouNeed(this.game);
                noteBomb.draw();
                this.canPlaceBomb = false;
    
                let noteDecider = Math.floor((Math.random()*16)+1)
                if(noteDecider == 1){
                    let sound = document.querySelector(".note-1")
                    sound.play()
                } else if(noteDecider == 3){
                    let sound = document.querySelector(".note-2")
                    sound.play()
                } else if(noteDecider == 4){
                    let sound = document.querySelector(".note-3")
                    sound.play()
                } else if(noteDecider == 5){
                    let sound = document.querySelector(".note-4")
                    sound.play()
                } else if(noteDecider == 6){
                    let sound = document.querySelector(".note-5")
                    sound.play()
                } else if(noteDecider == 7){
                    let sound = document.querySelector(".note-6")
                    sound.play()
                } else if(noteDecider == 8){
                    let sound = document.querySelector(".note-7")
                    sound.play()
                } else if(noteDecider == 9){
                    let sound = document.querySelector(".note-8")
                    sound.play()
                } else if(noteDecider == 10){
                    let sound = document.querySelector(".note-9")
                    sound.play()
                } else if(noteDecider == 11){
                    let sound = document.querySelector(".note-10")
                    sound.play()
                } else if(noteDecider == 12){
                    let sound = document.querySelector(".note-11")
                    sound.play()
                } else if(noteDecider == 13){
                    let sound = document.querySelector(".note-12")
                    sound.play()
                } else if(noteDecider == 14){
                    let sound = document.querySelector(".note-13")
                    sound.play()
                } else if(noteDecider == 15){
                    let sound = document.querySelector(".note-14")
                    sound.play()
                } else if(noteDecider == 16){
                    let sound = document.querySelector(".note-15")
                    sound.play()
                } else if(noteDecider == 17){
                    let sound = document.querySelector(".note-16")
                    sound.play()
                }
            }
        } else {
            var noteBomb = new NoteBomb(canvas, this.x, this.y, this);
            this.game.noteBombs.push(noteBomb);
            noteBomb.getImage()
            noteBomb.getTheGameYouNeed(this.game);
            noteBomb.draw();
            this.canPlaceBomb = false;
        }
    }
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