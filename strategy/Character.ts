import { FightBehavior } from "./FightBehavior";
import { ThreatBehavior } from "./ThreatBehavior";

export class Character {
  constructor(
    private fightBehavior: FightBehavior,
    private threatBehavior: ThreatBehavior,
    ) {
  }

  public fight() {
    this.fightBehavior.fight();
  }

  public threaten() {
    this.threatBehavior.threaten();
  }
}