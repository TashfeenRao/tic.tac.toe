const players = ((name, token) => {
  return { name, token };
})();

const GameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const displayBoard = () => {
    
    let table_data = document.getElementsByClassName("table-data")[0];
    const table = document.createElement("table");
    table_data.innerHTML = "";
    table.id = "board";
    table.innerHTML = `
      <tr>
      <td><p class="token" onclick="GameBoard.move(0);" atribute="0" >${
      board[0]
    }</p></td>
      <td class="vert"><p class="token" id='token'  onclick="GameBoard.move(1);" atribute="1">${
      board[1]
    }</p></td>
      <td><p class="token" id='token' onclick="GameBoard.move(2);" atribute="2">${
      board[2]
    }</p></td>
    </tr>
    <tr>
      <td class="hori"><p class="token" id='token' onclick="GameBoard.move(3);" atribute="3">${
      board[3]
    }</p></td>
      <td class="vert hori"><p class="token" id='token' onclick="GameBoard.move(4);" atribute="4">${
      board[4]
    }</p></td>
      <td class="hori"><p class="token" id='token' onclick="GameBoard.move(5);" atribute="5">${
      board[5]
    }</p></td>
    </tr>
    <tr>
      <td><p class="token" id='token' onclick="GameBoard.move(6);" atribute="6">${
      board[6]
    }</p></td>
      <td class="vert"><p class="token" id='token' onclick="GameBoard.move(7);" atribute="7">${
      board[7]
    }</p></td>
      <td><p class="token" id='token' onclick="GameBoard.move(8);" atribute="8">${
      board[8]
    }</p></td>
    </tr>  
      `;
    table_data.append(table);
  };
  const clearBoard = () => {
    for (let i = 0; i < 9; i += 1) {
      board[i] = "";
    }
    board;
    displayBoard();
  };

  const move = (index, token = "X") => {
    if (board[index] === "") {
      board[index] = token;
      GameLogic.chekwin(board)
    } else {
      alert("Position taken");
    }
    displayBoard();
  };

  return { board, displayBoard, clearBoard, move };
})();


const GameLogic = (()=>{

  const  WIN_POSSIBILITY = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
   ]
 
   const chekwin = (board)=>{
     WIN_POSSIBILITY.forEach((win_pos)=>{
      const win_pos_one = win_pos[0]
      const win_pos_two = win_pos[1]
      const win_pos_three = win_pos[2]
      const  pos_one = board[win_pos_one]
      const  pos_two = board[win_pos_two]
      const  pos_three = board[win_pos_three]
 
      if (pos_one === 'X' && pos_two === 'X' && pos_three === 'X' || pos_one === 'O' && pos_two === 'O' && pos_three === 'O'){
        console.log(win_pos)
        return win_pos
      }
       false   
     });
   }
 
   return {chekwin, WIN_POSSIBILITY}
 })();


GameBoard.displayBoard();

//const cells = Array.from(document.getElementsByTagName("tbody"));


//cells.forEach(function (element) {
//  element.addEventListener("click", handleTurn);
 // function handleTurn(event) {
  //  GameBoard.move(event.target.getAttribute("atribute"))
   // GameBoard.displayBoard();
  // console.log(GameBoard.board)
 // }
//});
//GameBoard.clearBoard();
