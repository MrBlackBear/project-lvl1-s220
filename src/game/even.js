import readlineSync from 'readline-sync';

const isEven = number => number % 2 === 0;

const randomNumber = () => Math.floor(Math.random() * 31);

const YES = 'yes';
const NO = 'no';
const reverseYesAndNo = str => (str === YES ? NO : YES);

const sayHello1 = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let count = 0;
  const repeatNeedTime = 3;
  for (let i = 0; i < repeatNeedTime; i += 1) {
    const randomNumb = randomNumber();
    console.log(`Question:  ${randomNumb}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== YES && answer !== NO) {
      break;
    }
    if (isEven(randomNumb) && answer === YES) {
      count += 1;
      console.log('Correct!');
    } else if (!isEven(randomNumb) && answer === NO) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${reverseYesAndNo(answer)}'`);
      break;
    }
  }

  if (count !== repeatNeedTime) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};


export default sayHello1;
