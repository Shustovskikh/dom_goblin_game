import { isOdd } from '../odd';

describe('Goblin Game', () => {
  let gameBoard;
  let goblin;
  let cells;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="game-board"></div>
      <div class="goblin"></div>
    `;

    gameBoard = document.querySelector('.game-board');
    goblin = document.querySelector('.goblin');
    cells = [];

    const boardSize = 4;
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoard.appendChild(cell);
        cells.push(cell);
      }
    }
  });

  function getRandomIndex(excludeIndex) {
    let index;
    do {
      index = Math.floor(Math.random() * cells.length);
    } while (index === excludeIndex);
    return index;
  }

  function moveGoblin() {
    const currentIndex = cells.indexOf(goblin.parentElement);
    const newIndex = getRandomIndex(currentIndex);
    cells[newIndex].appendChild(goblin);
  }

  test('should create a 4x4 game board', () => {
    expect(cells.length).toBe(16);
    expect(gameBoard.children.length).toBe(16);
  });

  test('should move goblin to a new cell', () => {
    cells[0].appendChild(goblin);
    moveGoblin();
    expect(cells[0].contains(goblin)).toBe(false);
    expect(gameBoard.contains(goblin)).toBe(true);
  });

  test('should not move goblin to the same cell', () => {
    cells[0].appendChild(goblin);
    const currentIndex = cells.indexOf(goblin.parentElement);
    const newIndex = getRandomIndex(currentIndex);
    expect(newIndex).not.toBe(currentIndex);
  });
});

describe('isOdd function', () => {
  test('should return true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
  });

  test('should return false for even numbers', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
  });
});
