export class Validator {
  checkDicesQuantity(dices) {
    if (dices.length < 3) {
      throw new Error(
        `You entered ${dices.length} dice(s). For play, you need at least 3 dices`
      );
    }
  }

  checkFacesQuantity(dices) {
    if (!dices.every((el) => el.getFaces().length === 6)) {
      throw new Error(`Every dice must have six faces`);
    }
  }

  checkTheSameFacesQuantity(dices) {
    if (
      !dices.every((el) => el.getFaces().length === dices[0].getFaces().length)
    ) {
      throw new Error(`Every dice must have the same quantity of faces`);
    }
  }

  checkIsNumber(value) {
    if (Number.isNaN(value)) {
      throw new Error(`The faces must be a number`);
    }
  }

  checkIsInteger(value) {
    if (!Number.isInteger(value)) {
      throw new Error(`The faces must be an integer`);
    }
  }

  checkDiceByFaceValue(dice) {
    dice.getFaces().forEach((face) => {
      this.checkIsNumber(face);
      this.checkIsInteger(face);
    });
  }

  checkDicesByFaceValue(dices) {
    dices.forEach((dice) => {
      this.checkDiceByFaceValue(dice);
    });
  }

  checkDices(dices) {
    this.checkDicesQuantity(dices);
    this.checkFacesQuantity(dices);
    this.checkTheSameFacesQuantity(dices);
    this.checkDicesByFaceValue(dices);
  }
}
