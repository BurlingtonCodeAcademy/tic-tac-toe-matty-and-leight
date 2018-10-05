const game = new TicTacToe();

function play() {
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.onclick = function() {
      game.setCell(cell);
    };
    cell.textContent = "";
    game.start();
    if (document.getElementById("computer").checked) {
      game.computer();
    }
  }
}

document.querySelector("button").onclick = play;
