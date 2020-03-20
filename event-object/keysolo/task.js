class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
  const timer = document.getElementById("timer");
  this.reset();
   document.addEventListener('keydown', e => {
     console.log(this.currentSymbol.textContent);
     console.log(e.key);
     this.currentSymbol.textContent === e.key.toLowerCase() ? this.success() : this.fail();
   })
   timer.addEventListener('DOMSubtreeModified', e => {
     if (Number(timer.textContent) === 0) {
       this.fail();
     }
   })
   
  }


  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    this.timerReset();
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    this.timerReset();
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
  timerReset() { 
    timer.textContent = Array.from(document.querySelectorAll(".symbol")).length;
  }
}

new Game(document.getElementById('game'))


let tick = () => {
    let countdownStart = timer.textContent;
    countdownStart = Number(countdownStart);
     countdownStart -= 1;
     timer.textContent = String(countdownStart);
     if( timer.textContent === "0") {
        clearInterval(counting);

    }
}


let counting = setInterval(tick, 1000);