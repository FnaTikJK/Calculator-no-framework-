import operations from "./operations.mjs";

const screen = document.querySelector(".screen p")
let screenContent = "0";
let isFractionNumber;
let firstNumber;
let secondNumber;
let operation;

function render() {
  if (screen.textContent !== screenContent)
    screen.textContent = screenContent;
}

function ResetCalculator() {
  firstNumber = undefined;
  secondNumber = undefined;
  operation = undefined;
  screenContent = '0';
  isFractionNumber = false;
}

function setEventListeners() {
  document.querySelector(".C").onclick = () => {
    ResetCalculator();
  }

  for (let number of document.querySelectorAll(".number")) {
    number.onclick = event => {
      if (screen.textContent.trim() === "0")
        screenContent = event.target.textContent;
      else if (Number.isNaN(+screen.textContent.trim())) {
        operation = screen.textContent.trim();
        screenContent = event.target.textContent;
      } else
        screenContent += event.target.textContent;
    }
  }

  for (let oper of document.querySelectorAll(".operation")) {
    oper.onclick = event => {
      operation = event.target.textContent;
      firstNumber = +screen.textContent.trim();
      screenContent = event.target.textContent;
    }
  }

  document.querySelector(".backspace").onclick = () => {
    if (screen.textContent.at(-1) === '.')
      isFractionNumber = false;
    screenContent = screen.textContent.substring(0, screen.textContent.length - 1);
    if (screen.textContent.length === 0)
      screenContent = '0';
  }

  document.querySelector(".fraction").onclick = event => {
    if (!isFractionNumber) {
      isFractionNumber = true;
      screenContent += event.target.textContent;
    }
  }

  document.querySelector(".result").onclick = () => {
    if (firstNumber) {
      secondNumber = +screen.textContent.trim();
      firstNumber = operations[operation](firstNumber, secondNumber);
      screenContent = firstNumber;
    }
  }

  document.querySelector(".change").onclick = () => {
    const str = screen.textContent.trim();
    screenContent = -str;
  }
}


setEventListeners();
setInterval(() => render(), 50);
