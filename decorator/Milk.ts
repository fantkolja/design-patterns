import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "./Beverage";

export class Milk extends CondimentDecorator {
  constructor(private baseBeverage: Beverage) {
    super();
  }

  public cost(): number {
    return this.baseBeverage.cost() + 1;
  }

  public getDescription(): string {
    return `${this.baseBeverage.getDescription()}, milk`;
  }
}