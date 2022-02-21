var totalDistance = 0;

class TextMouse {
  constructor(gameInstance, poem) {
    this.game = gameInstance;
    this.x = null;
    this.y = null;
    this.canvas = document.querySelector('canvas');
    this.context = canvasElement.getContext('2d');
    this.isDrwaing = false;
    this.poem = poem;
    this.counter = 0;
  }
  draw() {
    if (this.counter < this.poem.length) {
      this.context.save()
      this.context.font = '32px Times';
      const letter = this.poem[this.counter];
      this.context.fillText(letter, this.x, this.y);
      this.context.restore();
      this.counter++;
    }
  }

  move() {
    this.canvas.addEventListener('mousedown', (e) => {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDrawing === true) {
        /*
      var cursorThreshold = 100;

      if (this.x) totalDistance += Math.sqrt(
        Math.pow(this.y - e.clientY, 2) + Math.pow(this.x - e.clientX, 2));

      if (totalDistance >= 100) {
        console.log('Mouse moved 100px!');
        totalDistance = 0;
      }
      */
        let distance = 0;

        this.x = e.offsetX;
        this.y = e.offsetY;

      }
    });

    window.addEventListener('mouseup', (e) => {
      if (this.isDrawing === true) {
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    });
  }
}
