class TicTacToe {

  constructor() {
    this.turn;
    this.currentPlayer;
    this.players;
  }

  winCheck() {
    let boardArray = [];
    for (let i = 0; i <= 8; i++) {
      let cell = document.getElementById(`cell-${i}`);
      boardArray.push(cell.textContent);
    }
    if (!boardArray.slice(0,3).includes('') ||
        !boardArray.slice(3,6).includes('') ||
        !boardArray.slice(6,9).includes('')) {
          document.querySelector('h3').textContent = `${this.currentPlayer} Wins!`;
      return true;
    }
  }

  start() {
    this.players = {
      X: document.getElementById('player-1').value,
      O: document.getElementById('player-2').value
    }
    if (Math.round(Math.random()) === 0) {
      this.currentPlayer = this.players.X;
      this.turn = 'X';
    } else {
      this.currentPlayer = this.players.O;
      this.turn = 'O';
    }

    document.querySelector('h3').textContent = `Ready ${this.currentPlayer}`;
  }

  toggle() {
    if (this.turn === 'X') {
      this.turn = 'O';
      this.currentPlayer = this.players.O;
      document.querySelector('h3').textContent = `Ready ${this.currentPlayer}`;
    } else if (this.turn === 'O') {
      this.turn = 'X'
      this.currentPlayer = this.players.X;
      document.querySelector('h3').textContent = `Ready ${this.currentPlayer}`;
    }
  }

  setCell(cell) {
    if (cell.textContent !== '') {
      console.log("text content");
      console.log(cell.textContent);
      alert("Impossible! That cell is already full.")
      return
    }
    cell.textContent = this.turn;
    if (this.winCheck()) {
      this.turn = '';
      return
    }
    this.toggle();
  }
}

module.exports = TicTacToe;