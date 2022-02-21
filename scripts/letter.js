class Letter {
    constructor(gameInstance,x,y,letter){
        this.game = gameInstance;
        this.x = x;
        this.y = y;
        this.letter = letter;
    }

    draw(){
        this.game.context.save();
        this.game.context.fillStyle = 'white';
      this.game.context.font = '32px Times';
      this.game.context.fillText(this.letter, this.x, this.y);
      this.game.context.restore();
    }
}