import GameLogic from '../src/gameLoginc';

test('check win possibilities', () => {
  expect(GameLogic.WIN_POSSIBILITY.length).toEqual(8);
});

test('check the freeBoard', () => {
  expect(GameLogic.freeBoard().length).toEqual(9);
});