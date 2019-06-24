import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class TurkeyAdapter implements Duck {
  constructor(private turkey: Turkey) {}
  quack(): void {
    this.turkey.gobble();
  }
  fly(): void {
    [1,2,3,4,5].forEach(() => this.turkey.fly());
  }
}