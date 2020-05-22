/* eslint-disable import/no-cycle */
import gameBoard from './gameBorad';
import GameLogic from './gameLoginc';

const domListener = (() => {
  const listenForMove = () => {
    const squares = document.querySelectorAll('.token');
    squares.forEach((token) => {
      token.addEventListener('click', () => {
        const position = token.getAttribute('data-id');
        gameBoard.move(position);
        gameBoard.displayBoard();
        GameLogic.chekwin(gameBoard.board);
      });
    });
  };
  const listenForReset = () => {
    const reset = document.getElementById('reset-game');
    reset.addEventListener('click', () => {
      gameBoard.clearBoard();
      gameBoard.displayBoard();
    });
  };
  return {
    listenForMove, listenForReset,
  };
})();

export default domListener;