export abstract class Pizza {
  protected name: string;
  protected dough: string;
  protected souce: string;
  protected toppings: string[];
  public prepare(): void {
    console.log(`Preparing ${this.name}...`);
    console.log(`Tossing dough "${this.dough}"...`);
    console.log(`Adding souce "${this.souce}"...`);
    console.log(`Adding toppings ${this.toppings.join(', ')}...`);
  }
  public bake(): void {
    console.log(`Baking ${this.name}...`);
  }
  public cut(): void {
    console.log(`Cutting ${this.name}...`);
  }
  public box(): void {
    console.log(`Putting ${this.name} into a box...`);
  }
}