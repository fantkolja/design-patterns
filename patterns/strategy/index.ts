import { Knight } from "./Knight";
import { Mage } from "./Mage";

const knight = new Knight();
const mage = new Mage();

knight.threaten();
mage.threaten();
knight.fight();
mage.fight();