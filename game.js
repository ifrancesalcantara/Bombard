function Game() {
    this.squareBrushX = 0;
    this.squareBrushY = 0;
    this.backgroundCanvas = null;
    this.backgroundCtx = null;
    this.brickWalls = null;
    this.blockWalls = [[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]];
    this.blockWallInstances = [];
    this.brickWalls = [[1,1,1,1,1,1,1,0,0],[1,0,1,0,1,0,1,0,0],[1,1,1,1,1,1,1,1,1],[1,0,1,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1],[1,0,1,0,1,0,1,0,1],[1,1,1,1,1,1,1,1,1],[0,0,1,0,1,0,1,0,1],[0,0,1,1,1,1,1,1,1]];
    this.brickWallInstances = [];
    this.gameScreen = null;
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
    this.inGame = false
};


Game.prototype.start = function() {
    this.backgroundCanvas = document.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d")

    this.backgroundCanvas.width= 900;  /* !!! what is going on here?*/
    this.backgroundCanvas.height= 900;

    this.bombard = new Bombard(this.backgroundCanvas, this, 1)
    this.bombard.draw()


    this.handleKeyDown = function(e) {
        if (e.keyCode === 87) {
            // this.blockWallInstances.forEach(blockwall=>{             // !!! Can't get collisions
            //     if(this.bombard.didCollide(blockwall)) {
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
    // this.blockWalls.forEach((blockwallrow)=>{
    //     blockwallrow.forEach((blockWallerino)=>{
    //         if(blockWallerino){
    //             console.log("im goin");
    //             this.squareBrushX += 100
    //             blockwalL.onload = function() {
        //                 console.log(this.squareBrushX);
        //                 this.backgroundCtx.drawImage(blockwalL, this.squareBrushX, this.squareBrushY, 100, 100);
        //                 this.backgroundCtx.fill();
        //             }.bind(this)
        //             console.log("i printed and increased");
        //         } else {
            //             this.squareBrushX += 100
            //             console.log("passed & x+");
    //         }
    //     })
    //     this.squareBrushX = 0
    //     console.log("and I cleaned after the row");
    // })
    // blockwalL.onload = function() {
    //     console.log(this.squareBrushX);
    //     this.backgroundCtx.drawImage(blockwalL, this.squareBrushX, this.squareBrushY, 100, 100);
    //     this.backgroundCtx.fill();
    // }.bind(this)
    // this.blockWallsWithoutMatrix.forEach(function(blockwall){
    //     const blockwALL = new BLockWall(blockwall[0], blockwall[1])
    //     blockwALL.draw();
    // })
    // for(let i = 0; i < this.blockWalls.length; i++) {
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

Game.prototype.updateStats = function(){
    var liveScoreEl = document.querySelector(".number-of-lives");
    liveScoreEl.innerHTML = parseInt(this.bombard.lives)
}





Game.prototype.startLoop = function() {
    setInterval(()=>{
        if(this.inGame) {
        // var loop = function() {
            this.clearBackgroundCanvas();
    
            this.bombard.draw();
    
            this.bombard.handleScreenCollision();
    
            // this.bombard.handleBurn();
            
            this.bombard.handleArrivingToGoal();
            
            this.placeWalls();

            // this.placeBrickWalls();
    
            this.updateStats();
    
        }
    }, 500)
    // window.requestAnimationFrame(loop);
}



Game.prototype.passOverGameOverCallback = function(callback){
    this.gameOverFunction = callback
}



Game.prototype.gameOver = function(){
    this.gameIsOver = true;
    this.gameOverFunction()
}