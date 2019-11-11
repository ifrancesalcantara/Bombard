class IllimitedBombs {
    constructor(x, y, game){
        this.x = x;
        this.y=y;
        this.image
        this.game = game
        this.size = 100
        this.identifier=Math.random();
        this.type = "illimitedBombs"
    }
    getImage() {
        let image = new Image();
        image.src ="./img/cards/unlimitedBombsTrue.png"
        this.image = image;
    }
    
    draw() {
        this.game.backgroundCtx.drawImage(this.image, this.x, this.y, this.size, this.size);
        this.game.backgroundCtx.fill();
    }
    
    effect(player) {
        player.hasIllimitedBombs = true;
        var effect = setInterval(()=>{
            player.canPlaceBomb = true;
        }, 500)
        setTimeout(()=>{
            clearInterval(effect)
            player.hasIllimitedBombs = false;
        }, 8000)
    }
    
    deleteYourself() {
        this.game.cardInstances.forEach(card=>{
            if(card.identifier==this.identifier) {
                this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1)
            }
        })
    }
}

