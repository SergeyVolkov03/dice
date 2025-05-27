import { Controller } from "./controller.js";
import { Validator } from "./validator.js";
import { Dice } from "./dice.js";

export class App {
  constructor(dices) {
    this.dices = dices.map((el) => new Dice(el));
    this.validator = new Validator();
  }

  start() {
    try {
      this.validator.checkDices(this.dices);
      new Controller(this.dices).getFirstMove();
    } catch (e) {
      console.log(e.message);
    }
  }
}
// Dice { faces: [ 1, 2, 3, 4, 5, 6 ] }
