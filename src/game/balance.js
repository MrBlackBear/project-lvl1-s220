import readlineSync from 'readline-sync';
import start from './engine';

const isBalanced = (numb) => {
  const arr = numb.toString().split('');
  arr.sort();
  if (arr.length === 1) {
    return true;
  }
  return (arr[arr.length - 1] - arr[0]) / 1 <= 1;
};

const balance = (number) => {
  if (isBalanced(number)) {
    return number;
  }
  const digits = number.toString().split('');

  digits.toString().sort();
  digits[0] = (digits[0] / 1) + 1;
  digits[digits.length - 1] = (digits[digits.length - 1] / 1) - 1;
  digits.toString().sort();
  return balance(digits.join(''));
};

const assert = (eOfExpression, yourAnswer) => eOfExpression === yourAnswer / 1;

const randomNumber = () => Math.floor(Math.random() * 20);

const str = 'Find the greatest common divisor of given numbers.';

const logic = () => {
  const randomNumb = randomNumber();
  console.log(`Question:  ${randomNumb}`);
  const answer = readlineSync.question('Your answer: ');
  const realAnswer = balance(randomNumb);
  if (assert(realAnswer, answer)) {
    console.log('Correct!');
  } else {
    return 0;
  }
  return 1;
};

const point = () => start(logic, str);

export default point;
