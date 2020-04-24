/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
const players = ((name) => {
  const token = 'X';
  return { name, token };
})();

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
      <td><p class="token" onclick="GameBoard.move(0);" >${board[0]}</p></td>
      <td class="vert"><p class="token"  onclick="GameBoard.move(1);">${board[1]}</p></td>
      <td><p class="token" onclick="GameBoard.move(2);">${board[2]}</p></td>
    </tr>
    <tr>
      <td class="hori"><p class="token" onclick="GameBoard.move(3);">${board[3]}</p></td>
      <td class="vert hori"><p class="token" onclick="GameBoard.move(4);">${board[4]}</p></td>
      <td class="hori"><p class="token" onclick="GameBoard.move(5);">${board[5]}</p></td>
    </tr>
    <tr>
      <td><p class="token" onclick="GameBoard.move(6);">${board[6]}</p></td>
      <td class="vert"><p class="token"onclick="GameBoard.move(7);">${board[7]}</p></td>
      <td><p class="token" onclick="GameBoard.move(8);">${board[8]}</p></td>
    </tr>  
      `;
    tableData.append(table);
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

const GameLogic = (() => {
  const message = document.getElementById('p');
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
    const action = document.getElementsByClassName('token');
    for (let i = 0; i < action.length; i += 1) {
      action[i].onclick = null;
    }
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
          message.innerHTML = `${playersInfo[0]} wins`;
          GameEnd();
        } else {
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
      message.innerHTML = 'Draw Game';
      GameEnd();
    }
  };

  return {
    chekwin, WIN_POSSIBILITY, playersInfo, winArr,
  };
})();

document.getElementById('players-form').addEventListener('submit', (event) => {
  event.preventDefault();
  players.name = document.getElementById('name1').value;
  GameLogic.playersInfo.push(players.name);
  players.name = document.getElementById('name2').value;
  GameLogic.playersInfo.push(players.name);
  GameBoard.displayBoard();
});