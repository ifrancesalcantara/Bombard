function NoteBomb(canvas, x, y, bombard) {
    this.game;
    this.size = 100;
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")
    this.stillTicking = true;
    this.chronometer = 1000;
    this.stillExploding = false;
    this.fireChronometer = 1500;
    this.explosionXAxis = null;
    this.explosionYAxis = null;
    this.bombard = bombard;
    this.identifier = Math.random()
    this.isNoteBomb = true;
    this.correctAreaOfEffectX;
    this.areaofEffectX = {x: this.x-200, y: this.y, sizeX: this.x+300, sizeY: this.y+100, isX:true, sizeXForPrint: 500, sizeYForPrint: 100};
    this.areaofEffectY = {x: this.x, y: this.y-200, sizeX: this.x+100, sizeY: this.y+300, isX:false, sizeXForPrint: 100, sizeYForPrint: 500};
    this.image;
}


NoteBomb.prototype.draw = function() {
    var existentialism = setInterval(()=>{
        if(this.stillTicking) {
            this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
            this.ctx.fill();
            this.ticker();
        } else {
            clearInterval(existentialism)
        }
    }, 100)
}

NoteBomb.prototype.getImage = function() {
    let bombImage = new Image();
    let fireX = new Image();
    let fireY = new Image();
    let firecenter = new Image();
    
    bombImage.src= "./img/bomb/music-note-icon.svg";
    fireX.src = "./img/bomb/Fire_tile_X.png";
    fireY.src = "./img/bomb/Fire_tile_Y.png";
    firecenter.src="./img/bomb/fire_center.png";
    
    this.image = bombImage;
    this.fireXImage= fireX;
    this.fireYImage = fireY;
    this.fireCenterImage = firecenter;
}


NoteBomb.prototype.ticker = function() {
    if(this.chronometer>0) {
        var tickerCountdown = setTimeout(()=>{
            this.chronometer -= 100
        }, 100)
    } else {
        if(!this.game.gameIsOver){
            this.stillTicking = false;
            clearInterval(tickerCountdown);
            this.stillExploding = true;
    
            var explosionSound = document.querySelector(".explosion");
            explosionSound.play();

            this.explode()
        }
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

        var explosionSound = document.querySelector(".explosion");
        explosionSound.pause();
    }
}

NoteBomb.prototype.explode = function() {
    if(!this.game.gameIsOver) {
        var explosiestalism = setInterval(()=>{
            if(this.stillExploding) {
                this.game.placeBrickWalls();
                this.game.placeWalls();

                if(!this.didCollideAny(this.areaofEffectX, this.game.blockWallInstances)) {
                    this.game.brickWallInstances.forEach(brickwall=>{
                        if(this.didCollide(this.areaofEffectX, brickwall)) {
                            for(i=1; i <3; i++) {
                                if(this.x/100-i > -1) {
                                    this.game.brickWalls[this.getBlockY(brickwall.y)][this.x/100-i] = 0;
                                }
                                this.game.brickWalls[this.getBlockY(brickwall.y)][this.x/100] = 0;
                            }
                            for(i=1; i <3; i++) {
                                if(this.x/100+i < 9){
                                    this.game.brickWalls[this.getBlockY(brickwall.y)][this.x/100+i] = 0;
                                }
                            }
                        }
                    }) 
                } else {
                    this.areaofEffectX = {x: this.x, y: this.y, sizeX: this.x+100, sizeY: this.y+100, isX:true, sizeXForPrint: 100, sizeYForPrint: 100};
                }
                if(!this.didCollideAny(this.areaofEffectY, this.game.blockWallInstances)) {
                    this.game.brickWallInstances.forEach(brickwall=>{
                        if(this.didCollide(this.areaofEffectY, brickwall)) {
                            for(i=1; i <3; i++) {
                                if(this.y/100-i > -1){
                                    this.game.brickWalls[this.y/100-i][this.getBlockY(brickwall.x)] = 0;
                                }
                            }
                            for(i=1; i <3; i++) {
                                if(this.y/100+i < 9){
                                    this.game.brickWalls[this.y/100+i][this.getBlockY(brickwall.x)] = 0;
                                }
                            }
                        }
                    })
                } else {
                    this.areaofEffectY = {x: this.x, y: this.y, sizeX: this.x+100, sizeY: this.y+100, isX:true, sizeXForPrint: 100, sizeYForPrint: 100};
                }
                

                this.game.bombards.forEach(bombard=>{
                    if(this.didCollide(this.areaofEffectX, bombard)) {
                        bombard.receiveDamage();
                    } else if(this.didCollide(this.areaofEffectY, bombard)) {
                        bombard.receiveDamage();
                    }
                })

                this.game.noteBombs.forEach(noteBomb=>{
                    if(this.didCollide(this.areaofEffectX, noteBomb)) {
                        if(noteBomb.identifier != this.identifier) {
                            if(!noteBomb.stillExploding) {
                                noteBomb.chronometer = 0;
                            }
                        }
                    } else if(this.didCollide(this.areaofEffectY, noteBomb)) {
                        if(noteBomb.identifier != this.identifier) {
                            if(!noteBomb.stillExploding){
                                noteBomb.chronometer = 0;
                            }
                        }
                    }
                })

                this.game.cardInstances.forEach(card=>{
                    if(card.type!="deathCard") {
                        if(this.didCollide(this.areaofEffectX, card)) {
                            if(card.type!="heart") {
                                this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1);
                            } else {
                                this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1);
                                let deathCard = new DeathCard(card.x, card.y, this.game);
                                this.game.cardInstances.push(deathCard);
                                deathCard.getImage();
                            }
                        } else if(this.didCollide(this.areaofEffectY, card)) {
                            if(card.type!="heart") {
                                this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1);
                            } else {
                                this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1);
                                let deathCard = new DeathCard(card.x, card.y, this.game);
                                deathCard.getImage();
                                this.game.cardInstances.push(deathCard);
    
                            }
                        }
                    } else {
                        
                    }
                })

                // if(!this.game.isPvP){
                //     this.game.listOfAllEnemies.forEach((enemy, index)=>{
                //         if(this.didCollide(this.areaofEffectX, enemy)) {
                //             console.log(`Dog at ${enemy.x} ${enemy.y} was deleted due to X axis`);
                //             enemy.die()
                //             // this.game.listOfAllEnemies.splice(index, index+1)
                //         } else if(this.didCollide(this.areaofEffectY, enemy)) {
                //             console.log(`Dog at ${enemy.x} ${enemy.y} was deleted due to Y axis`);
                //             enemy.die()
                //             // this.game.listOfAllEnemies.splice(index, index+1)
                        
                //         }
                //     })
                // }



                //DRAW according to the correct size

                if(this.game.inGame) {
                    this.game.cardInstances.forEach(card=>{
                        card.draw()
                    })
                    // this.ctx.drawImage(fireX, this.x-200, this.y, this.size+400, this.size)

                    this.ctx.drawImage(this.fireXImage, this.areaofEffectX.x, this.areaofEffectX.y, this.areaofEffectX.sizeXForPrint, this.areaofEffectX.sizeYForPrint)
                    this.ctx.fill();
                    this.ctx.drawImage(this.fireYImage, this.areaofEffectY.x, this.areaofEffectY.y, this.areaofEffectY.sizeXForPrint, this.areaofEffectY.sizeYForPrint)
                    this.ctx.fill();
                    this.ctx.drawImage(this.fireCenterImage, this.x, this.y, this.size, this.size)
                    this.ctx.fill();

                    this.firetimer();
                }
            } else {
                clearInterval(explosiestalism)
                this.clearFire()
                this.bombard.game.noteBombs.forEach((bomb, i)=>{
                    if(bomb.identifier == this.identifier) {
                        this.bombard.game.noteBombs.splice(i, i+1)
                    }
                })
            }
            this.game.removeBrickWalls();
            this.game.removeBlockWalls()
        }, 100)
    }
}


NoteBomb.prototype.didCollide = function(fire, block) {
    if(!this.game.gameIsOver) {
        if(fire.isX) {
            var fireLeft = fire.x;
            var fireRight = fire.sizeX;
            // console.log("fireRight: ", fireRight);
            var fireTop = fire.y;
            var fireBottom = fire.sizeY;
            
            var blockLeft = block.x;
            var blockRight = block.x + block.size;
            var blockTop = block.y+2;
            var blockBottom = block.y + block.size-2;
            
            var crossRight = blockRight<=fireRight && blockRight >= fireLeft;
        
            var crossBottom = blockBottom <= fireBottom && blockBottom >= fireTop;
        
            var crossLeft = blockLeft >= fireLeft && blockLeft <= fireRight;
        
            var crossTop = blockTop >= fireTop && blockTop <= fireBottom
            
            if (crossRight && crossLeft && (/*crossTop */crossBottom)) {
                return true;
            } else {
                // console.log("didn't collide with brick at "+block.x, " ", block.y);
                // console.log(`because crossLeft: ${crossLeft}. blockLeft ${blockLeft} >= fireLeft ${fireLeft} && blockLeft ${blockLeft} <= fireRight ${fireRight}`);
                // console.log(`Didn't collide because for block at ${block.x}, ${block.y} XAxis crossedRight: ${crossRight}, crossedLeft: ${crossLeft} but crossTop: ${crossTop}`);
                return false 
            }
        }
        else {
            var fireLeft = fire.x;
            var fireRight = fire.sizeX;
            var fireTop = fire.y;
            var fireBottom = fire.sizeY-1;
            
            var blockLeft = block.x+2;
            var blockRight = block.x + block.size-2;
            var blockTop = block.y;
            var blockBottom = block.y + block.size;
            
            var crossRight = blockRight<=fireRight && blockRight >= fireLeft;
        
            var crossBottom = blockBottom <= fireBottom && blockBottom >= fireTop;
        
            var crossLeft = blockLeft >= fireLeft && blockLeft <= fireRight;
        
            var crossTop = blockTop >= fireTop && blockTop <= fireBottom
            
            if (crossTop && crossLeft /*&& crossBottom*/) {
                // console.log(`because crossTop: ${crossTop}. blockTop ${blockTop} >= fireTop ${fireTop} && blockTop ${blockTop} <= fireBottom ${fireBottom}`);
                // console.log(`${blockBottom <= fireBottom} b:${blockBottom}, ${fireBottom} ${blockBottom >= fireTop}, fireLeft: ${fireLeft}, fireRight: ${fireRight}, fireTop: ${fireTop}, fireBottom: ${fireBottom} didn't collide with block at ${block.x}, ${block.y}`)
                return true;
            } else {
                return false 
            }
            // console.log("fire: ", fireLeft, fireRight, fireTop, fireBottom);
            // console.log("brickwall: ", somethingLeft, somethingRight, somethingTop, somethingBottom);
        }
    }
}

NoteBomb.prototype.didCollideAny = function(fire, listOfBlocks) {
    var result = false
    listOfBlocks.forEach(block=>{
        if(fire.isX) {
            var fireLeft = fire.x;
            var fireRight = fire.sizeX;
            var fireTop = fire.y;
            var fireBottom = fire.sizeY;
            
            var blockLeft = block.x;
            var blockRight = block.x + block.size;
            var blockTop = block.y+2;
            var blockBottom = block.y + block.size-2;
            
            var crossRight = blockRight<=fireRight && blockRight >= fireLeft;
        
            var crossBottom = blockBottom <= fireBottom && blockBottom >= fireTop;
        
            var crossLeft = blockLeft >= fireLeft && blockLeft <= fireRight;
        
            var crossTop = blockTop >= fireTop && blockTop <= fireBottom
            
            if (crossRight && crossLeft && (/*crossTop */crossBottom)) {
                result = true;
            }
        }
        else {
            var fireLeft = fire.x;
            var fireRight = fire.sizeX;
            var fireTop = fire.y;
            var fireBottom = fire.sizeY-1;
            
            var blockLeft = block.x+2;
            var blockRight = block.x + block.size-2;
            var blockTop = block.y;
            var blockBottom = block.y + block.size;
            
            var crossRight = blockRight<=fireRight && blockRight >= fireLeft;
        
            var crossBottom = blockBottom <= fireBottom && blockBottom >= fireTop;
        
            var crossLeft = blockLeft >= fireLeft && blockLeft <= fireRight;
        
            var crossTop = blockTop >= fireTop && blockTop <= fireBottom
            
            if (crossTop && crossLeft) {
                result = true;
            }
        }
    })
    return result
}

NoteBomb.prototype.getTheGameYouNeed = function(game) {
    this.game = game
}

NoteBomb.prototype.getBlockY = function(num) {
    if(num == 0) {
        return 0;
    } else {
        return num/100
    }
}

NoteBomb.prototype.getBlockX = function(num) {
    let numCorrected = num-100;
    if(numCorrected <= 0) {
        return 0;
    } else {
        return numCorrected/100
    }
}

NoteBomb.prototype.clearFire = function() {
    this.ctx.clearRect(this.x-200, this.y, this.size+400, this.size);
    this.ctx.clearRect(this.x, this.y-200, this.size, this.size+400);
}