import { AsciiTable3 } from "ascii-table3";
import { Probability } from "./probability.js";

export class Table {
  constructor(dices) {
    this.dices = dices.map((dice) => dice.getFaces());
    this.body = [];
    this.table = new AsciiTable3();
  }

  #setTitle() {
    this.table.setTitle("Probability of the win fоr the user:");
  }

  #setHeader() {
    this.table.setHeading("User dice v", ...this.dices);
  }

  #generateProbabilityForDice(firstDice) {
    return this.dices.map((secondDice) => [
      new Probability(firstDice, secondDice).getProbability(),
    ]);
  }

  #generateRow(dice) {
    return [dice, ...this.#generateProbabilityForDice(dice)];
  }

  #generateBody() {
    if (!this.body.length) {
      this.dices.forEach((dice) => {
        this.body.push(this.#generateRow(dice));
      });
    }
  }

  #setBody() {
    this.#generateBody();
    this.table.clearRows();
    this.table.addRowMatrix(this.body);
  }

  #generateTable() {
    this.#setTitle();
    this.#setHeader();
    this.#setBody();
  }

  showTable() {
    this.#generateTable();
    console.log(this.table.toString());
  }
}
