const canvasElement = document.querySelector('canvas');
const context = canvasElement.getContext('2d');

const buttonElement = document.querySelector('button');

const poemCorona = `CORONA
Aus der Hand frißt der Herbst mir sein Blatt: wir sind Freunde.
Wir schälen die Zeit aus den Nüssen und lehren sie gehn:
die Zeit kehrt zurück in die Schale.
Im Spiegel ist Sonntag,
im Traum wird geschlafen,
der Mund redet wahr.
Mein Aug steigt hinab zum Geschlecht der Geliebten:
wir sehen uns an,
wir sagen uns Dunkles,
wir lieben einander wie Mohn und Gedächtnis,
wir schlafen wie Wein in den Muscheln,
wie das Meer im Blutstrahl des Mondes.
Wir stehen umschlungen im Fenster, sie sehen uns zu von der Straße:
es ist Zeit, daß man weiß!
Es ist Zeit, daß der Stein sich zu blühen bequemt,
daß der Unrast ein Herz schlägt.
Es ist Zeit, daß es Zeit wird.
Es ist Zeit.
Aus Herzen und Hirnen
sprießen die Halme der Nacht,
und ein Wort, von Sensen gesprochen,
neigt sie ins Leben.
Stumm wie sie
wehn wir der Welt entgegen:
unsere Blicke,
getauscht, um getröstet zu sein,
tasten sich vor,
winken uns dunkel heran.
Blicklos
schweigt nun dein Aug in mein Aug sich,
wandernd
heb ich dein Herz an die Lippen,
hebst du mein Herz an die deinen: 
was wir jetzt trinken,
stillt den Durst der Stunden;
was wir jetzt sind,
schenken die Stunden der Zeit ein.
Munden wir ihr?
Kein Laut und kein Licht
schlüpft zwischen uns, es zu sagen.
O Halme, ihr Halme.
Ihr Halme der Nacht.`;

class Game {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.context = canvasElement.getContext('2d');
    this.textDrip = new TextDrip(this, poemCorona, 20);
    //this.textMouse = new TextMouse(this, poemCorona);
  }

  runLogic() {
    //this.textMouse.move();
  }

  draw() {
    //this.textMouse.draw();
  }

  clean() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  loop() {
    /*
    window.setInterval(() => {
      this.runLogic();
      if (this.textMouse.isDrawing) this.draw();
    }, 100);
*/
this.textDrip.drip();
  }
}

const game = new Game(canvasElement);
game.loop();

buttonElement.addEventListener('click', function () {
  game.clean();
  console.log('clean');
  //game.textMouse.counter = 0;
  game.textDrip.counter = 0;
});
