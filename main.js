class TicTacToe {
  constructor() {
    this.board = Array(9).fill("");
  }

  toggle(turn) {
    this.turn = turn === "X" ? "O" : "X";
    this.status = `${this.turn} Turn`;
    return this.turn;
  }

  gameOver(board) {
    if (
      this.boardState(board, 0, 1, 2) ||
      this.boardState(board, 3, 4, 5) ||
      this.boardState(board, 6, 7, 8) ||
      this.boardState(board, 0, 4, 8) ||
      this.boardState(board, 2, 4, 6) ||
      this.boardState(board, 0, 3, 6) ||
      this.boardState(board, 1, 4, 7) ||
      this.boardState(board, 2, 5, 8)
    ) {
      this.turn = ``;
      return (this.status = `win`);
    } else if (!board.includes("")) {
      this.turn = ``;
      return (this.status = `scratch`);
    }
    return false;
  }

  boardState(board, firstCell, secondCell, thirdCell) {
    let turns = ["X", "O"];
    for (let turn of turns) {
      if (
        board[firstCell] === turn &&
        board[secondCell] === turn &&
        board[thirdCell] === turn
      ) {
        return true;
      }
    }
  }

  nextRandom() {
    return Math.random();
  }

  start(playerX, playerO, opponent) {
    this.board = Array(9).fill("");
    this.players = {
      X: playerX,
      O: playerO
    };
    if (opponent === `computer`) {
      this.turn = "X";
    } else if (opponent === `human`) {
      if (this.nextRandom() < 0.5) {
        this.turn = "X";
      } else {
        this.turn = "O";
      }
    } else {
      throw new Error("opponent must be either computer or human, but was " + opponent);
    }
    this.status = `${this.turn} Turn`;
    return this.turn;
  }

  chooseCell(board, turn) {
    let centerCell = 4;
    if (!board.includes("")) {
      throw Error(`Board is full.`);
    } else if (!board[centerCell]) {
      this.board[centerCell] = turn;
      return this.board;
    } else {
      let randomCell = Math.floor(this.nextRandom() * 9);
      while (board[randomCell]) {
        randomCell = Math.floor(this.nextRandom() * 9);
      }
      this.board[randomCell] = turn;
      return this.board;
    }
  }

  setCell(board, cellIndex, turn, opponent) {
    if (board[cellIndex]) {
      alert("Impossible! That cell is already full.");
      return this.board;
    }
    this.board[cellIndex] = turn;
    if (this.gameOver(board)) {
      return this.board;
    }
    if (opponent === "computer") {
      turn = this.toggle(turn);
      this.chooseCell(this.board, turn);
      if (this.gameOver(board)) {
        return this.board;
      }
    }
    turn = this.toggle(turn);
    return this.board;
  }
}

module.exports = TicTacToe;
