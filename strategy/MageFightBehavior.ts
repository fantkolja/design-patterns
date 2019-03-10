import { FightBehavior } from "./FightBehavior";

export class MageFightBehavior implements FightBehavior {
  public fight() {
    console.log('Hit with fireball!');
  }
}