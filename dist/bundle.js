/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-unused-expressions */\r\n/* eslint-disable no-use-before-define */\r\nconst players = ((name) => {\r\n  const token = 'X';\r\n  return { name, token };\r\n})();\r\n\r\nconst GameBoard = (() => {\r\n  const board = ['', '', '', '', '', '', '', '', ''];\r\n  const message = document.getElementById('p');\r\n  const displayBoard = () => {\r\n    const startGame = document.getElementById('start-game');\r\n    const resetGame = document.getElementById('reset-game');\r\n    const formInfo = document.getElementById('players-form');\r\n    startGame.style.display = 'none';\r\n    resetGame.style.display = 'block';\r\n    formInfo.style.display = 'none';\r\n    const tableData = document.getElementsByClassName('table-data')[0];\r\n    const table = document.createElement('table');\r\n    if (players.token === 'X') {\r\n      message.innerHTML = `${GameLogic.playersInfo[0]}'s turns`;\r\n    } else {\r\n      message.innerHTML = `${GameLogic.playersInfo[1]}'s turns`;\r\n    }\r\n    tableData.innerHTML = '';\r\n    table.id = 'board';\r\n    table.innerHTML = `\r\n        <tr>\r\n        <td><p class=\"token\" onclick=\"GameBoard.move(0);\" >${board[0]}</p></td>\r\n        <td class=\"vert\"><p class=\"token\"  onclick=\"GameBoard.move(1);\">${board[1]}</p></td>\r\n        <td><p class=\"token\" onclick=\"GameBoard.move(2);\">${board[2]}</p></td>\r\n      </tr>\r\n      <tr>\r\n        <td class=\"hori\"><p class=\"token\" onclick=\"GameBoard.move(3);\">${board[3]}</p></td>\r\n        <td class=\"vert hori\"><p class=\"token\" onclick=\"GameBoard.move(4);\">${board[4]}</p></td>\r\n        <td class=\"hori\"><p class=\"token\" onclick=\"GameBoard.move(5);\">${board[5]}</p></td>\r\n      </tr>\r\n      <tr>\r\n        <td><p class=\"token\" onclick=\"GameBoard.move(6);\">${board[6]}</p></td>\r\n        <td class=\"vert\"><p class=\"token\"onclick=\"GameBoard.move(7);\">${board[7]}</p></td>\r\n        <td><p class=\"token\" onclick=\"GameBoard.move(8);\">${board[8]}</p></td>\r\n      </tr>  \r\n        `;\r\n    tableData.append(table);\r\n  };\r\n  const clearBoard = () => {\r\n    for (let i = 0; i < 9; i += 1) {\r\n      board[i] = '';\r\n    }\r\n    board;\r\n    displayBoard();\r\n    GameLogic.winArr = [];\r\n  };\r\n  const move = (index) => {\r\n    if (board[index] === '') {\r\n      board[index] = players.token;\r\n      players.token = players.token === 'X' ? 'O' : 'X';\r\n      displayBoard();\r\n      GameLogic.chekwin(board);\r\n    } else {\r\n      message.innerHTML = 'Position taken';\r\n    }\r\n  };\r\n  return {\r\n    board, displayBoard, clearBoard, move,\r\n  };\r\n})();\r\n\r\nconst GameLogic = (() => {\r\n  const message = document.getElementById('p');\r\n  const playersInfo = [];\r\n  let winArr = [];\r\n  const WIN_POSSIBILITY = [\r\n    [0, 1, 2],\r\n    [3, 4, 5],\r\n    [6, 7, 8],\r\n    [0, 3, 6],\r\n    [1, 4, 7],\r\n    [2, 5, 8],\r\n    [0, 4, 8],\r\n    [2, 4, 6],\r\n  ];\r\n  const GameEnd = () => {\r\n    const action = document.getElementsByClassName('token');\r\n    for (let i = 0; i < action.length; i += 1) {\r\n      action[i].onclick = null;\r\n    }\r\n  };\r\n  const freeBoard = () => {\r\n    const slots = [];\r\n    GameBoard.board.forEach((x) => {\r\n      if (x === '') {\r\n        slots.push(x);\r\n      }\r\n    });\r\n    return slots;\r\n  };\r\n  const chekwin = (board) => {\r\n    const ResetArr = [];\r\n    winArr = ResetArr;\r\n    WIN_POSSIBILITY.forEach((winPos) => {\r\n      const winPosOne = winPos[0];\r\n      const winPosTwo = winPos[1];\r\n      const winPosThree = winPos[2];\r\n      const posOne = board[winPosOne];\r\n      const posTwo = board[winPosTwo];\r\n      const posThree = board[winPosThree];\r\n\r\n      if (\r\n        (posOne === 'X' && posTwo === 'X' && posThree === 'X')\r\n          || (posOne === 'O' && posTwo === 'O' && posThree === 'O')\r\n      ) {\r\n        winArr.push(winPos);\r\n        const winPlayer = winPos[0];\r\n        if (board[winPlayer] === 'X') {\r\n          message.innerHTML = `${playersInfo[0]} wins`;\r\n          GameEnd();\r\n        } else {\r\n          message.innerHTML = `${playersInfo[1]} wins`;\r\n          GameEnd();\r\n        }\r\n      } else if (freeBoard().length === 0) {\r\n        chekDraw();\r\n      }\r\n      false;\r\n    });\r\n  };\r\n\r\n  const chekDraw = () => {\r\n    if (winArr.length === 0) {\r\n      message.innerHTML = 'Draw Game';\r\n      GameEnd();\r\n    }\r\n  };\r\n\r\n  return {\r\n    chekwin, WIN_POSSIBILITY, playersInfo, winArr,\r\n  };\r\n})();\r\n\r\ndocument.getElementById('players-form').addEventListener('submit', (event) => {\r\n  event.preventDefault();\r\n  players.name = document.getElementById('name1').value;\r\n  GameLogic.playersInfo.push(players.name);\r\n  players.name = document.getElementById('name2').value;\r\n  GameLogic.playersInfo.push(players.name);\r\n  GameBoard.displayBoard();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });