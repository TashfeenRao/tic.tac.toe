import gameBorad from '../src/gameBorad';

test('The board should load empy', () => {
  expect(gameBorad.board).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('The board should be an array with 9 element', () => {
  expect(gameBorad.board.length).toBe(9);
});

test('Clear the board', () => {
  gameBorad.board[1] = 'X';
  gameBorad.clearBoard();
  expect(gameBorad.board).toEqual(['', '', '', '', '', '', '', '', '']);
});

test('Add token to board ', () => {
  gameBorad.move(1);
  expect(gameBorad.board).toEqual(['', 'X', '', '', '', '', '', '', '']);
});