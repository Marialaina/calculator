//Adding my html to JavaScript by grabbing the classes or id's
const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const clearBtn = document.getElementById('btn-clear');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');
const equalBtn = document.getElementById('btn-equal');


/*making the currentResultOutput and currentCalculationOutput =
to a variable which is result and text. Will the function not work
if instead of using result and text it would both be result? 
It probably doesn't matter. It can be named anything*/
const outputResult = (result, text) => {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

//current result is going to be 0.
let currentResult = 0;
let logEntries = [];

//GETS INPUT FROM INPUT FIELD
const  getUserNumberInput = () => {
  return parseInt(usrInput.value);
}

//GENERATES AND WRITES CALCULATION LOG
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

const equal = () => {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

const add = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  logEntries.push(enteredNumber);
}
const subtract = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
}

const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
}

const divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
}

const clear = () => {
  location.reload();
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', equal);
