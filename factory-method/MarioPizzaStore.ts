import { PizzaStore } from "./PizzaStore";
import { Pizza } from "./Pizza";
import { MarioCheesePizza } from "./MarioCheesePizza";
import { MarioVeggiePizza } from "./MarioVeggiePizza";

export class MarioPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    switch (type) {
      case 'cheese':
        return new MarioCheesePizza();
      case 'veggie':
        return new MarioVeggiePizza();
      default:
        throw new Error(`Unknown pizza type ${type}`);
    }
  }
}