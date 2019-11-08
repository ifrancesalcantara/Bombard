function Level3() {
    this.squareBrushX = 0;
    this.squareBrushY = 0;
    this.backgroundCanvas = null;
    this.backgroundCtx = null;
    this.blockWalls = [[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]];
    this.blockWallInstances = [];
    this.brickWalls = [[1,1,0,0,1,0,1,0,0],[1,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,1,0,0],[0,0,0,0,1,0,1,0,0],[0,0,0,0,0,0,0,0,1],[0,0,0,1,1,0,1,0,0],[0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,0,0,1],[0,0,0,1,1,0,1,0,1]];
    this.brickWallInstances = [];
    this.gameScreen = null;
    this.bombards = [];
    this.bombard = null;
    this.enemyXDogs = [[0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
    this.enemyYDogs = [[0,0,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,1],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,1],[0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0]]
    // this.enemyDogs = [[0,1,0,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,1],[0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,0,0],[0,0,0,1,0,0,0,1,0]]
    this.listOfAllEnemies = []
    this.cardInstances = []
    this.gameIsOver = false;
    this.noteBombs = [];
    this.goalForPlayer1 = {
        x: 800,
        y: 0,
        size: 100,
        isGoal: true,
    }
    this.gameOverFunction;
    this.gameOverWinFunction;
    this.addCoinFunction;
    this.coins = 0;
};


Level3.prototype.start = function() {
    this.backgroundCanvas = document.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d")

    this.backgroundCanvas.width= 900;
    this.backgroundCanvas.height= 900;

    this.bombard = new Bombard(this.backgroundCanvas, this, 1, "Player1", 1);
    this.bombards.push(this.bombard)

    this.bombard.getPosition();
    this.bombard.getImage()
    this.bombard.getName("Manolito");
    this.bombard.draw();

    this.placeDogs()


    this.handleKeyDown = function(e) {
        if (e.keyCode === 87) {
            this.bombard.isMovingUp = true;
            this.bombard.move("moveUp")
        } else if (e.keyCode === 83) {
            this.bombard.isMovingDown = true;
            this.bombard.move("moveDown")  
        } else if (e.keyCode === 65) {
            this.bombard.isMovingLeft = true;
            if(this.bombard.lookingRight){
                this.bombard.changeLookingDirection();
            }
            this.bombard.move("moveLeft")  
        } else if (e.keyCode === 68) {
            this.bombard.isMovingRight = true;
            if(!this.bombard.lookingRight){
                this.bombard.changeLookingDirection();
            }
            this.bombard.move("moveRight")  
        } else if (e.keyCode === 32) {
            this.bombard.placeNoteBomb(this.backgroundCanvas)
        }
    }
    document.body.addEventListener("keydown", this.handleKeyDown.bind(this))

    this.startLoop();
}




Level3.prototype.clearBackgroundCanvas = function() {
    this.backgroundCtx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height) //!!! To change to gameCanvas
}


Level3.prototype.placeWalls = function () {
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

Level3.prototype.removeBlockWalls = function() {
    this.blockWallInstances.splice(0, this.blockWallInstances.length)
}


Level3.prototype.placeBrickWalls = function () {
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

Level3.prototype.removeBrickWalls = function() {
    this.brickWallInstances.splice(0, this.brickWallInstances.length);
}

Level3.prototype.placeDogs =  function() {
    this.enemyXDogs.forEach(enemyDogRow => {
        enemyDogRow.forEach(dog =>{
            if(dog) {
                let dogInstance = new Dog(this.backgroundCanvas, this.squareBrushX, this.squareBrushY, "x", this);
                dogInstance.getImage();
                this.listOfAllEnemies.push(dogInstance);
                this.backgroundCtx.drawImage(dogInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                this.backgroundCtx.fill();
            }
            this.squareBrushX += 100
        })
    this.squareBrushY += 100
    this.squareBrushX = 0
})
this.squareBrushY = 0;

this.enemyYDogs.forEach(enemyDogRow => {
    enemyDogRow.forEach(dog =>{
        if(dog) {
            let dogInstance = new Dog(this.backgroundCanvas, this.squareBrushX, this.squareBrushY, "y", this);
            dogInstance.getImage();
            this.listOfAllEnemies.push(dogInstance);
            this.backgroundCtx.drawImage(dogInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
            this.backgroundCtx.fill();
        }
        this.squareBrushX += 100
    })
this.squareBrushY += 100
this.squareBrushX = 0
})
this.squareBrushY = 0;
}



Level3.prototype.updateStats = function() {
    if(!this.gameIsOver){
        var liveScoreEl = document.querySelector(".number-of-lives");
        liveScoreEl.innerHTML = parseInt(this.bombard.lives)
    
    
        if(this.bombard.lives <= 0) {
            this.gameIsOver = true;
            this.gameOver(this.bombard.name);
        }
    }
}





Level3.prototype.startLoop = function() {
    setInterval(()=>{
        if(!this.gameIsOver) {
            this.clearBackgroundCanvas();

            this.placeBrickWalls();


            this.placeWalls();


            this.bombards.forEach(bombard=>{
    
                bombard.handleDogBite();

                bombard.handleScreenCollision();

                bombard.handleBrickWallCollision();

                bombard.handleBlockWallCollision();

                bombard.draw();

                bombard.handleArrivingToGoal();

                bombard.resetDirection();
            })

            this.listOfAllEnemies.forEach(dog=>{
                dog.getImage()
                dog.move();
                dog.draw();
            })

            this.removeBrickWalls();

            this.removeBlockWalls();
    
            this.updateStats();
    
        }
    }, 200)
    // window.requestAnimationFrame(loop);
}



Level3.prototype.passOverGameOverCallback = function(callback){
    this.gameOverFunction = callback;
}

Level3.prototype.passOverVameOverWinCallback = function(callback) {
    this.gameOverWinFunction = callback;
}


Level3.prototype.passOverAddCoinCallback = function(callback) {
    this.addCoinFunction = callback
}

Level3.prototype.addCoin = function () {
    this.coins++
}



Level3.prototype.gameOver = function(winner) {
    var music = document.querySelector(".lvl3-music");
    music.pause();

    this.gameIsOver = true;
    this.gameOverFunction(winner)
}

Level3.prototype.gameOverWin = function() {
    var music = document.querySelector(".lvl3-music");
    music.pause();
    var music2 = document.querySelector(".win-song");
    music2.play();

    this.gameIsOver = true;
    this.gameOverWinFunction();
}