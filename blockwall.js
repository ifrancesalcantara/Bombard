class BlockWall{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 100;
        this.image = null;
    }
    draw() {
    
        let blockwalL = this.image
    
        blockwalL.onload = function() {
            this.backgroundCtx.drawImage(blockwalL, this.x, this.y, 100, 100);
            this.backgroundCtx.fill();
        }.bind(this)
    }
    
    
    getImage() {
        let image = new Image();
        image.src = "./img/Obstacles/blockWall.JPG";
        this.image = image;
    }

}
