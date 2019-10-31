function Game() {
    this.squareBrushX = 300;
    this.squareBrushY = 0;
    this.backgroundCanvas = null;
    this.backgroundCtx = null
    this.backgroundTills = [["topLeftCorner", "top1", "top2", "grass", "top2", "top1", "top2", "top1", "top2", "top1", "top2"],["dirt", "left2"]]
    this.gameScreen = null;
    this.gameCanvas = null;
    this.gameCtx = null;
    this.bombard = null;
    this.gameIsOver = false;
};

Game.prototype.start = function() {
    this.backgroundCanvas = document.body.querySelector(".background-canvas")
    this.backgroundCtx = this.backgroundCanvas.getContext("2d");
    
    this.backgroundWidth = this.backgroundCanvas.offsetWidth
    this.backgroundHeight = this.backgroundCanvas.offsetHeight
    this.backgroundCanvas.setAttribute("width", this.backgroundWidth);
    this.backgroundCanvas.setAttribute("height", this.backgroundHeight);
    
    const topLeftCorner = document.createElement("img")
    const top1Till = document.createElement("img")
    const top2Till = document.createElement("img")
    const topRightCorner = document.createElement("img")
    const right1Till = document.createElement("img")
    const right2Till = document.createElement("img")
    const bottomRightCorner = document.createElement("img")
    const bottom1Till = document.createElement("img")
    const bottom2Till = document.createElement("img")
    const bottomLeftCorner = document.createElement("img")
    const left1Till = document.createElement("img")
    const left2Till = document.createElement("img")
    const dirt = document.createElement("img")
    const grass = document.createElement("img")

    topLeftCorner.src='img/background/Top left corner.JPG'
    top1Till.src = "img/background/top1.JPG"
    top2Till.src = "img/background/top2.JPG"
    topRightCorner.src = "img/background/Top right corner.JPG"
    right1Till.src = "img/background/right1.JPG"
    right2Till.src = "img/background/right2.JPG"
    bottomRightCorner.src = "img/background/bot-right corner.JPG"
    bottom1Till.src = "img/background/bot1.JPG"
    bottom2Till.src = "img/background/bot2.JPG"
    bottomLeftCorner.src = "img/background/bot-left corner.JPG"
    left1Till.src = "img/background/left1.JPG"
    left2Till.src = "img/background/left2.JPG"
    dirt.src = "img/background/dirt.JPG"
    grass.src = "img/background/grass.JPG"

    for (let i = 0; i < this.backgroundTills.length; i++){
        console.log(i);
        for (let j = 0; j < this.backgroundTills[i].length; j++){
            if (this.backgroundTills[i][j] == "topLeftCorner") {
                topLeftCorner.onload = function() {
                    this.backgroundCtx.drawImage(topLeftCorner, this.squareBrushX, this.squareBrushY, 100, 100)
                    this.squareBrushX += 100
                    console.log("Printing topLeftCorner on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "top1") {
                top1Till.onload = function() {
                    console.log("Printing top1Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(top1Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "top2") {
                top2Till.onload = function() {
                    console.log("Printing top2Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(top2Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "topRightCorner") {
                topRightCorner.onload = function() {
                    console.log("Printing topRightCorner on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(topRightCorner, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "right1") {
                right1Till.onload = function() {
                    console.log("Printing right1Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(right1Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "right2") {
                right2Till.onload = function() {
                    console.log("Printing right2Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(right2Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "botRightCorner") {
                bottomRightCorner.onload = function() {
                    console.log("Printing bottomRightCorner on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(bottomRightCorner, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "bot1") {
                bottom1Till.onload = function() {
                    console.log("Printing bottom1Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(bottom1Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "bot2") {
                bottom2Till.onload = function() {
                    console.log("Printing bottom2Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(bottom2Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "botLeftCorner") {
                bottomLeftCorner.onload = function() {
                    console.log("Printing bottomLeftCorner on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(bottomLeftCorner, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "left1") {
                left1Till.onload = function() {
                    console.log("Printing left1Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(left1Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "left2") {
                left2Till.onload = function() {
                    console.log("Printing left2Till on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(left2Till, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "dirt") {
                dirt.onload = function() {
                    console.log("Printing dirt on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(dirt, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            } else if (this.backgroundTills[i][j] == "grass") {
                grass.onload = function() {
                    console.log("Printing grass on x: "+this.squareBrushX +", y: "+this.squareBrushY+" for line " +i+" and tile number #"+ j);
                    this.squareBrushX += 100
                    this.backgroundCtx.drawImage(grass, this.squareBrushX, this.squareBrushY, 100, 100)
                }.bind(this)
            }
        }
    }
    this.gameCanvas = document.body.querySelector(".game-canvas")
    this.gameCtx = this.gameCanvas.getContext("2d");





    this.bombard = new Bombard(this.backgroundCanvas)
    this.bombard.draw()




    this.handleKeyDown = function(e) {
        if (e.keyCode === 87) {
            console.log("Up");
            this.bombard.move("moveUp")        
        } else if (e.keyCode === 83) {
            console.log("Down");
            this.bombard.move("moveDown")  
        } else if (e.keyCode === 65) {
            console.log("Left");
            this.bombard.move("moveLeft")  
        } else if (e.keyCode === 68) {
            console.log("Right");
            this.bombard.move("moveRight")  
        } else if (e.keyCode === 32) {
            console.log("Bomb");
        } else if (e.keyCode === 81) {
            console.log("Special Move(?)");
        }
    }
    document.body.addEventListener("keydown", this.handleKeyDown.bind(this))




    this.startLoop();
}







Game.prototype.startLoop = function() {
    setInterval(()=>{
    // var loop = function() {
        this.backgroundCtx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height) //!!! To change to gameCanvas
        console.log("looping");
        this.bombard.draw();
    }, 500)
    // window.requestAnimationFrame(loop);
}