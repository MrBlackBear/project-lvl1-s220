import readlineSync from 'readline-sync';
import start from './engine';

const gcdOfTwoNumbers = (firstNumber, secondNumber) => {
  if (secondNumber > 0) {
    const k = firstNumber % secondNumber;
    return gcdOfTwoNumbers(secondNumber, k);
  }
  return Math.abs(firstNumber);
};

const assert = (eOfExpression, yourAnswer) => eOfExpression === yourAnswer / 1;

const randomBigNumber = () => 10 + Math.floor(Math.random() * 21);
const randomNumber = () => Math.floor(Math.random() * 11);

const str = 'Find the greatest common divisor of given numbers.';

const logic = () => {
  const randomFirstNumber = randomBigNumber();
  const randomSecondNumber = randomNumber();
  console.log(`Question:  ${randomFirstNumber} ${randomSecondNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const realAnswer = gcdOfTwoNumbers(randomFirstNumber, randomSecondNumber);
  if (assert(realAnswer, answer)) {
    console.log('Correct!');
  } else {
    return 0;
  }
  return 1;
};

const point = () => start(logic, str);

export default point;
