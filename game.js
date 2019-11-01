function Game() {
    this.squareBrushX = 0;
    this.squareBrushY = 0;
    this.backgroundCanvas = null;
    this.backgroundCtx = null
    this.backgroundTills = [["topLeftCorner", "top1", "top2", "grass", "top2", "top1", "top2", "top2"],["dirt", "left2"]]
    this.brickWalls = null;
    this.blockWalls = [[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]];
    this.gameScreen = null;
    this.gameCanvas = null;
    this.gameCtx = null;
    this.bombard = null;
    this.gameIsOver = false;
    this.noteBombs = [];
    
};


Game.prototype.start = function() {
    this.backgroundCanvas = document.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d")

    this.backgroundCanvas.width= 900;  /* !!! what is going on here?*/
    this.backgroundCanvas.height= 900;

    console.log(this.backgroundCanvas);
    this.bombard = new Bombard(this.backgroundCanvas, this)  //!!! Move Bombard to gameCanvas size and position change
    this.bombard.draw()


    this.handleKeyDown = function(e) {
        if (e.keyCode === 87) {
            this.bombard.move("moveUp")        
        } else if (e.keyCode === 83) {
            this.bombard.move("moveDown")  
        } else if (e.keyCode === 65) {
            this.bombard.move("moveLeft")  
        } else if (e.keyCode === 68) {
            this.bombard.move("moveRight")  
        } else if (e.keyCode === 32) {
            this.bombard.placeNoteBomb(this.backgroundCanvas)
        } else if (e.keyCode === 81) {
            console.log("Special Move(?)");
        }
    }
    document.body.addEventListener("keydown", this.handleKeyDown.bind(this))

    this.placeWalls();
    console.log(`The background canvas is ${this.backgroundCanvas.height}*${this.backgroundCanvas.width}px`);
    this.startLoop();
}




Game.prototype.clearBackgroundCanvas = function() {
    this.backgroundCtx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height) //!!! To change to gameCanvas
}


Game.prototype.placeWalls = function () {
    let blockwall = new Image();
    blockwall.src = "img/Obstacles/blockWall.JPG"
    this.blockWalls.forEach(row=>{
        row.forEach(BLOCKwall=>{
            if(BLOCKwall){
                this.backgroundCtx.drawImage(blockwall, this.squareBrushX, this.squareBrushY, 100, 100)
                console.log(`Printed blockwall in coordinates x:${this.squareBrushX} y:${this.squareBrushY}`);
            }
        })
    })
}






Game.prototype.startLoop = function() {
    setInterval(()=>{
    // var loop = function() {
        this.clearBackgroundCanvas();

        this.bombard.draw();

        this.bombard.handleScreenCollision();
    }, 500)
    // window.requestAnimationFrame(loop);
}