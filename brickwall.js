class BrickWall {
    constructor(x, y, game){
        this.x = x;
        this.y = y;
        this.size = 100;
        this.image = null;
        this.identifier = Math.random();
        this.game = game
    }
    draw() {
    
        let brickWall = new Image();
        brickWall.src = "./img/Obstacles/brickWall.JPG"
    
        brickWall.onload = function() {
            this.backgroundCtx.drawImage(brickWall, this.x, this.y, 100, 100);
            this.backgroundCtx.fill();
        }.bind(this)
    }
    
    
    getImage() {
        let image = new Image();
        image.src = "./img/Obstacles/brickWall.JPG";
        this.image = image;
    }
    
    
    breakDown() {
        //draw breaking wall in its position
    
        if(!this.game.isPvP) {                                       //Adds coin to main
            this.game.passOverAddCoinCallback();
            this.game.addCoin();
        }
    
        this.game.brickWallInstances.forEach(brickwall => {
            if (brickwall){
    
            }
        });
    }
}

