const game = new TicTacToe();

function play() {
  this.moves = 0;
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.onclick = function() {
      game.setCell(cell);
    };
    cell.textContent = "";
    game.start();
  }
}

document.querySelector("button").onclick = play;
