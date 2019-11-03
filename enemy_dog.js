function Dog(canvas, x, y, game) {
    this.canvas = canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.size = 100;
    this.game = game;
    this.lookingRight = true;
    this.image;
    this.maximumX = x+100;
    this.minimumX = x-100;
    this.goingRight = true;
}


Dog.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    this.ctx.fill();
};

Dog.prototype.move = function() {
    if(this.goingRight && !this.handleScreenCollision()) {       // And didn't collide
        if(this.x < this.maximumX) {
            this.x += 100;
        } else if(this.x >= this.maximumX || this.x <= this.minimumX) {
            this.goingRight = false;
        } else {
            console.log("something failed. there is a dog stuck at ", this.x-this.maximumX," ", this.y);
        }
    } else {                    //!!! And didn't collide
        if(this.x > this.minimumX){
            this.x -= 100;
        } else {
            this.goingRight = true;
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
        dog.src='img/player/dog_trans_looking_left.png'
        this.image = dog
    }
}

Dog.prototype.changeLookingDirection = function() {
    if(this.lookingRight) {
        this.lookingRight = false;
    } else {
        this.lookingRight = true;
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