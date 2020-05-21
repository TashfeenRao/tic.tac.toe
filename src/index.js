/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */

import style from './style.css';
import bottstrap from './bootstrap.min.css';
import domListener from './domListener';
import players from './player';
import GameLogic from './gameLoginc';
import GameBoard from './gameBorad';

document.getElementById('players-form').addEventListener('submit', (event) => {
  event.preventDefault();
  players.name = document.getElementById('name1').value;
  GameLogic.playersInfo.push(players.name);
  players.name = document.getElementById('name2').value;
  GameLogic.playersInfo.push(players.name);
  GameBoard.displayBoard();
  domListener.listenForReset();
});
