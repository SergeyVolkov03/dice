export class Validator {
  checkQuantityDices(dices) {
    if (dices.length < 3) {
      throw new Error(
        `You entered ${dices.length} dice(s). For play, you need at least 3 dices`
      );
    }
  }

  checkIsNumber(value) {
    if (typeof value !== "number") {
      throw new Error(`The faces must be a number`);
    }
  }

  checkIsInteger(value) {
    if (!Number.isInteger(value)) {
      throw new Error(`The faces must be an integer`);
    }
  }

  checkFaces(dice) {
    dice.forEach((face) => {
      this.checkIsNumber(face);
      this.checkIsInteger(face);
    });
  }

  checkAllDicesByFaces(dices) {
    dices.forEach((dice) => {
      this.checkFaces(dice);
    });
  }
}
