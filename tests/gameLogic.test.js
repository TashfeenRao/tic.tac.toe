import GameLogic from '../src/gameLoginc';

test('check win possibilities', () => {
  expect(GameLogic.WIN_POSSIBILITY.length).toEqual(8);
});