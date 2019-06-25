import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { Souce } from "./Souce";
import { Dough } from "./Dough";
import { MarioDough } from "./MarioDough";
import { MarioSouce } from "./MarioSouce";

export class MarioIngredientFactory implements PizzaIngredientFactory {
  public createSouce(): Souce {
    return new MarioSouce('mario marinara');
  }
  public createDough(): Dough {
    return new MarioDough('mario dough');
  }
}