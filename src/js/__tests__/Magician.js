import Magician from '../Magician';

test('testing whether Magician with params could be created', () => {
  const Merlin = new Magician('Merlin');
  expect(Merlin).toEqual({
    name: 'Merlin',
    type: 'Range-Heavy-Hitter',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    range: 5,
    occupation: 'Magician',
  });
});

test('testing whether instance can be stoned', () => {
  const Merlin = new Magician('Merlin');
  Merlin.stoned = true;
  expect(Merlin.stoned).toBe(true);
});

test('testing whether instance can be unstoned', () => {
  const Merlin = new Magician('Merlin');
  Merlin.stoned = true;
  Merlin.stoned = false;
  expect(Merlin.stoned).toBe(false);
});


test('testing whether stoned can be called with wrong param', () => {
  const Merlin = new Magician('Merlin');
  expect(() => {
    Merlin.stoned = 'возможно';
  }).toThrow('Или true или false');
});

test('testing whether Magician actually can do any damage within range', () => {
  const Merlin = new Magician('Merlin');
  Merlin.damage = 2;
  expect(Merlin.damage).toBe(36);
});

test('testing whether Magician actually can do any damage to the target out of the range (check value)', () => {
  const Merlin = new Magician('Merlin');
  Merlin.damage = 6;
  expect(Merlin.damage).toBe(0);
});

test('testing whether Magician actually can do any damage on the same place (check value)', () => {
  const Merlin = new Magician('Merlin');
  Merlin.damage = 0;
  expect(Merlin.damage).toBe(0);
});

test('testing damage that Magician actually can do while been stoned', () => {
  const Merlin = new Magician('Merlin');
  Merlin.stoned = true;
  Merlin.damage = 2;
  expect(Merlin.damage).toBe(31);
});
