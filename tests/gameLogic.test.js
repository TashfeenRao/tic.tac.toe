import GameLogic from '../src/gameLoginc';
import GameBoard from '../src/gameBorad';

test('check win possibilities', () => {
  expect(GameLogic.WIN_POSSIBILITY.length).toEqual(8);
});

test('check the freeBoard', () => {
  expect(GameLogic.freeBoard().length).toEqual(9);
});

test('check for is there a win', () => {
  GameBoard.board = ['X', 'X', 'X', '', '', '', '', '', ''];
  GameLogic.chekwin();
  expect(GameLogic.winArr.length).toEqual(1);
});