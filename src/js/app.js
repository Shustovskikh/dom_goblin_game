document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.querySelector('.game-board');
  const goblin = document.querySelector('.goblin');
  const boardSize = 4;
  const cells = [];

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
      cells.push(cell);
    }
  }

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

  moveGoblin();

  setInterval(moveGoblin, 1000);
});
