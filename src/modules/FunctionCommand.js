export class FunctionCommand {
  constructor(context, command) {
    this.context = context;
    this.command = command;
  }

  execute() {
    const ctx = this.context;
    const value = this.toNumber(ctx.currentInput);
    let result = "Ошибка";

    try {
      switch (this.command) {
        case "x²":
          result = (value * value).toString();
          break;
        case "x³":
          result = (value * value * value).toString();
          break;
        case "xʸ":
          result = "Функция не создана";
          break;
        case "10ˣ":
          result = this.pow(10, value).toString();
          break;
        case "1/x":
          if (value === 0) throw "Деление на 0";
          result = (1 / value).toString();
          break;
        case "√":
          if (value < 0) throw "Корень из отрицательного";
          result = this.sqrt(value).toString();
          break;
        case "∛":
          result = this.cbrt(value).toString();
          break;
        case "ʸ√x":
          result = "Функция не создана";
          break;
        case "x!":
          if (value < 0 || !Number.isInteger(value))
            throw "Невалидный факториал";
          result = this.factorial(value).toString();
          break;
      }
    } catch (e) {
      result = "Ошибка";
    }

    ctx.setResult(result);
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

  sqrt(x) {
    if (x === 0) return 0;
    let guess = x / 2;
    for (let i = 0; i < 20; i++) {
      guess = (guess + x / guess) / 2;
    }
    return guess;
  }

  cbrt(x) {
    let guess = x / 3;
    for (let i = 0; i < 20; i++) {
      guess = (2 * guess + x / (guess * guess)) / 3;
    }
    return guess;
  }

  pow(base, exp) {
    let result = 1;
    for (let i = 0; i < Math.abs(exp); i++) {
      result *= base;
    }
    return exp >= 0 ? result : 1 / result;
  }

  factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }
}
