export class Message {
  showStartMessage() {
    console.log(`Let's determine who makes the first move`);
  }

  showRangeAndHmac(number, hmac) {
    console.log(`I selected a random value in the range 0..${number} `);
    console.log(`(HMAC=${hmac}).`);
  }

  showMessageForFirstMove() {
    console.log("Try to guess my selection.");
  }

  showMySelectionAndKey(number, key) {
    console.log(`My selection: ${number} (KEY=${key}).`);
  }

  showUserSelection(value) {
    console.log(`Your selection: ${value}`);
  }

  showMessageUserIsGuessed() {
    console.log("You guessed!");
  }

  showMessageChooseDice() {
    console.log("Choose your dice:");
  }

  showMessageMyDice(isUserGuessed, dice) {
    if (isUserGuessed) {
      console.log(`I choose the ${dice} dice.`);
    } else {
      console.log(`I make the first move and choose the ${dice} dice.`);
    }
  }

  showMessageUserDice(dice) {
    console.log(`You choose the ${dice} dice.`);
  }

  showMessageForRoll(isUserGuessed) {
    const whoRoll = isUserGuessed ? "your" : "my";
    console.log(`It's time for ${whoRoll} roll.`);
  }

  showMessageForModule() {
    console.log("Add your number modulo 6.");
  }

  showRollValue(numberFirst, numberTwo, sum) {
    console.log(
      `The fair number generation result is ${numberFirst} + ${numberTwo} = ${sum} (mod 6).`
    );
  }

  showRoolResult(isUserGuessed, result) {
    const whoRoll = isUserGuessed ? "Your" : "My";
    console.log(`${whoRoll} roll result is ${result}.`);
  }

  showWinnerMessage(isWinner, firstValue, secondValue) {
    const whoWin = isWinner ? "I" : "You";
    console.log(`${whoWin} win (${firstValue} > ${secondValue})!`);
  }

  showDrawMessage(firstValue, secondValue) {
    console.log(`It's a draw (${firstValue} = ${secondValue})!`);
  }
}
