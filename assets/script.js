function GameBoard() {
  gameboard = ["O", "O", "O", "X", "0", "0", "0", "0", "O"];
  return { gameboard };
}

function players(name) {
  return { name };
}

const tictactoe = GameBoard();

displayBoard(tictactoe.gameboard);

function displayBoard(board) {
  let table_data = document.getElementsByClassName("table-data")[0];
  const table = document.createElement("table");
  table.innerHTML = " ";
  table.innerHTML = `
    <tr>
    <td>${board[0]}</td>
    <td class="vert">${board[1]}</td>
    <td>${board[2]}</td>
  </tr>
  <tr>
    <td class="hori">${board[3]}</td>
    <td class="vert hori">${board[4]}</td>
    <td class="hori">${board[5]}</td>
  </tr>
  <tr>
    <td>${board[6]}</td>
    <td class="vert">${board[7]}</td>
    <td>${board[8]}</td>
  </tr>  
    `;
  table_data.append(table);
}
