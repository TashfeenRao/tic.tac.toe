const players = ((name, token)=>{
  return {name, token}
})();

const GameBoard = ( ()=>{
  const board= ['O', 'O', 'X', 'X', 'X', 'O', 'X', 'O', 'O']
 
  function displayBoard() {
    let table_data = document.getElementsByClassName("table-data")[0];
    const table = document.createElement("table");
    table.innerHTML = " ";
    table.innerHTML = `
      <tr>
      <td>${this.board[0]}</td>
      <td class="vert">${this.board[1]}</td>
      <td>${this.board[2]}</td>
    </tr>
    <tr>
      <td class="hori">${this.board[3]}</td>
      <td class="vert hori">${this.board[4]}</td>
      <td class="hori">${this.board[5]}</td>
    </tr>
    <tr>
      <td>${this.board[6]}</td>
      <td class="vert">${this.board[7]}</td>
      <td>${this.board[8]}</td>
    </tr>  
      `;
    table_data.append(table);
  }

return {board, displayBoard}
})();


GameBoard.displayBoard()
GameBoard.clearBoard();

// play 

