import RangeHeavyHitter from '../RangeHeavyHitter';

test('testing whether RangeHeavyHitter with params could be created (right occupation case)', () => {
  const Merlin = new RangeHeavyHitter('Merlin', 'Range-Heavy-Hitter', 'Magician');
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

test('testing whether RangeHeavyHitter with params could be created (wrong occupation case)', () => {
  expect(() => new RangeHeavyHitter('Merlin', 'Range-Heavy-Hitter', 'Bowerman')).toThrow('Класс персонажа не соответсвует типу!');
});

test('testing whether instance can be stoned', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.stoned = true;
  expect(Lilith.stoned).toBe(true);
});

test('testing whether instance can be unstoned', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.stoned = true;
  Lilith.stoned = false;
  expect(Lilith.stoned).toBe(false);
});

test('testing whether stoned can be called with wrong param', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  expect(() => {
    Lilith.stoned = 'возможно';
  }).toThrow('Или true или false');
});

test('testing whether RangeHeavyHitter actually can do any damage within range', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.damage = 2;
  expect(Lilith.damage).toBe(36);
});

test('testing whether RangeHeavyHitter actually can do any damage to the target out of the range (check value)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.damage = 6;
  expect(Lilith.damage).toBe(0);
});

test('testing whether RangeHeavyHitter actually can do any damage on the same place (check value)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.damage = 0;
  expect(Lilith.damage).toBe(0);
});

test('testing damage that RangeHeavyHitter actually can do while been stoned', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.stoned = true;
  Lilith.damage = 2;
  expect(Lilith.damage).toBe(31);
});
