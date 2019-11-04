function Dog(canvas, x, y, movingAxis, game) {
    this.canvas = canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.size = 100;
    this.lookingRight = true;
    this.goingRight = true;
    this.image;
    this.maximumX = x+100;
    this.minimumX = x-100;
    this.movingAxis = movingAxis
    this.game = game
}


Dog.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    this.ctx.fill();
};

Dog.prototype.move = function() {
    if(this.movingAxis == "x") {
        if(this.goingRight && !this.handleScreenCollision()) {
            if(this.x < this.maximumX) {
                this.x += 100;
                this.game.brickWallInstances.forEach(brickwall=>{
                    if(this.didCollide(brickwall)) {
                        this.x -= 100;
                    }
                    else {
                        this.goingRight = false;
                        // this.lookingRight = false;
                        // this.getImage();
                    }
                })       
            } else {
                // this.goingRight = false;
                // this.lookingRight = false;
                // this.getImage();
            }      
        } else if(!this.goingRight && !this.handleScreenCollision()) {
            if(this.x > this.minimumX){
                this.x -= 100;
                this.game.brickWallInstances.forEach(brickwall=>{
                    if(this.didCollide(brickwall)) {
                        this.x += 100;
                    }
                    else {
                        this.goingRight = true;
                        // this.lookingRight = true;
                        // this.getImage();
                    }
                })
            } else {
                // this.goingRight = true;
                // this.lookingRight = true;
                // this.getImage();
            }
        }
    } else if(this.movingAxis == "y") {
        if(this.y < this.maximumY) {
            this.y += 100;
            this.game.brickWallInstances.forEach(brickwall=>{
                if(this.didCollide(brickwall)) {
                    this.y -= 100;
                }
                else {
                    this.goingRight = false;
                    this.lookingRight = false;
                    this.getImage();
                }
            })       
        } else {
            // this.goingRight = false;
            // this.lookingRight = false;
            // this.getImage();
        }      
    } else if(!this.goingRight && !this.handleScreenCollision()) {
        if(this.y > this.minimumY){
            this.y -= 100;
            this.game.brickWallInstances.forEach(brickwall=>{
                if(this.didCollide(brickwall)) {
                    this.y += 100;
                }
                else {
                    this.goingRight = true;
                    this.lookingRight = true;
                    this.getImage();
                }
            })
        } else {
            // this.goingRight = true;
            // this.lookingRight = true;
            // this.getImage();
        }
    
    }
}

Dog.prototype.getImage = function() {
    if(this.lookingRight) {
        const dog = new Image()
        dog.src='img/enemies/dog/Enemy dog looking right.png'
        this.image = dog
    } else {
        const dog = new Image()
        dog.src='img/enemies/dog/Enemy_dog_looking_left.png'
        this.image = dog
    }
}

Dog.prototype.handleScreenCollision = function() {
    var screenTop = 1;                         //!!! I have to put +1?
    var screenBottom = this.canvas.height-1;    //!!! I have to put -1?
    var screenLeft = 1;                         //!!! I have to put +1?
    var screenRight = this.canvas.width-1;
    if (this.y > screenBottom) {this.y -= this.size}
    else if (this.y + this.size < screenTop) {this.y += this.size}
    else if (this.x > screenRight) {this.x -= this.size}
    else if (this.x + this.size < screenLeft) {this.x += this.size}
};


Dog.prototype.didCollide = function(somethingWithXYandSize) {
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
    
    if (crossLeft && crossRight && crossTop && crossBottom) {
        // somethingWithXYandSize.x = 0-somethingWithXYandSize.size;
        // console.log(`Colided when trying to move up! with brickwall at ${somethingWithXYandSize.x} ${somethingWithXYandSize.y}`);
        return true;
    }
    return false;
}