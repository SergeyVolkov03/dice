import crypto from "crypto";

export class FairNumber {
  constructor(range) {
    this.startRange = 0;
    this.endRange = range;
  }

  getNumber() {
    return crypto.randomInt(this.startRange, this.endRange + 1);
  }
}
