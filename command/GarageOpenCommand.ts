import { Command } from "./Command";
import { GarageDoor } from "./GarageDoor";

export class GarageOpenCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}
  public execute(): void {
    this.garageDoor.up();
  }
}