import { FightBehavior } from "./FightBehavior";

export class MeleeFightBehavior implements FightBehavior {
  public fight() {
    console.log('Hit with the sword!');
  }
}