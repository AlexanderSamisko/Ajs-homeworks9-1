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

  get stoned() {
    return this.hasstoned;
  }

  set stoned(value) {
    if (value === true || value === false) {
      this.hasstoned = value;
    } else {
      throw new Error('Или true или false');
    }
  }

  get damage() {
    return this.scaledDamage;
  }


  set damage(range) {
    if (range <= this.range && range > 0) {
      if (this.hasstoned) {
        this.scaledDamage = Math.floor((this.attack - Math.log2(range) * 5) * (11 - range) / 10);
      } else {
        this.scaledDamage = Math.floor(this.attack * (11 - range) / 10);
      }
    } else {
      this.scaledDamage = 0;
    }
  }
}

RangeHeavyHitter.occupations = [
  'Daemon',
  'Magician',
];
