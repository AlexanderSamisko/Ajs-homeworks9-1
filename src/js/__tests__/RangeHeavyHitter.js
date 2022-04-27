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

test('testing whether instance can have an ailment (existed one)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.getAilments('Cursed');
  expect(Lilith.ailments.get('Cursed')).toBe(true);
});

test('testing whether instance can have an ailment (unexisted one)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  expect(() => {
    Lilith.getAilments('Bleeding');
  }).toThrow('В этом мире нет такого недуга!');
});

test('testing whether instance can have more than one an ailment (ones that exists)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.getAilments('Cursed');
  Lilith.getAilments('Stoned');
  const truth = [
    Lilith.ailments.get('Cursed'),
    Lilith.ailments.get('Stoned'),
  ];
  expect(truth).toStrictEqual([true, true]);
});

test('testing whether RangeHeavyHitter actually can do any damage within range', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  const clearDamage = Lilith.doDamage(2);
  expect(clearDamage).toBe(36);
});

test('testing whether RangeHeavyHitter actually can do any damage to the target out of the range (check value)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  const clearDamage = Lilith.doDamage(6);
  expect(clearDamage).toBe(0);
});

test('testing whether RangeHeavyHitter actually can do any damage to the target out of the range(check message)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  const logSpy = jest.spyOn(console, 'log');
  Lilith.doDamage(6);
  expect(logSpy).toHaveBeenCalledWith('Недолет!');
});

test('testing whether RangeHeavyHitter actually can do any damage on the same place (check value)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  const clearDamage = Lilith.doDamage(0);
  expect(clearDamage).toBe(0);
});

test('testing whether RangeHeavyHitter actually can do any damage on the same place (check effect)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.doDamage(0);
  expect(Lilith.health).toBe(0);
});

test('testing whether RangeHeavyHitter actually can do any damage on the same place (check message)', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  const logSpy = jest.spyOn(console, 'log');
  Lilith.doDamage(0);
  expect(logSpy).toHaveBeenCalledWith('Персонаж совершил суицид ударив в себя!');
});

test('testing damage that RangeHeavyHitter actually can do while been stoned', () => {
  const Lilith = new RangeHeavyHitter('Lilith', 'Range-Heavy-Hitter', 'Daemon');
  Lilith.getAilments('Stoned');
  const clearDamage = Lilith.doDamage(2);
  expect(clearDamage).toBe(31);
});
