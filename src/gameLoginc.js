/* eslint-disable no-self-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
import GameBoard from './gameBorad';

const GameLogic = (() => {
  const playersInfo = [];
  let winArr = [];
  const WIN_POSSIBILITY = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const GameEnd = () => {
    const squares = document.querySelectorAll('.token');
    squares.forEach((token) => {
      token.outerHTML = token.outerHTML;
    });
  };
  const freeBoard = () => {
    const slots = [];
    GameBoard.board.forEach((x) => {
      if (x === '') {
        slots.push(x);
      }
    });
    return slots;
  };
  const chekwin = (board) => {
    const ResetArr = [];
    winArr = ResetArr;
    WIN_POSSIBILITY.forEach((winPos) => {
      const winPosOne = winPos[0];
      const winPosTwo = winPos[1];
      const winPosThree = winPos[2];
      const posOne = board[winPosOne];
      const posTwo = board[winPosTwo];
      const posThree = board[winPosThree];

      if (
        (posOne === 'X' && posTwo === 'X' && posThree === 'X')
            || (posOne === 'O' && posTwo === 'O' && posThree === 'O')
      ) {
        winArr.push(winPos);
        const winPlayer = winPos[0];
        if (board[winPlayer] === 'X') {
          const message = document.getElementById('p');
          message.innerHTML = `${playersInfo[0]} wins`;
          GameEnd();
        } else {
          const message = document.getElementById('p');
          message.innerHTML = `${playersInfo[1]} wins`;
          GameEnd();
        }
      } else if (freeBoard().length === 0) {
        chekDraw();
      }
      false;
    });
  };

  const chekDraw = () => {
    if (winArr.length === 0) {
      const message = document.getElementById('p');
      message.innerHTML = 'Draw Game';
      GameEnd();
    }
  };

  return {
    chekwin, WIN_POSSIBILITY, playersInfo, winArr, freeBoard,
  };
})();

export default GameLogic;