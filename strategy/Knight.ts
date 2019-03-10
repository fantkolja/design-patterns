import { Character } from "./Character";
import { MeleeFightBehavior } from "./MeleeFightBehavior";
import { CommonThreatBehavior } from "./CommonThreatBehavior";

export class Knight extends Character {
  constructor() {
    super(new MeleeFightBehavior(), new CommonThreatBehavior());
  }
}