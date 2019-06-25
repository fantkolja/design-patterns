import { ThreatBehavior } from "./ThreatBehavior";

export class CommonThreatBehavior implements ThreatBehavior {
  public threaten(): void {
    console.log('Arghhh! I\'ll destroy you');
  }
}