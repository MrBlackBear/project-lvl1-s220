import readlineSync from 'readline-sync';

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

const assert = (eOfExpression, yourAnswer) => evalOfExpression === yourAnswer;

const randomBigNumber = () => 10 + Math.floor(Math.random() * 21);
const randomNumber = () => Math.floor(Math.random() * 11);

const sayHello2 = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let count = 0;
  const repeatNeedTime = 3;
  for (let i = 0; i < repeatNeedTime; i += 1) {
    const randomFirstNumber = randomBigNumber();
    const randomSecondNumber = randomNumber();
    const randAction = randomAction();
    console.log(`Question:  ${randomFirstNumber} ${randAction} ${randomSecondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const realAnswer = evalOfExpression(randAction, randomFirstNumber, randomSecondNumber);
    if (assert(realAnswer, answer)) {
      count += 1;
      console.log('Correct!');
    } else {
      break;
    }
  }

  if (count !== repeatNeedTime) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};


export default sayHello2;
