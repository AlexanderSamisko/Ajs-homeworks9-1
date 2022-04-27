import Character from '../Character';


test('testing whether Character with params could be created', () => {
  const Alfa = new Character('Alfa', 'Melee-Heavy-Hitter', 40, 10);
  expect(Alfa).toEqual({
    name: 'Alfa',
    type: 'Melee-Heavy-Hitter',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('testing whether there will be an Error with wrong param type', () => {
  expect(() => new Character('Betta', 'Gorilla', 80, 80)).toThrow('Тип персонажа(type) не соответствует вселенной!');
});

test('testing whether there will be an Error with wrong param name', () => {
  expect(() => new Character('Navoohodonoser', 'Range-Heavy-Hitter', 10, 40)).toThrow('Имя персонажа (name) должно быть строкой длиной от 2 до 10 символов!');
});

test('testing whether there will be an Error with wrong param name', () => {
  expect(() => new Character(15, 'Range-Hitter', 25, 25)).toThrow('Имя персонажа (name) должно быть строкой длиной от 2 до 10 символов!');
});
