import { Dough } from "./Dough";

export class MarioDough implements Dough {
  constructor(private name: string) {}
  public getName(): string {
    return this.name;
  }
  public toss(): void {
    console.log(`${this.name} is tossed`);
  }
}