import { Souce } from "./Souce";

export class MarioSouce implements Souce {
  constructor(private name: string) {}
  public getName(): string {
    return this.name;
  }
}