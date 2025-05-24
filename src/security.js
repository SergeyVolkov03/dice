import crypto from "crypto";

export class Security {
  #key = crypto.randomBytes(32).toString("hex");

  constructor(number) {
    this.number = number;
  }

  getKey() {
    return this.#key;
  }

  getHmac() {
    return crypto
      .createHmac("SHA3-256", this.#key)
      .update(String(this.number))
      .digest("hex");
  }
}
