const game = new TicTacToe();

function play() {
  console.log("CLICKED!")
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.onclick = function() {
      console.log({game})
      game.setCell(cell);
     }
    cell.textContent = '';
  }
  game.start();
}

document.querySelector('button').onclick = play;