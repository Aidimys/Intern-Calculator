export class MemoryCommand {
  constructor(context, command) {
    this.context = context;
    this.command = command;
  }

  execute() {
    const ctx = this.context;
    const current = this.toNumber(ctx.currentInput);

    switch (this.command) {
      case "MC":
        ctx.memory = 0;
        break;
      case "MR":
        ctx.currentInput = ctx.memory.toString();
        break;
      case "M+":
        ctx.memory += current;
        break;
      case "M-":
        ctx.memory -= current;
        break;
    }
  }

  toNumber(str) {
    let num = 0;
    let sign = 1;
    if (str.startsWith("-")) {
      sign = -1;
      str = str.slice(1);
    }
    if (str.includes(".")) {
      const [intPart, decPart] = str.split(".");
      num = this.parseInteger(intPart) + this.parseDecimal(decPart);
    } else {
      num = this.parseInteger(str);
    }
    return num * sign;
  }

  parseInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result = result * 10 + (str.charCodeAt(i) - 48);
    }
    return result;
  }

  parseDecimal(str) {
    let result = 0;
    let divisor = 1;
    for (let i = 0; i < str.length; i++) {
      result = result * 10 + (str.charCodeAt(i) - 48);
      divisor *= 10;
    }
    return result / divisor;
  }
}
