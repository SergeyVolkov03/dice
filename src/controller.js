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
    this.commands = new Commands();
    this.number;
    this.security;
    this.userValue;
    this.isUserGuessed;
    this.userDice;
    this.myDice;
  }

  generateMove(range) {
    this.number = new FairNumber(range).getNumber();
    this.security = new Security(this.number);
  }

  showFirstMove(range) {
    this.message.showStartMessage();
    this.message.showRangeAndHmac(range, this.security.getHmac());
    this.message.showMessageForFirstMove();
  }

  showCommands(value) {
    this.commands.generateCommands(value);
    this.commands.showCommands();
  }

  getUserSelection() {
    this.userValue = this.commands.getValueByCommand(
      prompt()("Your selection: ")
    );
    this.checkUserValue();
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

  checkUserValue() {
    if (!this.userValue && this.userValue !== 0) {
      console.log("Incorrect command");
      this.getUserSelection();
    } else {
      this.chechOnExit(this.userValue);
      this.chechOnHelp(this.userValue);
    }
  }

  showMySelection() {
    this.message.showMySelectionAndKey(this.number, this.security.getKey());
  }

  getIsGuessed() {
    this.isUserGuessed = this.userValue === this.number;
  }

  getFirstMove() {
    this.generateMove(RANGE);
    this.showFirstMove(RANGE);
    this.showCommands(RANGE);
    this.getUserSelection();
    this.showMySelection();
    this.getIsGuessed();
    this.showChoosingDices();
  }

  getMyDice() {
    const index = new FairNumber(this.dices.length - 1).getNumber();
    this.myDice = this.dices[index];
    this.dices = this.dices.filter((dice) => dice !== this.myDice);
  }

  getUserDice(index) {
    this.userDice = this.dices[index];
    this.dices = this.dices.filter((dice) => dice !== this.userDice);
  }

  showUserSelectionDice() {
    this.message.showMessageChooseDice();
    this.showCommands(this.dices);
    this.getUserSelection();
    this.getUserDice(Number(this.userValue));
    this.message.showMessageUserDice(this.userDice.getFaces());
  }

  showMySelectionDice() {
    this.getMyDice();
    this.message.showMessageMyDice(this.isUserGuessed, this.myDice.getFaces());
  }

  showChoosingDices() {
    if (this.isUserGuessed) {
      this.message.showMessageUserIsGuessed();
      this.showUserSelectionDice();
      this.showMySelectionDice();
    } else {
      this.showMySelectionDice();
      this.showUserSelectionDice();
    }
  }
}
