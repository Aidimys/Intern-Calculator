function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

function power(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) result *= a;
  return result;
}

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function factorial(n) {
  if (n < 0) throw new Error("Negative factorial");
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  square,
  cube,
  factorial,
};
