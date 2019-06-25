import { Character } from "./Character";
import { MageFightBehavior } from "./MageFightBehavior";
import { CommonThreatBehavior } from "./CommonThreatBehavior";

export class Mage extends Character {
  constructor() {
    super(new MageFightBehavior(), new CommonThreatBehavior());
  }
}