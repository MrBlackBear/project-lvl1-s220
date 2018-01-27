import readlineSync from 'readline-sync';
import start from './engine';

const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const subtr = (firstNumber, secondNumber) => firstNumber - secondNumber;

const randomAction = () => {
  const numberFromOnetoThree = Math.floor(Math.random() * 4);
  if (numberFromOnetoThree <= 1) {
    return '-';
  } else if (numberFromOnetoThree === 2) {
    return '+';
  }
  return '*';
};

const evalOfExpression = (rAction, firstNumber, secondNumber) => {
  if (rAction === '-') {
    return subtr(firstNumber, secondNumber);
  } else if (rAction === '+') {
    return add(firstNumber, secondNumber);
  }
  return multiply(firstNumber, secondNumber);
};

const assert = (eOfExpression, yourAnswer) => eOfExpression === yourAnswer / 1;

const randomBigNumber = () => 10 + Math.floor(Math.random() * 21);
const randomNumber = () => Math.floor(Math.random() * 11);

const str = 'What is the result of the expression?';

const logic = () => {
  const randomFirstNumber = randomBigNumber();
  const randomSecondNumber = randomNumber();
  const randAction = randomAction();
  console.log(`Question:  ${randomFirstNumber} ${randAction} ${randomSecondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const realAnswer = evalOfExpression(randAction, randomFirstNumber, randomSecondNumber);
  if (assert(realAnswer, answer)) {
    console.log('Correct!');
  } else {
    return 0;
  }
  return 1;
};

const point = () => start(logic, str);

export default point;
