import { Command } from "./Command";

export class SmartHouseRemote {
  private slots: [Command, Command];
  setSlot(command: Command, index: number) {
    this.slots[index] = command;
  }
  pressButton(index: number) {
    this.slots[index] && this.slots[index].execute();
  }
}