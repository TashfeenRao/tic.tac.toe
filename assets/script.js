const players = ((name) => {
  const token = "X";
  return { name, token };
})();

const GameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];

  const displayBoard = () => {
    let start_game = document.getElementById("start-game");
    let reset_game = document.getElementById("reset-game");
    let form_info = document.getElementById("book-form");
    start_game.style.display = "none";
    reset_game.style.display = "block";
    form_info.style.display = "none";
    let table_data = document.getElementsByClassName("table-data")[0];
    const table = document.createElement("table");
    table_data.innerHTML = "";
    table.id = "board";
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
    table_data.append(table);
  };
  const clearBoard = () => {
    for (let i = 0; i < 9; i += 1) {
      board[i] = "";
    }
    board;
    displayBoard();
  };

  const move = (index) => {
    if (board[index] === "") {
      board[index] = players.token;
      players.token = players.token === "X" ? "O" : "X";
      let message = document.getElementById('p')
      if(players.token === 'X'){
        message.innerHTML = `Player 1 turns`
      }
      else{
        message.innerHTML = `Player 2 turns`
      }
      displayBoard();
      GameLogic.chekwin(board);
    } else {
      alert("Position taken");
    }
  };

  return { board, displayBoard, clearBoard, move };
})();

const GameLogic = (() => {
  players_info = [];
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

  const board_full = () => {
    slots = [];
    GameBoard.board.forEach((x) => {
      if (x === "") {
        slots.push(x);
      }
    });

    if (slots.length === 0) {
      console.log("board full");
      return true;
    } else {
      console.log(slots.length + " slots remaining");
      return false;
    }
    return slots;
  };
  const chekwin = (board) => {
    WIN_POSSIBILITY.forEach((win_pos) => {
      const win_pos_one = win_pos[0];
      const win_pos_two = win_pos[1];
      const win_pos_three = win_pos[2];
      const pos_one = board[win_pos_one];
      const pos_two = board[win_pos_two];
      const pos_three = board[win_pos_three];

      if (
        (pos_one === "X" && pos_two === "X" && pos_three === "X") ||
        (pos_one === "O" && pos_two === "O" && pos_three === "O")
      ) {
        win_player = win_pos[0];
        if (board[win_player] === "X") {
          alert(`${players_info[0]} wins`);
        } else {
          alert(`${players_info[1]} wins`);
        }
      } else if (board_full() === true) {
        alert("Draw Game!");
        GameBoard.clearBoard();
      }
      false;
    });
  };

  return { chekwin, WIN_POSSIBILITY, players_info };
})();

document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let player_1 = document.getElementById("name1").value;
  let player_2 = document.getElementById("name2").value;
  GameLogic.players_info.push(player_1, player_2);
  GameBoard.displayBoard();
  console.log(GameLogic.players_info);
});
