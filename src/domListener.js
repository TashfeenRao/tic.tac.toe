/* eslint-disable import/no-cycle */
import gameBoard from './gameBorad';

const domListener = (() => {
  const listenForMove = () => {
    const squares = document.querySelectorAll('.token');
    squares.forEach((token) => {
      token.addEventListener('click', () => {
        const position = token.getAttribute('data-id');
        gameBoard.move(position);
      });
    });
  };
  const listenForReset = () => {
    const reset = document.getElementById('reset-game');
    reset.addEventListener('click', gameBoard.clearBoard);
  };
  return {
    listenForMove, listenForReset,
  };
})();

export default domListener;