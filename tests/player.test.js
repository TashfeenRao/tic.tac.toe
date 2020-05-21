import players from '../src/player';

test('return name of player', () => {
  players.name = 'tashfeen';
  const player1 = players.name;
  players.name = 'remi';
  const player2 = players.name;
  expect(player1).toEqual('tashfeen');
  expect(player2).toEqual('remi');
});