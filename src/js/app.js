document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game-board');
  document.body.appendChild(gameBoard);

  const goblin = document.createElement('img');
  goblin.src = 'img/goblin.png';
  goblin.classList.add('goblin');
  gameBoard.appendChild(goblin);

  const boardWidth = 4;
  const boardHeight = 4;
  const randomColumn = Math.floor(Math.random() * boardWidth);
  const randomRow = Math.floor(Math.random() * boardHeight);
  goblin.style.gridArea = `${randomRow + 1} / ${randomColumn + 1}`;

  setInterval(() => {
    const newColumn = Math.floor(Math.random() * boardWidth);
    const newRow = Math.floor(Math.random() * boardHeight);
    goblin.style.gridArea = `${newRow + 1} / ${newColumn + 1}`;
  }, 2000);
});
