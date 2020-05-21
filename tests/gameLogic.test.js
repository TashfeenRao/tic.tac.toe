/* eslint-disable no-unused-vars */
import GameLogic from '../src/gameLoginc';
import GameBoard from '../src/gameBorad';
import players from '../src/player';


test('check win possibilities', () => {
  expect(GameLogic.WIN_POSSIBILITY.length).toEqual(8);
});

test('check if there are freeBoard', () => {
  expect(GameLogic.freeBoard().length).toEqual(9);
});

test('check if there is a winner', () => {
  players.name = 'Tashfeen';
  GameLogic.playersInfo.push(players.name);
  players.name = 'Remy';
  GameLogic.playersInfo.push(players.name);
  document.body.innerHTML = '<div>'
  + '  <h2 id="p" > </h2>'
  + '</div>';
  const winLabel = document.getElementById('p');
  const board = ['X', 'X', 'X', 'O', '', 'O', '', '', 'O'];
  GameLogic.chekwin(GameBoard.board = board);
  expect(winLabel.innerHTML).toEqual('Tashfeen wins');
});

test('check for Draw Game', () => {
  players.name = 'Tashfeen';
  GameLogic.playersInfo.push(players.name);
  players.name = 'Remy';
  GameLogic.playersInfo.push(players.name);
  document.body.innerHTML = '<div>'
  + '  <h2 id="p" > </h2>'
  + '</div>';
  const winLabel = document.getElementById('p');
  const board = ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'];
  GameLogic.chekwin(GameBoard.board = board);
  expect(winLabel.innerHTML).toEqual('Draw Game');
});