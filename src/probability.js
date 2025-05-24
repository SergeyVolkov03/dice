export class Probability {
  constructor(diceOne, diceTwo) {
    this.diceOne = diceOne;
    this.diceTwo = diceTwo;
  }

  getProbability() {
    let countOne = 0;
    let countTwo = 0;
    this.diceOne.forEach((elemOne) => {
      this.diceTwo.forEach((elemTwo) => {
        if (elemOne > elemTwo) countOne++;
        if (elemTwo > elemOne) countTwo++;
      });
    });
    return (countOne / (countOne + countTwo)).toFixed(3);
  }
}
