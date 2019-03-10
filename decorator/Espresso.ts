import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'This is Espresso';
  }
  public cost(): number {
    return 5;
  }
}