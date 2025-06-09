const {
  add,
  subtract,
  multiply,
  divide,
  power,
  square,
  cube,
  factorial,
} = require("../utils/mathUtils");

describe("Math Utilities", () => {
  test("adds numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiplies numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("divides numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("division by zero throws", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero");
  });

  test("power function", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("square function", () => {
    expect(square(4)).toBe(16);
  });

  test("cube function", () => {
    expect(cube(2)).toBe(8);
  });

  test("factorial works", () => {
    expect(factorial(5)).toBe(120);
  });

  test("factorial of negative throws", () => {
    expect(() => factorial(-1)).toThrow("Negative factorial");
  });
});
