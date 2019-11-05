function Heart(x, y, game){
    this.x = x;
    this.y=y;
    this.image
    this.game = game
    this.size = 100
    this.identifier=Math.random();
}


Heart.prototype.getImage = function() {
    let image = new Image();
    image.src ="/img/PinClipart.com_perfect-clipart_163602.png"
    this.image = image;
}

Heart.prototype.draw = function() {
    this.game.backgroundCtx.drawImage(this.image, this.x, this.y, this.size, this.size)
    this.game.backgroundCtx.fill()
}

Heart.prototype.effect = function(player) {
    player.lives += 1
}

Heart.prototype.deleteYourself = function() {
    this.game.cardInstances.forEach(card=>{
        if(card.identifier==this.identifier){
            this.game.cardInstances.splice(this.game.cardInstances.indexOf(card), this.game.cardInstances.indexOf(card)+1)
        }
    })
}