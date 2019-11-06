function DeathCard(x, y, game){
    this.x = x;
    this.y=y;
    this.image
    this.game = game
    this.size = 100
    this.identifier=Math.random();
    this.type = "deathCard"
}


DeathCard.prototype.getImage = function() {
    let image = new Image();
    image.src ="/img/cards/deathCard.png"
    this.image = image;
}

DeathCard.prototype.draw = function() {
    this.game.backgroundCtx.drawImage(this.image, this.x, this.y, this.size, this.size);
    this.game.backgroundCtx.fill();
}

DeathCard.prototype.effect = function(player) {
    player.lives -= player.lives
}

DeathCard.prototype.deleteYourself = function() {
    this.game.cardInstances.forEach(card=>{
        if(card.identifier==this.identifier) {
            this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1)
        }
    })
}