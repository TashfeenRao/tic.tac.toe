/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
import players from './player';
import GameLogic from './gameLoginc';
import domListener from './domListener';


const GameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const message = document.getElementById('p');
  const displayBoard = () => {
    const startGame = document.getElementById('start-game');
    const resetGame = document.getElementById('reset-game');
    const formInfo = document.getElementById('players-form');
    startGame.style.display = 'none';
    resetGame.style.display = 'block';
    formInfo.style.display = 'none';
    const tableData = document.getElementsByClassName('table-data')[0];
    const table = document.createElement('table');
    if (players.token === 'X') {
      message.innerHTML = `${GameLogic.playersInfo[0]}'s turns`;
    } else {
      message.innerHTML = `${GameLogic.playersInfo[1]}'s turns`;
    }
    tableData.innerHTML = '';
    table.id = 'board';
    table.innerHTML = `
          <tr>
          <td><p class="token" data-id="0" >${board[0]}</p></td>
          <td class="vert"><p class="token" data-id="1">${board[1]}</p></td>
          <td><p class="token" data-id="2">${board[2]}</p></td>
        </tr>
        <tr>
          <td class="hori"><p class="token" data-id="3"">${board[3]}</p></td>
          <td class="vert hori"><p class="token" data-id="4"">${board[4]}</p></td>
          <td class="hori"><p class="token" data-id="5">${board[5]}</p></td>
        </tr>
        <tr>
          <td><p class="token" data-id="6">${board[6]}</p></td>
          <td class="vert"><p class="token" data-id="7">${board[7]}</p></td>
          <td><p class="token" data-id="8"">${board[8]}</p></td>
        </tr>  
          `;
    tableData.append(table);
    domListener.listenForMove();
  };
  const clearBoard = () => {
    for (let i = 0; i < 9; i += 1) {
      board[i] = '';
    }
    board;
    displayBoard();
    GameLogic.winArr = [];
  };
  const move = (index) => {
    if (board[index] === '') {
      board[index] = players.token;
      players.token = players.token === 'X' ? 'O' : 'X';
      displayBoard();
      GameLogic.chekwin(board);
    } else {
      message.innerHTML = 'Position taken';
    }
  };
  return {
    board, displayBoard, clearBoard, move,
  };
})();

export default GameBoard;