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

test('testing whether instance can have an ailment (existed one)', () => {
  const Merlin = new Magician('Merlin');
  Merlin.getAilments('Cursed');
  expect(Merlin.ailments.get('Cursed')).toBe(true);
});

test('testing whether instance can have an ailment (unexisted one)', () => {
  const Merlin = new Magician('Merlin');
  expect(() => {
    Merlin.getAilments('Bleeding');
  }).toThrow('В этом мире нет такого недуга!');
});

test('testing whether instance can have more than one an ailment (ones that exists)', () => {
  const Merlin = new Magician('Merlin');
  Merlin.getAilments('Cursed');
  Merlin.getAilments('Stoned');
  const truth = [
    Merlin.ailments.get('Cursed'),
    Merlin.ailments.get('Stoned'),
  ];
  expect(truth).toStrictEqual([true, true]);
});

test('testing whether Magician actually can do any damage within range', () => {
  const Merlin = new Magician('Merlin');
  const clearDamage = Merlin.doDamage(2);
  expect(clearDamage).toBe(36);
});

test('testing whether Magician actually can do any damage to the target out of the range (check value)', () => {
  const Merlin = new Magician('Merlin');
  const clearDamage = Merlin.doDamage(6);
  expect(clearDamage).toBe(0);
});

test('testing whether Magician actually can do any damage to the target out of the range(check message)', () => {
  const Merlin = new Magician('Merlin');
  const logSpy = jest.spyOn(console, 'log');
  Merlin.doDamage(6);
  expect(logSpy).toHaveBeenCalledWith('Недолет!');
});

test('testing whether Magician actually can do any damage on the same place (check value)', () => {
  const Merlin = new Magician('Merlin');
  const clearDamage = Merlin.doDamage(0);
  expect(clearDamage).toBe(0);
});

test('testing whether Magician actually can do any damage on the same place (check effect)', () => {
  const Merlin = new Magician('Merlin');
  Merlin.doDamage(0);
  expect(Merlin.health).toBe(0);
});

test('testing whether Magician actually can do any damage on the same place (check message)', () => {
  const Merlin = new Magician('Merlin');
  const logSpy = jest.spyOn(console, 'log');
  Merlin.doDamage(0);
  expect(logSpy).toHaveBeenCalledWith('Персонаж совершил суицид ударив в себя!');
});

test('testing damage that Magician actually can do while been stoned', () => {
  const Merlin = new Magician('Merlin');
  Merlin.getAilments('Stoned');
  const clearDamage = Merlin.doDamage(2);
  expect(clearDamage).toBe(31);
});
