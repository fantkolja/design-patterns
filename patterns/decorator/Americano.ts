import { Beverage } from "./Beverage";

export class Americano extends Beverage {
  constructor() {
    super();
    this.description = 'This is Americano';
  }

  public cost(): number {
    return 6;
  }
}