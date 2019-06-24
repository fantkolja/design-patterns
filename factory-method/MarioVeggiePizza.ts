import { Pizza } from "./Pizza";

export class MarioVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Mario Veggie Pizza';
    this.dough = 'thin dough';
    this.souce = 'tasty souce without animal products';
    this.toppings = ['Cucumber', 'Tomato'];
  }
}