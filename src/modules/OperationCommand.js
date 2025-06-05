export class OperationCommand {
  constructor(context, operator) {
    this.context = context;
    this.operator = operator;
  }

  execute() {
    const ctx = this.context;
    switch (this.operator) {
      case "AC":
        ctx.reset();
        break;
      case "+/-":
        ctx.currentInput = ctx.currentInput.startsWith("-")
          ? ctx.currentInput.slice(1)
          : "-" + ctx.currentInput;
        break;
      case "%":
        ctx.currentInput = (ctx.toNumber(ctx.currentInput) / 100).toString();
        break;
      case "=":
        if (ctx.operator && ctx.previousInput) {
          ctx.currentInput = this.calculate(
            ctx.previousInput,
            ctx.currentInput,
            ctx.operator,
          );
          ctx.previousInput = "";
          ctx.operator = "";
        }
        break;
      default:
        if (ctx.previousInput && ctx.operator) {
          ctx.currentInput = this.calculate(
            ctx.previousInput,
            ctx.currentInput,
            ctx.operator,
          );
        }
        ctx.previousInput = ctx.currentInput;
        ctx.currentInput = "0";
        ctx.operator = this.operator;
        break;
    }
  }

  calculate(num1, num2, op) {
    num1 = this.toNumber(num1);
    num2 = this.toNumber(num2);

    switch (op) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return num2 !== 0 ? (num1 / num2).toString() : "Ошибка";
      default:
        return "Ошибка";
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
