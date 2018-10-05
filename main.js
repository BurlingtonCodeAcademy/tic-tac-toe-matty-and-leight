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
    return false;
  }

  boardState(boardArray, firstCell, secondCell, thirdCell) {
    if (
      boardArray[firstCell] === this.turn &&
      boardArray[secondCell] === this.turn &&
      boardArray[thirdCell] === this.turn
    ) {
      return true;
    }
  }

  start() {
    this.players = {
      X: document.getElementById("player-1").value,
      O: document.getElementById("player-2").value
    };
    if (Math.round(Math.random()) === 0) {
      this.currentPlayer = this.players.X;
      this.turn = "X";
    } else {
      this.currentPlayer = this.players.O;
      this.turn = "O";
    }

    document.querySelector("h3").textContent = `Ready ${this.currentPlayer}`;
  }

  computer() {
    document.getElementById("player-2").value = "Computer";
      if (this.turn === "O") {
        let randomCell = document.getElementById(
          `cell-${Math.floor(Math.random() * 9)}`
        )
        randomCell.textContent = this.turn;
          console.log('function call')
          console.log(randomCell)
        console.log('computer turn')
        this.toggle();
      }
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
  }

  setCell(cell) {
    if (cell.textContent !== "") {
      alert("Impossible! That cell is already full.");
      return;
    }
    cell.textContent = this.turn;
    if (this.winCheck()) {
      this.turn = "";
      return;
    }
    if (document.getElementById("computer").checked) {
      this.computer();
    }
  }
}

module.exports = TicTacToe;
