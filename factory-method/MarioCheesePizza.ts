import { Pizza } from "./Pizza";

export class MarioCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Mario Cheese Pizza';
    this.dough = 'thin dough';
    this.souce = 'tasty souce';
    this.toppings = ['Cheddar', 'Philadelphia'];
  }
}