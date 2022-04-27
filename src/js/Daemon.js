import RangeHeavyHitter from './RangeHeavyHitter';

export default class Daemon extends RangeHeavyHitter {
  constructor(name, type, occupation = 'Daemon') {
    super(name, type, occupation);
  }
}
