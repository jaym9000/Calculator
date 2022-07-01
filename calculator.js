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

// This function populates the display when buttons are pressed
const displayNum = function pupulateDisplay() {
  let getNum;
  let value = [];
  for (let i = 0; i < value.length; i++) {
    value[i] = getNum;
  }
  let valueToCalculate = parseInt(value.join(""), 10);
  return valueToCalculate;
};
