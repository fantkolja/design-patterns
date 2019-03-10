import { Americano } from "./Americano";
import { Milk } from "./Milk";

const americano = new Americano();
const americanoWithMilk = new Milk(americano);
console.log(americanoWithMilk.cost());
console.log(americanoWithMilk.getDescription());