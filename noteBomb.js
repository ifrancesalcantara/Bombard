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
    this.areaofEffectXcenter = {x: this.x-200, y: this.y, sizeX: this.size+400, sizeY: this.size, isFire: true};
    this.areaofEffectMinusOneToCenter = {x: this.x-100, y: this.y, sizeX: this.size+100, sizeY: this.size, isFire: true};
    this.areaofEffectMinusTwoToCenter = {x: this.x-200, y: this.y, sizeX: this.size+200, sizeY: this.size, isFire: true};
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
            if("a"){                        //If every X possibility Collides, CorrectX is that possibility

            }
            if(this.bombard.game.inGame){
                console.log("printing fire");
                let fireX = new Image();
                let fireY = new Image();
                let firecenter = new Image();

                fireX.src = "/img/bomb/Fire_tile_X.png";
                fireY.src = "/img/bomb/Fire_tile_Y.png";
                firecenter.src="/img/bomb/fire_center.png"

                this.ctx.drawImage(fireX, this.x-200, this.y, this.size+400, this.size)
                this.ctx.fill();
                this.ctx.drawImage(fireY, this.x, this.y-200, this.size, this.size+400)
                this.ctx.fill();
                this.ctx.drawImage(firecenter, this.x, this.y, this.size, this.size)
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
