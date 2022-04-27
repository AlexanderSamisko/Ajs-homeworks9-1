import Character from './Character';

export default class RangeHeavyHitter extends Character {
  constructor(name, type = 'Range-Heavy-Hitter', occupation) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
    this.range = 5;
    if (!RangeHeavyHitter.occupations.includes(occupation)) {
      throw new Error('Класс персонажа не соответсвует типу!');
    } else {
      this.occupation = occupation;
    }
  }

  getAilments(ailment) {
    if (RangeHeavyHitter.ailmentBar.includes(ailment)) {
      if (this.ailments) {
        this.ailments.set(ailment, true);
      } else {
        this.ailments = new Map([[ailment, true]]);
      }
    } else {
      throw new Error('В этом мире нет такого недуга!');
    }
  }

  doDamage(range) {
    if (range <= this.range && range > 0) {
      if (this.ailments && this.ailments.get('Stoned')) {
        return Math.floor((this.attack - Math.log2(range) * 5) * (11 - range) / 10);
      }
      return Math.floor(this.attack * (11 - range) / 10);
    } if (range >= this.range) {
      console.log('Недолет!');
      return 0;
    }
    console.log('Персонаж совершил суицид ударив в себя!');
    this.health = 0;
    return 0;
  }
}

RangeHeavyHitter.occupations = [
  'Daemon',
  'Magician',
];

RangeHeavyHitter.ailmentBar = [
  'Stoned',
  'Cursed',
  'Scared',
  'Silence',
];
