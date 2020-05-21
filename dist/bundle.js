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

/***/ "./src/bootstrap.min.css":
/*!*******************************!*\
  !*** ./src/bootstrap.min.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/bootstrap.min.css?");

/***/ }),

/***/ "./src/domListener.js":
/*!****************************!*\
  !*** ./src/domListener.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBorad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBorad */ \"./src/gameBorad.js\");\n/* harmony import */ var _gameLoginc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoginc */ \"./src/gameLoginc.js\");\n/* eslint-disable import/no-cycle */\n\n\n\nconst domListener = (() => {\n  const listenForMove = () => {\n    const squares = document.querySelectorAll('.token');\n    squares.forEach((token) => {\n      token.addEventListener('click', () => {\n        const position = token.getAttribute('data-id');\n        _gameBorad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].move(position);\n        _gameBorad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayBoard();\n        _gameLoginc__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chekwin(_gameBorad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board);\n      });\n    });\n  };\n  const listenForReset = () => {\n    const reset = document.getElementById('reset-game');\n    reset.addEventListener('click', () => {\n      _gameBorad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearBoard();\n      _gameBorad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayBoard();\n    });\n  };\n  return {\n    listenForMove, listenForReset,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domListener);\n\n//# sourceURL=webpack:///./src/domListener.js?");

/***/ }),

/***/ "./src/gameBorad.js":
/*!**************************!*\
  !*** ./src/gameBorad.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameLoginc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLoginc */ \"./src/gameLoginc.js\");\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* eslint-disable no-unused-expressions */\n/* eslint-disable import/no-cycle */\n\n\n\n\n\nconst GameBoard = (() => {\n  const board = ['', '', '', '', '', '', '', '', ''];\n  const message = document.getElementById('p');\n  const displayBoard = () => {\n    const startGame = document.getElementById('start-game');\n    const resetGame = document.getElementById('reset-game');\n    const formInfo = document.getElementById('players-form');\n    startGame.style.display = 'none';\n    resetGame.style.display = 'block';\n    formInfo.style.display = 'none';\n    const tableData = document.getElementsByClassName('table-data')[0];\n    const table = document.createElement('table');\n    if (_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].token === 'X') {\n      message.innerHTML = `${_gameLoginc__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playersInfo[0]}'s turns`;\n    } else {\n      message.innerHTML = `${_gameLoginc__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playersInfo[1]}'s turns`;\n    }\n    tableData.innerHTML = '';\n    table.id = 'board';\n    table.innerHTML = `\n          <tr>\n          <td><p class=\"token\" data-id=\"0\" >${board[0]}</p></td>\n          <td class=\"vert\"><p class=\"token\" data-id=\"1\">${board[1]}</p></td>\n          <td><p class=\"token\" data-id=\"2\">${board[2]}</p></td>\n        </tr>\n        <tr>\n          <td class=\"hori\"><p class=\"token\" data-id=\"3\"\">${board[3]}</p></td>\n          <td class=\"vert hori\"><p class=\"token\" data-id=\"4\"\">${board[4]}</p></td>\n          <td class=\"hori\"><p class=\"token\" data-id=\"5\">${board[5]}</p></td>\n        </tr>\n        <tr>\n          <td><p class=\"token\" data-id=\"6\">${board[6]}</p></td>\n          <td class=\"vert\"><p class=\"token\" data-id=\"7\">${board[7]}</p></td>\n          <td><p class=\"token\" data-id=\"8\"\">${board[8]}</p></td>\n        </tr>  \n          `;\n    tableData.append(table);\n    _domListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listenForMove();\n  };\n  const clearBoard = () => {\n    for (let i = 0; i < 9; i += 1) {\n      board[i] = '';\n    }\n    board;\n    _gameLoginc__WEBPACK_IMPORTED_MODULE_1__[\"default\"].winArr = [];\n  };\n  const move = (index) => {\n    if (board[index] === '') {\n      board[index] = _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].token;\n      _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].token = _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"].token === 'X' ? 'O' : 'X';\n    } else {\n      message.innerHTML = 'Position taken';\n    }\n  };\n  return {\n    board, displayBoard, clearBoard, move,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n//# sourceURL=webpack:///./src/gameBorad.js?");

/***/ }),

/***/ "./src/gameLoginc.js":
/*!***************************!*\
  !*** ./src/gameLoginc.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBorad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBorad */ \"./src/gameBorad.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-unused-expressions */\n/* eslint-disable no-use-before-define */\n\n\nconst GameLogic = (() => {\n  const message = document.getElementById('p');\n  const playersInfo = [];\n  let winArr = [];\n  const WIN_POSSIBILITY = [\n    [0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [2, 4, 6],\n  ];\n  const GameEnd = () => {\n    const squares = document.querySelectorAll('.token');\n    squares.forEach((token) => {\n      token.removeEventListener('click', () => {\n        const position = token.getAttribute('data-id');\n        _gameBorad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].move(position);\n        return false;\n      });\n    });\n  };\n  const freeBoard = () => {\n    const slots = [];\n    _gameBorad__WEBPACK_IMPORTED_MODULE_0__[\"default\"].board.forEach((x) => {\n      if (x === '') {\n        slots.push(x);\n      }\n    });\n    return slots;\n  };\n  const chekwin = (board) => {\n    const ResetArr = [];\n    winArr = ResetArr;\n    WIN_POSSIBILITY.forEach((winPos) => {\n      const winPosOne = winPos[0];\n      const winPosTwo = winPos[1];\n      const winPosThree = winPos[2];\n      const posOne = board[winPosOne];\n      const posTwo = board[winPosTwo];\n      const posThree = board[winPosThree];\n\n      if (\n        (posOne === 'X' && posTwo === 'X' && posThree === 'X')\n            || (posOne === 'O' && posTwo === 'O' && posThree === 'O')\n      ) {\n        winArr.push(winPos);\n        const winPlayer = winPos[0];\n        if (board[winPlayer] === 'X') {\n          message.innerHTML = `${playersInfo[0]} wins`;\n          GameEnd();\n        } else {\n          message.innerHTML = `${playersInfo[1]} wins`;\n          GameEnd();\n        }\n      } else if (freeBoard().length === 0) {\n        chekDraw();\n      }\n      false;\n    });\n  };\n\n  const chekDraw = () => {\n    if (winArr.length === 0) {\n      message.innerHTML = 'Draw Game';\n      GameEnd();\n    }\n  };\n\n  return {\n    chekwin, WIN_POSSIBILITY, playersInfo, winArr,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameLogic);\n\n//# sourceURL=webpack:///./src/gameLoginc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.min.css */ \"./src/bootstrap.min.css\");\n/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameLoginc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameLoginc */ \"./src/gameLoginc.js\");\n/* harmony import */ var _gameBorad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameBorad */ \"./src/gameBorad.js\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable no-unused-expressions */\n/* eslint-disable no-use-before-define */\n\n\n\n\n\n\n\n\ndocument.getElementById('players-form').addEventListener('submit', (event) => {\n  event.preventDefault();\n  _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name = document.getElementById('name1').value;\n  _gameLoginc__WEBPACK_IMPORTED_MODULE_4__[\"default\"].playersInfo.push(_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name);\n  _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name = document.getElementById('name2').value;\n  _gameLoginc__WEBPACK_IMPORTED_MODULE_4__[\"default\"].playersInfo.push(_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name);\n  _gameBorad__WEBPACK_IMPORTED_MODULE_5__[\"default\"].displayBoard();\n  _domListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listenForReset();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst players = ((name) => {\n  const token = 'X';\n  return { name, token };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (players);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });