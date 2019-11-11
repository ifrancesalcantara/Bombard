class DeathCard{
    constructor(x, y, game){
        this.x = x;
        this.y=y;
        this.image
        this.game = game
        this.size = 100
        this.identifier=Math.random();
        this.type = "deathCard"
    }
    getImage() {
        let image = new Image();
        image.src ="./img/cards/deathCard.png"
        this.image = image;
    }
    
    draw() {
        this.game.backgroundCtx.drawImage(this.image, this.x, this.y, this.size, this.size);
        this.game.backgroundCtx.fill();
    }
    
    effect(player) {
        player.lives -= player.lives
    }
    
    deleteYourself() {
        this.game.cardInstances.forEach(card=>{
            if(card.identifier==this.identifier) {
                this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1)
            }
        })
    }
}

