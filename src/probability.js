export default class Probability {
  constructor(diceOne, diceTwo) {
    this.diceOne = diceOne;
    this.diceTwo = diceTwo;
  }

  getProbability() {
    let count = 0;
    this.diceOne.forEach((elemOne) => {
      this.diceTwo.forEach((elemTwo) => {
        if (elemOne > elemTwo) count++;
      });
    });
    return count / (this.diceOne.length * this.diceTwo.length);
  }
}
