const game = new TicTacToe();

let render = board => {
  for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.textContent = board[i];
  }
  document.querySelector('h3').textContent = game.status;
}

let addListeners = () => {
  let opponent = document.getElementById(`computer`).checked
    ? "computer"
    : "human";
    let playerX = document.getElementById('player-1').value;
    let playerO = document.getElementById('player-2').value;
  for (let i = 0; i < 9; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.onclick = () => {
      game.setCell(game.board, i, game.turn, opponent);
      render(game.board);
    };

    game.start(playerX, playerO, opponent);
    render(game.board);
  }
}

document.querySelector("button").onclick = addListeners;
