export class ThemeManager {
  static changeTheme(container, themeClass) {
    container.classList.remove("darkTheme", "lightTheme", "blueTheme");
    container.classList.add(themeClass);

    const numberButtons = container.querySelectorAll(
      ".button:not(#OperBtn):not(#CentBtn)",
    );
    const operatorButtons = container.querySelectorAll("#OperBtn");
    const centerButtons = container.querySelectorAll("#CentBtn");

    [...numberButtons, ...operatorButtons, ...centerButtons].forEach((btn) =>
      btn.classList.remove("btn-orange", "btn-grey"),
    );

    if (themeClass === "darkTheme") {
      centerButtons.forEach((btn) => btn.classList.add("btn-grey"));
      operatorButtons.forEach((btn) => btn.classList.add("btn-orange"));
    } else {
      numberButtons.forEach((btn) => btn.classList.add("btn-orange"));
      operatorButtons.forEach((btn) => btn.classList.add("btn-grey"));
      centerButtons.forEach((btn) => btn.classList.add("btn-grey"));
    }
  }
}
