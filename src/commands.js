export class Commands {
  constructor() {
    this.commands = {};
  }

  generateCommandsForRange(range) {
    for (let i = 0; i <= range; i++) {
      this.commands[i] = i;
    }
    this.addAdditionalCommands();
  }

  generateCommandsForDices(dices) {
    dices.forEach((dice, index) => {
      this.commands[index] = dice.getFaces();
    });
    this.addAdditionalCommands();
  }

  generateCommands(value) {
    this.commands = {};
    if (typeof value === "number") {
      this.generateCommandsForRange(value);
    } else {
      this.generateCommandsForDices(value);
    }
  }

  addAdditionalCommands() {
    this.commands["x"] = "exit";
    this.commands["?"] = "help";
  }

  showCommands() {
    for (let i in this.commands) {
      console.log(`${i} - ${this.commands[i]}`);
    }
  }

  getValueByCommand(command) {
    if (Array.isArray(this.commands[command])) {
      return command;
    }
    return this.commands[command];
  }
}
