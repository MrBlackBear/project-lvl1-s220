import readlineSync from 'readline-sync';
import start from './engine';

const isEven = number => number % 2 === 0;

const randomNumber = () => Math.floor(Math.random() * 31);

const YES = 'yes';
const NO = 'no';
const reverseYesAndNo = str => (str === YES ? NO : YES);

const str = 'Answer "yes" if number even otherwise answer "no".';

const logic = () => {
  const randomNumb = randomNumber();
  console.log(`Question:  ${randomNumb}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer !== YES && answer !== NO) {
    return 0;
  }
  if (isEven(randomNumb) && answer === YES) {
    console.log('Correct!');
  } else if (!isEven(randomNumb) && answer === NO) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reverseYesAndNo(answer)}'`);
    return 0;
  }
  return 1;
};

const point = () => start(logic, str);

export default point;
