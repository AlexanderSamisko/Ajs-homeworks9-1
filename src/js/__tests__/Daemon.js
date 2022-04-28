import Daemon from '../Daemon';

test('testing whether Daemon with params could be created', () => {
  const Lilith = new Daemon('Lilith');
  expect(Lilith).toEqual({
    name: 'Lilith',
    type: 'Range-Heavy-Hitter',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    range: 5,
    occupation: 'Daemon',
  });
});

test('testing whether instance can be stoned', () => {
  const Lilith = new Daemon('Lilith');
  Lilith.stoned = true;
  expect(Lilith.stoned).toBe(true);
});

test('testing whether instance can be unstoned', () => {
  const Lilith = new Daemon('Lilith');
  Lilith.stoned = true;
  Lilith.stoned = false;
  expect(Lilith.stoned).toBe(false);
});


test('testing whether stoned can be called with wrong param', () => {
  const Lilith = new Daemon('Lilith');
  expect(() => {
    Lilith.stoned = 'возможно';
  }).toThrow('Или true или false');
});

test('testing whether Daemon actually can do any damage within range', () => {
  const Lilith = new Daemon('Lilith');
  Lilith.damage = 2;
  expect(Lilith.damage).toBe(36);
});

test('testing whether Daemon actually can do any damage to the target out of the range (check value)', () => {
  const Lilith = new Daemon('Lilith');
  Lilith.damage = 6;
  expect(Lilith.damage).toBe(0);
});

test('testing whether Daemon actually can do any damage on the same place (check value)', () => {
  const Lilith = new Daemon('Lilith');
  Lilith.damage = 0;
  expect(Lilith.damage).toBe(0);
});

test('testing damage that Daemon actually can do while been stoned', () => {
  const Lilith = new Daemon('Lilith');
  Lilith.stoned = true;
  Lilith.damage = 2;
  expect(Lilith.damage).toBe(31);
});
