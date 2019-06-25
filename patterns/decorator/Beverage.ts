export abstract class Beverage {
  protected description = 'Unknown beverage';
  public abstract cost(): number;
  public getDescription(): string {
    return this.description;
  };
}