function NoteBomb(canvas, x, y, bombard) {
    this.size=100;
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")
    this.stillTicking = true;
    this.chronometer = 2200;
    this.stillExploding = false;
    this.fireChronometer = 1500;
    this.explosionXAxis = null;
    this.explosionYAxis = null;
    this.bombard = bombard;
    this.identifier = Math.random()
    this.isNoteBomb = true;
    this.areaofEffectX = {x: this.x, y: this.y, size: 97/*xLength: null, yLength: 100*/}
    this.areaofEffectY = {x: null, y: null, xLength: 100, yLength: null}
}


NoteBomb.prototype.draw = function() {
    var existentialism = setInterval(()=>{
        if(this.stillTicking){
            var noteBomPic = new Image();
            noteBomPic.src="img/bomb/music-note-icon.svg"
            noteBomPic.onload = function() {
                this.ctx.drawImage(noteBomPic, this.x, this.y, this.size, this.size)
            }.bind(this)
            this.ticker();
        } else {
            clearInterval(existentialism)
        }
    }, 100)
}


NoteBomb.prototype.ticker = function() {
    if(this.chronometer>0) {
        var tickerCountdown = setTimeout(()=>{
            this.chronometer -= 100
        }, 100)
    } else {
        this.stillTicking = false;
        clearInterval(tickerCountdown);
        this.stillExploding = true;
        this.explode()
    }
}

// NoteBomb.prototype.drawExplosion() {

// }

NoteBomb.prototype.firetimer = function() {
    if(this.fireChronometer > 0) {
        var fireTickerCountdown = setTimeout(()=>{
            this.fireChronometer -= 100
        }, 100)
    } else {
        this.stillExploding = false;
        clearInterval(fireTickerCountdown);
    }
}

NoteBomb.prototype.explode = function() {
    var explosiestalism = setInterval(()=>{
        if(this.stillExploding) {
            if(this.bombard.game.inGame){
                console.log("printing fire");
                this.ctx.fillStyle = "red";
                this.ctx.rect(this.x-200, this.y, this.size+400, this.size);
                this.ctx.fill();
        
                this.ctx.fillStyle = "red";
                this.ctx.rect(this.x, this.y-200, this.size, this.size+400);
                this.ctx.fill();
                this.firetimer();
            }
        } else {
            clearInterval(explosiestalism)
            console.log("Bomb ended. I tried to clean fire");
            this.ctx.clearRect(this.x-200, this.y, this.size+400, this.size);
            this.ctx.clearRect(this.x, this.y-200, this.size, this.size+400);
            this.bombard.game.noteBombs.forEach((bomb, i)=>{
                if(bomb.identifier == this.identifier) {
                    this.bombard.game.noteBombs.splice(i, i+1)
                }
            })
        }
    }, 100)
}
