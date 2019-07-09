class UI {
  static calculateMacros() {
    let calories = parseInt(document.querySelector("#calories").value),
      fatCal = document.querySelector("#fatCal"),
      proCal = document.querySelector("#proCal"),
      carbCal = document.querySelector("#carbCal"),
      fatGrams = document.querySelector("#fatGrams"),
      proGrams = document.querySelector("#proGrams"),
      carbGrams = document.querySelector("#carbGrams");

    fatCal.innerHTML = `${calories * 0.5}`;
    proCal.innerHTML = `${calories * 0.2}`;
    carbCal.innerHTML = `${calories * 0.3}`;

    fatGrams.innerHTML = `${(calories * 0.5 / 9).toFixed(0)}`;
    proGrams.innerHTML = `${calories * 0.2 / 4}`;
    carbGrams.innerHTML = `${calories * 0.3 / 4}`;
  }
}

document
  .querySelector("#calcBtn")
  .addEventListener("click", UI.calculateMacros);
