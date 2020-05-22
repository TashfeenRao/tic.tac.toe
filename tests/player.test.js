import players from '../src/player';

test('return name of player', () => {
  players.name = 'tashfeen';
  const player1 = players.name;
  players.name = 'remi';
  const player2 = players.name;
  expect(player1).toEqual('tashfeen');
  expect(player2).toEqual('remi');
});

test('return token X or O', () => {
  players.token = 'X';
  const token1 = players.token;
  players.token = 'O';
  const token2 = players.token;
  expect(token1).toEqual('X');
  expect(token2).toEqual('O');
});