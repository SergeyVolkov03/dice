import { Message } from "./message.js";
import { Table } from "./table.js";
import { FairNumber } from "./number.js";
import { Security } from "./security.js";
import { Commands } from "./commands.js";
import prompt from "prompt-sync";

const RANGE = 1;

export class Controller {
  constructor(dices) {
    this.dices = dices;
    this.message = new Message();
    this.table = new Table(dices);
    this.number;
    this.security;
    this.commands;
    this.userValue;
  }

  generateFirstMove(range) {
    this.number = new FairNumber(range).getNumber();
    this.security = new Security(this.number);
  }

  showFirstMove(range) {
    this.message.showStartMessage();
    this.message.showRangeAndHmac(range, this.security.getHmac());
    this.message.showMessageForFirstMove();
  }

  showCommands(value) {
    this.commands = new Commands();
    this.commands.generateCommands(value);
    this.commands.showCommands();
  }

  getUserSelection() {
    const result = this.commands.getValueByCommand(
      prompt()("Your selection: ")
    );
    if (!result) {
      console.log("Incorrect command");
      this.getUserSelection();
    } else {
      this.chechOnExit(result);
      this.chechOnHelp(result);

      this.userValue = result;
      this.showMySelection();
    }
  }

  chechOnExit(value) {
    if (value === "exit") process.exit();
  }

  chechOnHelp(value) {
    if (value === "help") {
      this.table.showTable();
      this.getUserSelection();
    }
  }

  showMySelection() {
    this.message.showMySelectionAndKey(this.number, this.security.getKey());
  }

  getFirstMove(range) {
    this.generateFirstMove(range);
    this.showFirstMove(range);
    this.showCommands(range);
    this.getUserSelection();
  }
}
const a = new Controller([
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
]);
a.getFirstMove(RANGE);
