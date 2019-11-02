function TwoPlayerLevel() {
    this.squareBrushX = 0;
    this.squareBrushY = 0;
    this.backgroundCanvas = null;
    this.backgroundCtx = null;
    this.brickWalls = null;
    this.blockWalls = [[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]];
    this.blockWallInstances = [];
    this.brickWalls = [[0,1,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,0],[0,1,0,1,0,1,0,1,0],[1,0,1,0,1,0,1,0,1],[0,1,0,1,0,1,0,1,0],[1,0,1,0,1,0,1,0,1],[0,1,0,1,0,1,0,1,0],[0,0,1,0,1,0,1,0,1],[0,0,0,1,0,1,0,1,0]];
    this.brickWallInstances = [];
    this.gameScreen = null;
    this.bombard1 = null;
    this.bombard2 = null;
    this.gameIsOver = false;
    this.noteBombs = [];
    this.goalForPlayer1 = {
        x: 800,
        y: 0,
        size: 100,
        isGoal: true,
    }
    this.gameOverFunction
    this.inGame = false
};


TwoPlayerLevel.prototype.start = function() {
    this.backgroundCanvas = document.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d")

    this.backgroundCanvas.width= 900;
    this.backgroundCanvas.height= 900;

    this.bombard1 = new Bombard(this.backgroundCanvas, this, 1)
    this.bombard1.getPosition();
    this.bombard1.draw()

    this.bombard2 = new Bombard(this.backgroundCanvas, this, 2)
    this.bombard2.getPosition();
    this.bombard2.draw()


    this.handleKeyDown = function(e) {
        if (e.keyCode === 87) {
            // this.blockWallInstances.forEach(blockwall=>{ 
            //     console.log("anybody there?");            // !!! Can't get collisions
            //     if(this.bombard1.didCollide(blockwall)) {
            //         console.log("collision!");

            //     } else { 
                    this.bombard1.move("moveUp")
                // }       
            // })
        } else if (e.keyCode === 83) {
            this.bombard1.move("moveDown")  
        } else if (e.keyCode === 65) {
            this.bombard1.move("moveLeft")  
        } else if (e.keyCode === 68) {
            this.bombard1.move("moveRight")  
        } else if (e.keyCode === 32) {
            this.bombard1.placeNoteBomb(this.backgroundCanvas)
            console.log(this.noteBombs);
        } else if (e.keyCode === 81) {
            console.log("Special Move(?)");
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


TwoPlayerLevel.prototype.placeBrickWalls = function () {

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

TwoPlayerLevel.prototype.updateStats = function(){
    var liveScoreEl = document.querySelector(".number-of-lives");
    liveScoreEl.innerHTML = parseInt(this.bombard1.lives)
}





TwoPlayerLevel.prototype.startLoop = function() {
    setInterval(()=>{
        if(this.inGame) {
        // var loop = function() {
            this.clearBackgroundCanvas();
            
            this.bombard1.draw();
    
            this.bombard1.handleScreenCollision();
    
            // this.bombard1.handleBurn();
            
            this.bombard1.handleArrivingToGoal();

            this.bombard2.draw();
            
            this.placeWalls();

            this.placeBrickWalls();
    
            this.updateStats();
    
        }
    }, 500)
    // window.requestAnimationFrame(loop);
}



TwoPlayerLevel.prototype.passOverGameOverCallback = function(callback){
    this.gameOverFunction = callback
}



TwoPlayerLevel.prototype.gameOver = function(){
    this.gameIsOver = true;
    this.gameOverFunction()
}