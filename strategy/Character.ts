import { FightBehavior } from "./FightBehavior";
import { ThreatBehavior } from "./ThreatBehavior";

export class Character {
  private fightBehavior: FightBehavior;
  private threatBehavior: ThreatBehavior;

  constructor(fightBehavior, threatBehavior) {
      this.setFightBehavior(fightBehavior);
      this.setThreatBehavior(threatBehavior);
  }

  public setFightBehavior(behavior: FightBehavior) {
    this.fightBehavior = behavior;
  }

  public setThreatBehavior(behavior: ThreatBehavior) {
    this.threatBehavior = behavior;
  }

  public fight() {
    this.fightBehavior.fight();
  }

  public threaten() {
    this.threatBehavior.threaten();
  }
}