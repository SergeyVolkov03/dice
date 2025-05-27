export class Dice {
  constructor(faces) {
    this.faces = faces.split(",").map((el) => Number(el));
  }

  getFace(index) {
    return this.faces.split[index];
  }

  getFaces() {
    return this.faces;
  }
}
