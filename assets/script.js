const players = ((name, token)=>{
  return {name, token}
})();

const GameBoard = ( ()=>{
  const board= ['O', 'O', 'X', 'X', 'X', 'O', 'X', 'O', 'O']
 
  const  displayBoard = () =>{
    let table_data = document.getElementsByClassName("table-data")[0];
    const table = document.createElement("table");
    table.innerHTML = " ";
    table.innerHTML = `
      <tr>
      <td><p class="token">${board[0]}</p></td>
      <td class="vert"><p class="token">${board[1]}</p></td>
      <td><p class="token">${board[2]}</p></td>
    </tr>
    <tr>
      <td class="hori"><p class="token">${board[3]}</p></td>
      <td class="vert hori"><p class="token">${board[4]}</p></td>
      <td class="hori"><p class="token">${board[5]}</p></td>
    </tr>
    <tr>
      <td><p class="token">${board[6]}</p></td>
      <td class="vert"><p class="token">${board[7]}</p></td>
      <td><p class="token">${board[8]}</p></td>
    </tr>  
      `;
    table_data.append(table);
  }

  //cons

return {board, displayBoard}
})();


GameBoard.displayBoard()
GameBoard.clearBoard();

// play 

