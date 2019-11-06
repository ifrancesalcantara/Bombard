function IllimitedBombs(x, y, game){
    this.x = x;
    this.y=y;
    this.image
    this.game = game
    this.size = 100
    this.identifier=Math.random();
    this.type = "illimitedBombs"
}


IllimitedBombs.prototype.getImage = function() {
    let image = new Image();
    image.src ="/img/cards/illimitedBombsCardTrue.png"
    this.image = image;
}

IllimitedBombs.prototype.draw = function() {
    this.game.backgroundCtx.drawImage(this.image, this.x, this.y, this.size, this.size);
    this.game.backgroundCtx.fill();
}

IllimitedBombs.prototype.effect = function(player) {
    player.hasIllimitedBombs = true;
    setTimeout(()=>{
        player.hasIllimitedBombs = false;
    }, 10000)
}

IllimitedBombs.prototype.deleteYourself = function() {
    this.game.cardInstances.forEach(card=>{
        if(card.identifier==this.identifier) {
            this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), 1)
        }
    })
}