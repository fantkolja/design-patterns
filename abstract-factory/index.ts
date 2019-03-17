import { MarioIngredientFactory } from "./MarioIngredientFactory";

const mario = new MarioIngredientFactory();
const marioSouce = mario.createSouce();
const marioDough = mario.createDough();
marioDough.toss();