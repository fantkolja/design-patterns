export class Love {
  private static instance: Love;
  private constructor() {
    console.log(`Love is born`);
  }
  public static getInstance(): Love {
    if (!this.instance) this.instance = new Love();
    return this.instance;
  }
}