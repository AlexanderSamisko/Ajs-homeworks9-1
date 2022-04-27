import RangeHeavyHitter from './RangeHeavyHitter';

export default class Magician extends RangeHeavyHitter {
  constructor(name, type, occupation = 'Magician') {
    super(name, type, occupation);
  }
}
