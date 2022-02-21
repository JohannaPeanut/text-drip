class TextDrip {
  constructor(gameInstance, poem, maxLength) {
    this.game = gameInstance;
    this.x = 0;
    this.y = 0;
    this.canvas = document.querySelector('canvas');
    this.context = canvasElement.getContext('2d');
    this.poem = poem;
    this.counter = 0;
    this.letters = [];
    this.maxLength = maxLength;
  }
  createLetter() {
    if (this.counter < this.poem.length) {
      const letter = new Letter(
        this.game,
        this.x,
        this.y,
        this.poem[this.counter]
      );
      this.letters.push(letter);
      if (this.letters.length >= this.maxLength) this.letters.shift();
      this.counter++;
    }
  }

  drawLetters() {
    this.game.clean();
    for (let letter of this.letters) {
      
      letter.draw();
    }
  }

  drip() {
      /*
    this.canvas.addEventListener('mousedown', (e) => {
      this.x = e.offsetX;
      this.y = e.offsetY;

      let distanceToLastLetter = 0; 
         if(this.letters.length <= 0) {
            this.createLetter();
            this.drawLetters();
         } else {
            distanceToLastLetter = Math.sqrt(
                Math.pow(this.y - this.letters[this.letters.length-1].y, 2) + Math.pow(this.x - this.letters[this.letters.length-1].x,2));
           
          if(distanceToLastLetter > 20){
      this.createLetter();
      this.drawLetters();
      } 
      
    }
    });
    */
    this.canvas.addEventListener('mousemove', (e) => {
        this.x = e.offsetX;
        this.y = e.offsetY;
  
        let distanceToLastLetter = 0; 
           if(this.letters.length <= 0) {
              this.createLetter();
              this.drawLetters();
           } else {
              distanceToLastLetter = Math.sqrt(
                  Math.pow(this.y - this.letters[this.letters.length-1].y, 2) + Math.pow(this.x - this.letters[this.letters.length-1].x,2));
             
            if(distanceToLastLetter > 20){
        this.createLetter();
        this.drawLetters();
        } 
        
      }
      });

  }
}
