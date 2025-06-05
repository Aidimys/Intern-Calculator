import "./style.css";
import { CommandHandler } from "./modules/CommandHandler.js";
import { ThemeManager } from "./modules/ThemeManager.js";

const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");
const buttons = document.querySelectorAll(".button");

const commandHandler = new CommandHandler(display);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    commandHandler.handle(value);
  });
});

calculator.addEventListener("click", (event) => {
  if (event.target.classList.contains("themeBtn")) {
    ThemeManager.changeTheme(calculator, event.target.classList[1]);
  }
});
