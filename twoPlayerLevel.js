function TwoPlayerLevel() {
    this.squareBrushX = 0;
    this.squareBrushY = 0;
    this.backgroundCanvas = null;
    this.backgroundCtx = null;
    this.brickWalls = null;
    this.blockWalls = [[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]];
    this.blockWallInstances = [];
    this.brickWalls = [[1,1,1,1,1,1,0,0,0],[1,0,1,0,1,0,0,0,1],[1,1,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,1],[1,1,0,0,0,0,0,1,1],[1,0,0,0,1,0,1,0,1],[0,0,0,1,1,1,1,1,1]];
    this.brickWallInstances = [];
    this.cardInstances = [];
    this.gameScreen = null;
    this.bombards =  [];
    this.bombard1 = null;
    this.bombard2 = null;
    this.gameIsOver = false;
    this.noteBombs = [];
    this.gameOverFunction;
    this.gameDrawFunction;
    this.isPvP = true;
    this.nukeTimer = 30000;
};


TwoPlayerLevel.prototype.start = function() {
    this.backgroundCanvas = document.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d")

    this.backgroundCanvas.width= 900;
    this.backgroundCanvas.height= 900;

    this.bombard1 = new Bombard(this.backgroundCanvas, this, 1, "Player 1", 3)
    this.bombards.push(this.bombard1)
    this.bombard2 = new Bombard(this.backgroundCanvas, this, 2, "Player 2", 3)
    this.bombards.push(this.bombard2)

    this.bombard1.getImage();
    this.bombard2.getImage();
    this.bombard1.getName("Player 1");
    this.bombard2.getName("Player 2");
    this.bombard1.getEnemyName();
    this.bombard2.getEnemyName();

    this.bombards.forEach(bombard=>{
        bombard.getPosition();
        bombard.draw()
    })

    this.handleKeyDown = function(e) {
        if (e.keyCode === 87) {            
            this.bombard1.isMovingUp = true;
            this.bombard1.move("moveUp");
        } else if (e.keyCode === 83) {
            this.bombard1.isMovingDown = true;
            this.bombard1.move("moveDown")  
        } else if (e.keyCode === 65) {
            this.bombard1.isMovingLeft = true;
            if(this.bombard1.lookingRight){
                this.bombard1.changeLookingDirection();
            }
            this.bombard1.move("moveLeft")  
        } else if (e.keyCode === 68) {
            this.bombard1.isMovingRight = true;
            if(!this.bombard1.lookingRight){
                this.bombard1.changeLookingDirection();
            }
            this.bombard1.move("moveRight")    
        } else if (e.keyCode === 32) {
            this.bombard1.placeNoteBomb(this.backgroundCanvas)
        } else if (e.keyCode === 38) {
            this.bombard2.isMovingUp = true;
            this.bombard2.move("moveUp")  
        } else if (e.keyCode === 40) {
            this.bombard2.isMovingDown = true;
            this.bombard2.move("moveDown")  
        } else if (e.keyCode === 39) {
            this.bombard2.isMovingRight = true;
            if(!this.bombard2.lookingRight){
                this.bombard2.changeLookingDirection();
            }
            this.bombard2.move("moveRight")
        } else if (e.keyCode === 37) {
            this.bombard2.isMovingLeft = true;
            if(this.bombard2.lookingRight) {
                this.bombard2.changeLookingDirection();
            }
            this.bombard2.move("moveLeft")  
        } else if (e.keyCode === 13) {
            this.bombard2.placeNoteBomb(this.backgroundCanvas) 
        }
    }
    document.body.addEventListener("keydown", this.handleKeyDown.bind(this))

    this.startLoop();
}




TwoPlayerLevel.prototype.clearBackgroundCanvas = function() {
    this.backgroundCtx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height) //!!! To change to gameCanvas
}


TwoPlayerLevel.prototype.placeWalls = function () {
        this.blockWalls.forEach(blockwallrow => {
            blockwallrow.forEach(blockwall =>{
                if(blockwall) {
                    let blockwallInstance = new BlockWall(this.squareBrushX, this.squareBrushY);
                    blockwallInstance.getImage();
                    this.blockWallInstances.push(blockwallInstance);
                    this.backgroundCtx.drawImage(blockwallInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                    this.backgroundCtx.fill();
                }
                this.squareBrushX += 100
            })
        this.squareBrushY += 100
        this.squareBrushX = 0
    })
    this.squareBrushY = 0
}

TwoPlayerLevel.prototype.placeCards = function () {
    this.blockWalls.forEach(blockwallrow => {
        blockwallrow.forEach(blockwall =>{
            if(!blockwall) {
                if(Math.random()>0.9999) {
                    let cardInstance = new Heart(this.squareBrushX, this.squareBrushY, this);
                    cardInstance.getImage();
                    this.cardInstances.push(cardInstance);
                    this.backgroundCtx.drawImage(cardInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                    this.backgroundCtx.fill();
                } else if (Math.random()>0.9995) {
                    let cardInstance = new IllimitedBombs(this.squareBrushX, this.squareBrushY, this);
                    cardInstance.getImage();
                    this.cardInstances.push(cardInstance);
                    this.backgroundCtx.drawImage(cardInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                    this.backgroundCtx.fill();
                } else if (Math.random()>0.9995) {
                    let cardInstance = new InvulnerabilityCard(this.squareBrushX, this.squareBrushY, this);
                    cardInstance.getImage();
                    this.cardInstances.push(cardInstance);
                    this.backgroundCtx.drawImage(cardInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                    this.backgroundCtx.fill();
                } else if (Math.random()>0.999995) {
                    let cardInstance = new DeathCard(this.squareBrushX, this.squareBrushY, this);
                    cardInstance.getImage();
                    this.cardInstances.push(cardInstance);
                    this.backgroundCtx.drawImage(cardInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                    this.backgroundCtx.fill();
                }
            }
            this.squareBrushX += 100
        })
        this.squareBrushY += 100
        this.squareBrushX = 0
    })
    this.squareBrushY = 0
}

TwoPlayerLevel.prototype.removeBlockWalls = function() {
    this.blockWallInstances.splice(0, this.blockWallInstances.length)
}

TwoPlayerLevel.prototype.placeBrickWalls = function () {
        this.brickWalls.forEach(brickwallrow => {
            brickwallrow.forEach(brickwall =>{
                if(brickwall) {
                    let brickwallInstance = new BrickWall(this.squareBrushX, this.squareBrushY);
                    brickwallInstance.getImage();
                    this.brickWallInstances.push(brickwallInstance);
                    this.backgroundCtx.drawImage(brickwallInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                    this.backgroundCtx.fill();
                }
                this.squareBrushX += 100
            })
        this.squareBrushY += 100
        this.squareBrushX = 0
    })
    this.squareBrushY = 0;
}


TwoPlayerLevel.prototype.removeBrickWalls = function() {
    this.brickWallInstances.splice(0, this.brickWallInstances.length);
}

TwoPlayerLevel.prototype.updateStats = function(){
    if(!this.gameIsOver) {
        var player1LiveScoreEl = document.querySelector(".player-one-number-of-lives");
        player1LiveScoreEl.innerHTML = parseInt(this.bombard1.lives);
        var player2LiveScoreEl = document.querySelector(".player-two-number-of-lives");
        player2LiveScoreEl.innerHTML = parseInt(this.bombard2.lives);
        
        if(this.checkDraw(this.bombards)){
            this.gameIsOver = true;
            this.drawScreen();
        }
        if(!this.gameIsOver){
            this.bombards.forEach(bombard=>{
                if(bombard.lives <= 0) {
                    this.gameIsOver = true;
                    this.gameOver(bombard.enemysName);
                }
            })
        }
    }
}

TwoPlayerLevel.prototype.checkDraw = function (arrayOfBombards) {
    var resultArr =[]
    this.bombards.forEach(bombard=>{
        if(bombard.lives <= 0) {
            resultArr.push(true)
        }
    })
    return resultArr[0] && resultArr[1]
}

TwoPlayerLevel.prototype.nukeTimerFunc = function() {
    if(this.nukeTimer > 0){
        this.nukeTimer -= 100;
    } else {
        this.blockWalls.forEach(blockwallrow => {
            blockwallrow.forEach(blockwall =>{
                if(!blockwall) {
                    if(Math.random()>0.997) {
                        let noteBomb = new NoteBomb(this.backgroundCanvas, this.squareBrushX, this.squareBrushY);
                        noteBomb.getImage();
                        noteBomb.getTheGameYouNeed(this);
                        noteBomb.draw()
                        this.noteBombs.push(noteBomb);
                        this.backgroundCtx.drawImage(noteBomb.image, this.squareBrushX, this.squareBrushY, 100, 100);
                        this.backgroundCtx.fill();
                    }
                }
                this.squareBrushX += 100
            })
            this.squareBrushY += 100
            this.squareBrushX = 0
        })
        this.squareBrushY = 0
    }
    
}



TwoPlayerLevel.prototype.startLoop = function() {
    setInterval(()=>{
    // var loop =  function(){

         if(!this.gameIsOver) {
            this.clearBackgroundCanvas();

            
            this.placeBrickWalls();
            
            this.placeWalls();
            
            this.bombards.forEach(bombard=>{
                
                bombard.handleScreenCollision();
                
                bombard.handleBrickWallCollision();

                bombard.handleBlockWallCollision();

                //bombard.handleNoteBombCollision();       // Chains with other handle functions and puts bomber within walls

                // bombard.handleOtherPlayerCollision();    // Other player is not defined when some bombard moves
                
                bombard.draw();
                
                bombard.cardCollision();
                
                bombard.resetDirection();
            })

            this.nukeTimerFunc();

            this.placeCards();
    
            this.removeBrickWalls();

            this.removeBlockWalls();

            this.cardInstances.forEach(card=>{
                card.draw();
            })

            this.updateStats();
    
        }

    //     window.requestAnimationFrame(loop)
    // }.bind(this)
    }, 200)


    // loop();
}



TwoPlayerLevel.prototype.passOverGameOverCallback = function(callback){
    this.gameOverFunction = callback
}

TwoPlayerLevel.prototype.passOverDrawCallback = function(callback){
    this.gameDrawFunction = callback
}


TwoPlayerLevel.prototype.gameOver = function(winner) {
    var music = document.querySelector(".lvl4-and-multiplayer-music");
    music.pause();
    var music2 = document.querySelector(".win-song");
    music2.play();

    this.gameIsOver = true;
    this.gameOverFunction(winner)
}

TwoPlayerLevel.prototype.drawScreen = function() {
    var music = document.querySelector(".lvl4-and-multiplayer-music");
    music.pause();
    var music2 = document.querySelector(".win-music");
    music2.play();

    this.gameIsOver = true;
    this.gameDrawFunction()
}