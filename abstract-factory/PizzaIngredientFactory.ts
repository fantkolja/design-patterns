import { Souce } from "./Souce";
import { Dough } from "./Dough";

export interface PizzaIngredientFactory {
  createSouce(): Souce;
  createDough(): Dough;
}