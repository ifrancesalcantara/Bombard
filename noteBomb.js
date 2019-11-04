function NoteBomb(canvas, x, y, bombard) {
    this.game;
    this.size = 100;
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")
    this.stillTicking = true;
    this.chronometer = 2200;
    this.stillExploding = false;
    this.fireChronometer = 1500;
    this.explosionXAxis = null;
    this.explosionYAxis = null;
    this.bombard = bombard;
    this.identifier = Math.random()
    this.isNoteBomb = true;
    this.correctAreaOfEffectX;
    this.areaofEffectFullX = {x: this.x-200, y: this.y, sizeX: this.size+400, sizeY: this.size};
    this.areaofEffectPlusOneMinusOne = {x: this.x-100, y: this.y, sizeX: this.size+300, sizeY: this.size};
    this.areaofEffectMinusTwoToCenter = {x: this.x-200, y: this.y, sizeX: this.size+200, sizeY: this.size};
    this.areaofEffectMinusOneToCenter = {x: this.x-100, y: this.y, sizeX: this.size+100, sizeY: this.size};
    this.areaofEffectXcenter = {x: this.x, y: this.y, sizeX: this.size, sizeY: this.size};
}


NoteBomb.prototype.draw = function() {
    var existentialism = setInterval(()=>{
        if(this.stillTicking){
            var noteBomPic = new Image();
            noteBomPic.src="img/bomb/music-note-icon.svg"
            noteBomPic.onload = function() {
                this.ctx.drawImage(noteBomPic, this.x, this.y, this.size, this.size)
            }.bind(this)
            this.ticker();
        } else {
            clearInterval(existentialism)
        }
    }, 100)
}


NoteBomb.prototype.ticker = function() {
    if(this.chronometer>0) {
        var tickerCountdown = setTimeout(()=>{
            this.chronometer -= 100
        }, 100)
    } else {
        this.stillTicking = false;
        clearInterval(tickerCountdown);
        this.stillExploding = true;
        this.explode()
    }
}

NoteBomb.prototype.firetimer = function() {
    if(this.fireChronometer > 0) {
        var fireTickerCountdown = setTimeout(()=>{
            this.fireChronometer -= 100
        }, 100)
    } else {
        this.stillExploding = false;
        clearInterval(fireTickerCountdown);
    }
}

NoteBomb.prototype.explode = function() {
    var explosiestalism = setInterval(()=>{
        if(this.stillExploding) {

            // Print obstacles again to have them
            this.game.placeWalls();
            this.game.placeBrickWalls();
            // Check if maximum range collides, and if id to, check another size. set correct size to one that doesn't collide 
            this.game.brickWallInstances.forEach(brickwall=>{
                // console.log(brickwall.x, brickwall.y, brickwall.size);
                // console.log(this.areaofEffectFullX.x, this.areaofEffectFullX.y, this.areaofEffectFullX.sizeX, this.areaofEffectFullX.sizeY);
                if(this.didCollide(this.areaofEffectFullX, brickwall)){
                    console.log("Collided!!!");
                } else {
                    this.correctAreaOfEffectX = this.areaofEffectXcenter
                }
                // if(this.didCollide(this.areaofEffectMinusOneToCenter, brickwall) && this.didCollide(this.areaofEffectPlusOneToCenter, brickwall)) {
                //     console.log("SOME COLLISION!!!");
                //     this.correctAreaOfEffectX = this.areaofEffectXcenter
                // }
                // else if(this.didCollide(this.areaofEffectMinusOneToCenter, brickwall)) {
                //     console.log("passed small right fire");
                //     this.correctAreaOfEffectX = this.areaofEffectPlusOneToCenter;
                // }
                // else if(this.didCollide(this.areaofEffectPlusOneMinusOne, brickwall)) {
                //     console.log("passed small left fire");
                //     this.correctAreaOfEffectX = this.areaofEffectMinusOneToCenter;
                // }
                // else if(this.didCollide(this.areaofEffectMinusTwoToCenter, brickwall)) {
                //     console.log(" ");
                //     this.correctAreaOfEffectX = this.areaofEffectMinusTwoToCenter;
                // }
                // else if(this.didCollide(this.areaofEffectMinusTwoToCenter, brickwall)) {
                //     console.log(" ");
                //     this.correctAreaOfEffectX = this.areaofEffectMinusTwoToCenter;
                // }
                // else if(this.didCollide(this.areaofEffectMinusOneToCenter, brickwall)) {                        //If every X possibility Collides, CorrectX is that possibility
                //     console.log(" ");
                //     this.correctAreaOfEffectX = this.areaofEffectMinusOneToCenter;
                // } else {
                    // console.log("No collision.");
                //     console.log("X Axis didn't collide with brickwall at x: ", brickwall.x, " y: ", brickwall.y);
                //     this.correctAreaOfEffectX = this.areaofEffectFullX;
                // }
            })
            // this.game.blockWallInstances.forEach(blockwall=>{
            //     console.log("blockwall");
            //     if(!this.didCollide(this.areaofEffectPlusOneMinusOne, blockwall)) {
            //         console.log("passed medium fire");
            //         this.correctAreaOfEffectX = this.areaofEffectPlusOneMinusOne;
            //     }
            //     else if(this.didCollide(this.areaofEffectMinusTwoToCenter, blockwall)) {
            //         console.log("passed left max");
            //         this.correctAreaOfEffectX = this.areaofEffectMinusTwoToCenter;
            //     }
            //     else if(this.didCollide(this.areaofEffectMinusOneToCenter, blockwall)) {                        //If every X possibility Collides, CorrectX is that possibility
            //         console.log("passed left one");
            //         this.correctAreaOfEffectX = this.areaofEffectMinusOneToCenter;
            //     } else {
            //         console.log("default X area");
            //         this.correctAreaOfEffectX = this.areaofEffectXcenter
            //     }
            // })


            //DRAW according to the correct size

            if(this.bombard.game.inGame) {
                let fireX = new Image();
                let fireY = new Image();
                let firecenter = new Image();

                fireX.src = "/img/bomb/Fire_tile_X.png";
                fireY.src = "/img/bomb/Fire_tile_Y.png";
                firecenter.src="/img/bomb/fire_center.png"

                // this.ctx.drawImage(fireX, this.x-200, this.y, this.size+400, this.size)

                this.ctx.drawImage(fireX, this.correctAreaOfEffectX.x, this.correctAreaOfEffectX.y, this.correctAreaOfEffectX.sizeX, this.correctAreaOfEffectX.sizeY)
                this.ctx.fill();
                this.ctx.drawImage(fireY, this.x, this.y-200, this.size, this.size+400)
                this.ctx.fill();
                this.ctx.drawImage(firecenter, this.x, this.y, this.size, this.size)
                this.ctx.fill();

                this.firetimer();
            }
        } else {
            clearInterval(explosiestalism)
            this.ctx.clearRect(this.x-200, this.y, this.size+400, this.size);
            this.ctx.clearRect(this.x, this.y-200, this.size, this.size+400);
            this.bombard.game.noteBombs.forEach((bomb, i)=>{
                if(bomb.identifier == this.identifier) {
                    this.bombard.game.noteBombs.splice(i, i+1)
                }
            })
        }
    }, 100)
}


NoteBomb.prototype.didCollide = function(somethingWithXYandSizeXandSizeY, blockWithXYandSize) {
    
    var fireLeft = somethingWithXYandSizeXandSizeY.x;
    var fireRight = somethingWithXYandSizeXandSizeY.sizeX;
    var fireTop = somethingWithXYandSizeXandSizeY.y;
    var fireBottom = somethingWithXYandSizeXandSizeY.sizeY;
    
    var blockLeft = blockWithXYandSize.x;
    var blockRight = blockWithXYandSize.x + blockWithXYandSize.size;
    var blockTop = blockWithXYandSize.y;
    var blockBottom = blockWithXYandSize.y + blockWithXYandSize.size;
    
    var crossRight = blockRight<=fireRight && blockRight >= fireLeft;

    var crossBottom = blockBottom <= fireBottom && blockBottom >= fireBottom;

    var crossLeft = blockLeft >= fireLeft && blockLeft <= fireRight;

    var crossTop = blockTop >= fireTop && blockTop <= fireBottom

    // var crossRight = blockRight >= fireLeft && blockRight <= fireRight;

    // var crossLeft = blockLeft <= fireRight && blockLeft >= fireLeft;
        
    // var crossBottom = blockBottom >= fireTop && blockBottom <= fireBottom;
    
    // var crossTop = blockTop <= fireBottom && blockTop >= fireTop;
    
    if (crossRight && crossLeft && crossTop) {
        return true;
    } else {
        console.log("Didn't collide");
        return false 
    }
    // console.log("fire: ", fireLeft, fireRight, fireTop, fireBottom);
    // console.log("brickwall: ", somethingLeft, somethingRight, somethingTop, somethingBottom);
}


NoteBomb.prototype.getTheGameYouNeed = function(game) {
    this.game = game
}