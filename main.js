let turn;
let currentPlayer;
let players;

function winCheck() {
  let boardArray = [];
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(`cell-${i}`);
    boardArray.push(cell.textContent);
  }
  if (!boardArray.slice(0,3).includes('') ||
      !boardArray.slice(3,6).includes('') ||
      !boardArray.slice(6,9).includes('')) {
    document.querySelector('h3').textContent = `${currentPlayer} Wins!`;
    return true;
  } 
  // let col1 = 
  // for (let i = 0; i <= 8; i += 3)

}

function play() {
  for (let i = 0; i <= 8; i++) {
    let cell = document.getElementById(`cell-${i}`);
    cell.addEventListener('click', setCell)
    cell.textContent = '';
  }

  players = {
    X: document.getElementById('player-1').value,
    O: document.getElementById('player-2').value
  }
  if (Math.round(Math.random()) === 0) {
    currentPlayer = players.X;
    turn = 'X';
  } else {
    currentPlayer = players.O;
    turn = 'O';
  }

  document.querySelector('h3').textContent = `Ready ${currentPlayer}`;
}

function toggle() {
  if (turn === 'X') {
    turn = 'O';
    currentPlayer = players.O;
    document.querySelector('h3').textContent = `Ready ${currentPlayer}`;
  } else if (turn === 'O') {
    turn = 'X'
    currentPlayer = players.X;
    document.querySelector('h3').textContent = `Ready ${currentPlayer}`;
  }
}

function setCell(e) {
  if (e.target.textContent !== '') {
    alert("Impossible! That cell is already full.")
    return
  }
  e.target.textContent = turn;
  if (winCheck()) { return }
  toggle();
}
