export class Dice {
  constructor(faces) {
    this.faces = faces.split(",").map((el) => Number(el));
  }

  getFace(index) {
    return this.faces[index];
  }

  getFaces() {
    return this.faces;
  }
}
