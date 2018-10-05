const TicTacToe = require('./main.js');

describe('TicTacToe', () => {
  let game;
  beforeEach(() => {
    game = new TicTacToe();
    game.players = {
      X: 'playerX',
      O: 'playerO'
    };
  });

  it('Initalizes', () => {
    expect(game).toBeTruthy();
  })
})

