const TicTacToe = require("./main.js");

describe("TicTacToe", () => {
  let game;
  beforeEach(() => {
    game = new TicTacToe('human');
    window.alert = jest.fn();
    document.getElementById.checked = true;
  });

  it("Initalizes", () => {
    expect(game).toBeTruthy();
  });

  it("toggle(): switches X to O", () => {
    expect(game.toggle("X")).toBe("O");
  });

  it("toggle(): switches O to X", () => {
    expect(game.toggle("O")).toBe("X");
  });

  it("gameOver(): false when board is empty", () => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let result = game.gameOver(board);
    expect(result).toBe(false);
  });

  it("gameOver(): scratch when game ends in stalemate", () => {
    let board = ["O", "X", "O", "O", "X", "X", "X", "O", "X"];
    let result = game.gameOver(board);
    expect(result).toBe("scratch");
  });

  let winningDiagonals = [
    ["X", "", "", "", "X", "", "", "", "X"],
    ["O", "", "", "", "O", "", "", "", "O"],
    ["", "", "X", "", "X", "", "X", "", ""],
    ["", "", "O", "", "O", "", "O", "", ""]
  ];
  for (let board of winningDiagonals) {
    it(`gameOver(): finds a diagonal winner for ${board.toString()}`, () => {
      let result = game.gameOver(board);
      expect(result).toBe("win");
    });
  }

  let winningHorizontals = [
    ["X", "X", "X", "", "", "", "", "", ""],
    ["", "", "", "X", "X", "X", "", "", ""],
    ["", "", "", "", "", "", "X", "X", "X"],
    ["O", "O", "O", "", "", "", "", "", ""],
    ["", "", "", "O", "O", "O", "", "", ""],
    ["", "", "", "", "", "", "O", "O", "O"]
  ];

  for (let board of winningHorizontals) {
    it(`gameOver(): finds a horizontal winner for ${board.toString()}`, () => {
      let result = game.gameOver(board);
      expect(result).toBe("win");
    });
  }

  let winningVerticals = [
    ["X", "", "", "X", "", "", "X", "", ""],
    ["", "X", "", "", "X", "", "", "X", ""],
    ["", "", "X", "", "", "X", "", "", "X"],
    ["O", "", "", "O", "", "", "O", "", ""],
    ["", "O", "", "", "O", "", "", "O", ""],
    ["", "", "O", "", "", "O", "", "", "O"],
  ];

  for (let board of winningVerticals) {
    it(`gameOver(): finds a vertical winner for ${board.toString()}`, () => {
      let result = game.gameOver(board);
      expect(result).toBe("win");
    });
  }

  it(`start(): if computer is selected, X goes first`, () => {
    let result = game.start(`player1`, `player2`, `computer`);
    expect(result).toBe("X");
  })

  it(`start(): if human is selected, random goes first`, () => {
    let result = game.start(`player1`, `player2`, `human`);
    expect(result).toMatch(/[XO]/);
  })

  it(`chooseCell(): choose center if available`, () => {
    game.board = ["", "", "", "", "", "", "", "", ""];
    let result = game.chooseCell(game.board, `O`);
    expect(result).toEqual(["", "", "", "", "O", "", "", "", ""]);
  })

  it(`chooseCell(): choose random if center taken`, () => {
    game.board = ["", "", "", "", "X", "", "", "", ""];
    let result = game.chooseCell(game.board, `O`);
    expect(result).toContain(`O`);
    expect(result).toContain(`X`);
  })

  it(`chooseCell(): choose last open space`, () => {
    game.board = ["", "X", "O", "O", "X", "X", "X", "O", "X"];
    let result = game.chooseCell(game.board, `O`);
    expect(result).toEqual(["O", "X", "O", "O", "X", "X", "X", "O", "X"]);
  })

  it(`chooseCell(): throw error if board is full`, () => {
    game.board = ["O", "X", "O", "O", "X", "X", "X", "O", "X"];
    expect(() => {
      game.chooseCell(game.board, `O`);
    }).toThrow();
  })

  it(`setCell(): against human: do nothing if cell is taken`, () => {
    game.board = ["O", "", "", "", "", "", "", "", ""];
    let result = game.setCell(game.board, 0, `X`, 'human');
    expect(result).toEqual(["O", "", "", "", "", "", "", "", ""]);
  })

  it(`setCell(): against computer: do nothing if cell is taken`, () => {
    game.board = ["O", "", "", "", "", "", "", "", ""];
    let result = game.setCell(game.board, 0, `X`, 'computer');
    expect(result).toEqual(["O", "", "", "", "", "", "", "", ""]);
  })

  it(`setCell(): set cell if empty`, () => {
    game.board = ["O", "", "", "", "", "", "", "", ""];
    let result = game.setCell(game.board, 1, `X`, 'human');
    expect(result).toEqual(["O", "X", "", "", "", "", "", "", ""]);
  })

  it(`setCell(): computer picks cell after human`, () => {
    game.board = ["", "", "", "", "", "", "", "", ""];
    let result = game.setCell(game.board, 2, `X`, 'computer');
    expect(result).toContain('X');
    expect(result).toContain('O');
  })

  it(`setCell(): computer does not choose if only one cell remaining`, () => {
    game.board = ["O", "", "O", "O", "X", "X", "X", "O", "X"];
    let result = game.setCell(game.board, 1, `X`, 'computer');
    expect(result).toEqual(["O", "X", "O", "O", "X", "X", "X", "O", "X"]);
  })

  it(`setCell(): computer does not choose if human makes winning move`, () => {
    game.board = ["X", "X", "", "", "", "", "", "", ""];
    let result = game.setCell(game.board, 2, `X`, 'computer');
    expect(result).toEqual(["X", "X", "X", "", "", "", "", "", ""]);
  })
});
