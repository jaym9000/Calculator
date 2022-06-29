function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

// Divide function first checks if denominator is 0 (we cannot divide by 0), if it is 0 return error else divide numbers
function divide(firstNum, secondNum) {
  return secondNum === 0 ? "Error, cannot divide by 0" : firstNum / secondNum;
}

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
