class TicTacToe {
  constructor() {
    this.turn;
    this.currentPlayer;
    this.players;
    this.moves = 0;
  }

  winCheck() {
    let boardArray = [];
    for (let i = 0; i <= 8; i++) {
      let cell = document.getElementById(`cell-${i}`);
      boardArray.push(cell.textContent);
    }
    if (
      this.boardState(boardArray, 0, 1, 2) ||
      this.boardState(boardArray, 3, 4, 5) ||
      this.boardState(boardArray, 6, 7, 8) ||
      this.boardState(boardArray, 0, 4, 8) ||
      this.boardState(boardArray, 2, 4, 6) ||
      this.boardState(boardArray, 0, 3, 6) ||
      this.boardState(boardArray, 1, 4, 7) ||
      this.boardState(boardArray, 2, 5, 8)
    ) {
      document.querySelector("h3").textContent = `${this.currentPlayer} Wins!`;
      return true;
    }
    if (this.moves === 9) {
      document.querySelector("h3").textContent = `The game ended in a draw!`
      return true;
    }
    return false;
  }

  boardState(boardArray, firstCell, secondCell, thirdCell) {
    let turns = ["X", "O"];
    for (let turn of turns) {
      if (
        boardArray[firstCell] === turn &&
        boardArray[secondCell] === turn &&
        boardArray[thirdCell] === turn
      ) {
        document.getElementById(`cell-${firstCell}`).textContent = '🖕'
        document.getElementById(`cell-${secondCell}`).textContent = '🖕'
        document.getElementById(`cell-${thirdCell}`).textContent = '🖕'
        return true;
      }
    }
  }

  start() {
    this.players = {
      X: document.getElementById("player-1").value,
      O: document.getElementById("player-2").value
    };
    if (document.getElementById("computer").checked) {
      this.currentPlayer = this.players.X;
      this.turn = "X";
    } else if (Math.round(Math.random()) === 0) {
      this.currentPlayer = this.players.X;
      this.turn = "X";
    } else {
      this.currentPlayer = this.players.O;
      this.turn = "O";
    }

    document.querySelector("h3").textContent = `Ready ${this.currentPlayer}`;
  }

  toggle() {
    if (this.turn === "X") {
      this.turn = "O";
      this.currentPlayer = this.players.O;
      document.querySelector("h3").textContent = `Ready ${this.currentPlayer}`;
    } else if (this.turn === "O") {
      this.turn = "X";
      this.currentPlayer = this.players.X;
      document.querySelector("h3").textContent = `Ready ${this.currentPlayer}`;
    }
    return this.turn;
  }

  chooseCell() {
    if (this.moves >= 8) {
      return;
    } else if (document.getElementById("cell-4").textContent === '') {
      document.getElementById("cell-4").textContent = this.turn;
    } else {
      let randomCell = document.getElementById(
        `cell-${Math.floor(Math.random() * 9)}`
      );
      while (randomCell.textContent !== "") {
        randomCell = document.getElementById(
          `cell-${Math.floor(Math.random() * 9)}`
        );
      }
      randomCell.textContent = this.turn;
    }
    this.moves++;
  }

  setCell(cell) {
    if (cell.textContent !== "") {
      alert("Impossible! That cell is already full.");
      return;
    }
    cell.textContent = this.turn;
    this.moves++;
    if (this.winCheck()) {
      this.turn = "";
      return;
    }
    if (document.getElementById("computer").checked) {
      this.toggle();
      this.chooseCell();
      if (this.winCheck()) {
        this.turn = "";
        return;
      }
    }
    this.toggle();
  }
}

module.exports = TicTacToe;
