export class Message {
  showStartMessage() {
    console.log(`Let's determine who makes the first move`);
  }

  showRangeAndHmac(number, hmac) {
    console.log(`I selected a random value in the range 0..${number} `);
    console.log(`(HMAC=${hmac}).`);
  }

  showMessageForFirstMove() {
    console.log(`Try to guess my selection.`);
  }

  showMySelectionAndKey(number, key) {
    console.log(`My selection: ${number} (KEY=${key}).`);
  }

  showUserSelection(value) {
    console.log(`Your selection: ${value}`);
  }
}
