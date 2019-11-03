function Game() {
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


Game.prototype.start = function() {
    this.backgroundCanvas = document.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d")

    this.backgroundCanvas.width= 900;
    this.backgroundCanvas.height= 900;

    this.bombard = new Bombard(this.backgroundCanvas, this, 1);
    this.bombards.push(this.bombard)

    this.bombard.getPosition();
    this.bombard.getName("Manolito");
    this.bombard.draw()


    this.handleKeyDown = function(e) {
        if (e.keyCode === 87) {
            // this.blockWallInstances.forEach(blockwall=>{ 
            //     console.log("anybody there?");            // !!! Can't get collisions
            //     if(this.bombard.didCollide(blockwall)) {
            //         console.log("collision!");

            //     } else { 
                    this.bombard.move("moveUp")
                // }       
            // })
        } else if (e.keyCode === 83) {
            this.bombard.move("moveDown")  
        } else if (e.keyCode === 65) {
            this.bombard.move("moveLeft")  
        } else if (e.keyCode === 68) {
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




Game.prototype.clearBackgroundCanvas = function() {
    this.backgroundCtx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height) //!!! To change to gameCanvas
}


Game.prototype.placeWalls = function () {
        this.blockWalls.forEach(blockwallrow => {
            blockwallrow.forEach((blockwall, index) =>{
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

    this.blockWallInstances.splice(0, this.blockWallInstances.length)
}


Game.prototype.placeBrickWalls = function () {

        this.brickWalls.forEach(brickwallrow => {
            brickwallrow.forEach((brickwall, index) =>{
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

    this.brickWallInstances.splice(0, this.brickWallInstances.length);
}

Game.prototype.updateStats = function(){
    var liveScoreEl = document.querySelector(".number-of-lives");
    liveScoreEl.innerHTML = parseInt(this.bombard.lives)
    var coinScoreEl = document.querySelector(".number-of-coins")
    coinScoreEl.innerHTML = this.coins

    this.bombards.forEach(bombard=>{
        console.log(`I am ${bombard.name} and I have ${bombard.lives}`);
        if(bombard.lives <= 0) {
            this.gameIsOver = true;
            this.gameOver(bombard.name);
        }
    })
}





Game.prototype.startLoop = function() {
    setInterval(()=>{
        if(!this.gameIsOver) {
        // var loop = function() {
            this.clearBackgroundCanvas();
    
            this.bombards.forEach(bombard=>{
                bombard.draw();
    
                bombard.handleScreenCollision();
                
                bombard.handleBurn();

                bombard.handleArrivingToGoal();
            })

            this.placeWalls();

            this.placeBrickWalls();
    
            this.updateStats();
    
        }
    }, 200)
    // window.requestAnimationFrame(loop);
}



Game.prototype.passOverGameOverCallback = function(callback){
    this.gameOverFunction = callback
}


Game.prototype.passOverAddCoinCallback = function(callback) {
    this.addCoinFunction = callback
}

Game.prototype.addCoin = function () {
    this.coins++
}



Game.prototype.gameOver = function(winner){
    this.gameIsOver = true;
    this.gameOverFunction(winner)
}