function NoteBomb(canvas, x, y) {
    this.size=100;
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.stillTicking = true;
    this.chronometer = 2500;
}


NoteBomb.prototype.draw = function() {
    var existentialism = setInterval(()=>{
        if(this.stillTicking){
            var noteBomPic = new Image();
            noteBomPic.src="img/bomb/music-note-icon.svg"
            var ctx = this.canvas.getContext("2d");
            noteBomPic.onload = function() {
                ctx.drawImage(noteBomPic, this.x, this.y, this.size, this.size)
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
        console.log("BOOM");
        // this.explode()
    }
}

// NoteBomb.prototype.drawExplosion() {

// }


// NoteBomb.prototype.explode = function() {

//     this.drawExplosion() {

//     }
//     var explosionXAxis = function(){
//         if(){}
//     };
//     var explosionYAxis = ;

//     if(bombard.handleBrun(explosionXAxis, explosionYAxis)){
//         bombard.receiveDamage(1);
//     }
// }