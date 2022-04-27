export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа (name) должно быть строкой длиной от 2 до 10 символов!');
    } else {
      this.name = name;
    }
    if (!Character.types.includes(type)) {
      throw new Error('Тип персонажа(type) не соответствует вселенной!');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

Character.types = [
  'Melee-Heavy-Hitter',
  'Range-Heavy-Hitter',
  'Support',
  'Melee-Hitter',
  'Range-Hitter',
];
