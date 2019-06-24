import { Duck } from "./Duck";
import { Turkey } from "./Turkey";
import { TurkeyAdapter } from "./DuckAdapter";

const duck = new Duck();
duck.quack();
duck.fly();

const turkey = new Turkey();
turkey.gobble();
turkey.fly();

const duck2 = new TurkeyAdapter(new Turkey());
duck2.quack();
duck2.fly();