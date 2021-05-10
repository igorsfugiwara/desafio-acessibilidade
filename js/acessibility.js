const root = document.documentElement;

const buttonFontSizeIncrease = document.querySelector(".fontsize__increase");
const buttonFontSizeDecrease = document.querySelector(".fontsize__descrease");
const changeColorThemeWhite = document.querySelector(".contraste__branco");
const changeColorThemeBlack = document.querySelector(".contraste__preto");

buttonFontSizeIncrease.addEventListener("click", () => {
  fontSizeChange("increase");
});

buttonFontSizeDecrease.addEventListener("click", () => {
  fontSizeChange("decrease");
});

changeColorThemeBlack.addEventListener("click", () => {
  root.style.setProperty("--whiteColor", `black`);
  root.style.setProperty("--blackColor", `white`);
  root.style.setProperty("--fontColorBlack", `white`);
  root.style.setProperty("--footerColor", "black");
});

changeColorThemeWhite.addEventListener("click", () => {
  root.style.setProperty("--whiteColor", `white`);
  root.style.setProperty("--blackColor", `black`);
  root.style.setProperty("--fontColorBlack", `black`);
  root.style.setProperty("--footerColor", "grey");
});

function fontSizeChange(type) {
  const style = window.getComputedStyle(root);
  let current = style.getPropertyValue("--fontDefaultSize");
  let newFontSize;

  if (type === "increase") {
    newFontSize = parseInt(current) + 5;
  } else {
    newFontSize = parseInt(current) - 5;
  }
  root.style.setProperty("--fontDefaultSize", `${newFontSize}px`);
}
