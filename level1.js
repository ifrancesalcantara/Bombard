function Level1() {
    this.squareBrushX = 0;
    this.squareBrushY = 0;
    this.backgroundCanvas = null;
    this.backgroundCtx = null;
    this.brickWalls = null;
    this.blockWalls = [[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]];
    this.blockWallInstances = [];
    this.brickWalls = [[1,0,1,0,1,0,1,0,0],[0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1],[0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1],[0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1],[0,0,0,0,0,0,0,0,0],[0,0,1,0,1,0,1,0,1]];
    this.brickWallInstances = [];
    this.gameScreen = null;
    this.bombards = [];
    this.bombard = null;
    this.enemyDogs = //[[0,1,0,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,1],[0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,0,0,0],[0,0,0,1,0,0,0,1,0]]
    this.enemyDogInstances = []
    this.gameIsOver = false;
    this.noteBombs = [];
    this.goalForPlayer1 = {
        x: 800,
        y: 0,
        size: 100,
        isGoal: true,
    }
    this.gameOverFunction
    this.addCoinFunction;
    this.coins = 0;
};


Level1.prototype.start = function() {
    this.backgroundCanvas = document.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d")

    this.backgroundCanvas.width= 900;
    this.backgroundCanvas.height= 900;

    this.bombard = new Bombard(this.backgroundCanvas, this, 1);
    this.bombards.push(this.bombard)

    this.bombard.getPosition();
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
            console.log(this.bombard.isMovingLeft);
            this.bombard.isMovingLeft = true;
            console.log(this.bombard.isMovingLeft);
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
            console.log(this.noteBombs);
        } else if (e.keyCode === 81) {
            console.log("Special Move(?)");
        }
    }
    document.body.addEventListener("keydown", this.handleKeyDown.bind(this))

    
    this.startLoop();
}




Level1.prototype.clearBackgroundCanvas = function() {
    this.backgroundCtx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height) //!!! To change to gameCanvas
}


Level1.prototype.placeWalls = function () {
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

    // this.bombards.forEach(bombard=>{        
    //     bombard.setMovementAllowance();
    //     console.log(this.blockWallInstances)        //!!! here array full, but when jump to bombard's function, it's empty as if line 120 already ran
    // })
}

Level1.prototype.removeBlockWalls = function() {
    this.blockWallInstances.splice(0, this.blockWallInstances.length)
}


Level1.prototype.placeBrickWalls = function () {
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

Level1.prototype.removeBrickWalls = function() {
    this.brickWallInstances.splice(0, this.brickWallInstances.length);
}

Level1.prototype.placeDogs =  function() {
    this.enemyDogs.forEach(enemyDogRow => {
        enemyDogRow.forEach(dog =>{
            if(dog) {
                let dogInstance = new Dog(this.backgroundCanvas, this.squareBrushX, this.squareBrushY);
                dogInstance.getImage();
                this.enemyDogInstances.push(dogInstance);
                this.backgroundCtx.drawImage(dogInstance.image, this.squareBrushX, this.squareBrushY, 100, 100);
                this.backgroundCtx.fill();
            }
            this.squareBrushX += 100
        })
    this.squareBrushY += 100
    this.squareBrushX = 0
})
this.squareBrushY = 0;

this.brickWallInstances.splice(0, this.brickWallInstances.length);
}



Level1.prototype.updateStats = function(){
    var liveScoreEl = document.querySelector(".number-of-lives");
    liveScoreEl.innerHTML = parseInt(this.bombard.lives)
    var coinScoreEl = document.querySelector(".number-of-coins")
    coinScoreEl.innerHTML = this.coins

    this.bombards.forEach(bombard=>{
        if(bombard.lives <= 0) {
            this.gameIsOver = true;
            this.gameOver(bombard.name);
        }
    })
}





Level1.prototype.startLoop = function() {
    setInterval(()=>{
        if(!this.gameIsOver) {
        // var loop = function() {
            this.clearBackgroundCanvas();

            this.placeBrickWalls();


            this.placeWalls();


            this.bombards.forEach(bombard=>{

                bombard.draw();
    
                bombard.handleScreenCollision();

                bombard.handleBrickWallCollision();

                bombard.handleBlockWallCollision();
                
                bombard.handleBurn();

                bombard.handleArrivingToGoal();

                bombard.resetDirection();
            })




            this.enemyDogInstances.forEach(dog=>{
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



Level1.prototype.passOverGameOverCallback = function(callback){
    this.gameOverFunction = callback
}


Level1.prototype.passOverAddCoinCallback = function(callback) {
    this.addCoinFunction = callback
}

Level1.prototype.addCoin = function () {
    this.coins++
}



Level1.prototype.gameOver = function(winner){
    this.gameIsOver = true;
    this.gameOverFunction(winner)
}