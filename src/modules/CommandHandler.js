import { OperationCommand } from "./OperationCommand.js";
import { MemoryCommand } from "./MemoryCommand.js";
import { FunctionCommand } from "./FunctionCommand.js";

export class CommandHandler {
  constructor(display) {
    this.display = display;
    this.currentInput = "0";
    this.previousInput = "";
    this.operator = "";
    this.memory = 0;
  }

  handle(value) {
    if (!isNaN(value) || value === ".") {
      this.appendNumber(value);
    } else if (["+", "-", "*", "/", "=", "%", "+/-", "AC"].includes(value)) {
      new OperationCommand(this, value).execute();
    } else if (["MC", "MR", "M+", "M-"].includes(value)) {
      new MemoryCommand(this, value).execute();
    } else if (
      ["x²", "x³", "xʸ", "10ˣ", "1/x", "√", "∛", "ʸ√x", "x!"].includes(value)
    ) {
      new FunctionCommand(this, value).execute();
    }

    this.display.innerText = this.currentInput;
  }

  appendNumber(value) {
    if (this.currentInput === "0" && value !== ".") {
      this.currentInput = value;
    } else if (value === "." && this.currentInput.includes(".")) {
      return;
    } else {
      this.currentInput += value;
    }
  }

  setResult(result) {
    this.currentInput = result;
  }

  reset() {
    this.currentInput = "0";
    this.previousInput = "";
    this.operator = "";
  }
}
