// Initialize global values
let num;
let firstNum;
let secondNum;
let allNum = [];
let operation;

// DOM declaration section
const btn = document.getElementsByTagName("button");
const visual = document.getElementById("screen");

/* ***** Simple operations section ***** */

// This function adds 2 numbers
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

// This function subtracts 2 numbers
function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

// This function multiplies 2 numbers
function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

// Divide function first checks if denominator is 0 (we cannot divide by 0), if it is 0 return error else divide numbers
function divide(firstNum, secondNum) {
  return secondNum === 0 ? "Error, cannot divide by 0" : firstNum / secondNum;
}

// Operate function takes an operator as string and returns the calculated result appropriate to the operator
// When function pressed, store first value, save operator and use on values when = is pressed.
function operate(string, firstNum, secondNum) {
  if (string === "+") {
    return add(firstNum, secondNum);
  } else if (string === "-") {
    return subtract(firstNum, secondNum);
  } else if (string === "*") {
    return multiply(firstNum, secondNum);
  } else if (string === "/") {
    return divide(firstNum, secondNum);
  }
}

// Function to see if number pressed is a number
function isNum(btnPressed) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(btnPressed) > -1;
}

// This function populates the display when number buttons are pressed and stores the value
const displayNum = function pupulateDisplay() {
  let value = [];
  for (let i = 0; i < btn.length; i++) {
    // when btn is clicked
    btn[i].addEventListener("click", function () {
      let textFrmBtn = btn[i].innerHTML;
      //   if btn clicked is a number
      if (isNum(Number(textFrmBtn)) | (textFrmBtn == ".")) {
        value.push(textFrmBtn);
        num = Number(value.join(""));
        visual.textContent = num;
      } else {
        return;
      }
    });
    // stores first number before operation is pressed
    if (firstNum == undefined) firstNum = num;
    else secondNum = num;
  }
};

// Empty display once operator is clicked
function clickOperate() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {
      if (["+", "-", "x", "÷", "=", "AC"].indexOf(this.innerHTML) > -1) {
        operation = this.innerHTML;
        displayNum();
        visual.textContent = "";
      }
    });
  }
}

displayNum();
clickOperate();

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (event) {
    if (this.innerHTML == "=") {
      visual.textContent = operate(operation, firstNum, secondNum);
    }
  });
}
