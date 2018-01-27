import readlineSync from 'readline-sync';

const repeatNeedTime = 3;
let count = 0;

const greeting = (str) => {
  console.log(`Welcome to the Brain Games!\n${str}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const answer = (countNumber, greet) => {
  if (countNumber !== repeatNeedTime) {
    console.log(`Let's try again, ${greet}!`);
  } else {
    console.log(`Congratulations, ${greet}!`);
  }
};

const funcRepeatNeedTimes = (func) => {
  for (let i = 0; i < repeatNeedTime; i += 1) {
    count = i;
    if (func() === 0) {
      break;
    }
  }
};

const start = (func, str) => {
  const userName = greeting(str);
  funcRepeatNeedTimes(func);
  answer(count + 1, userName);
};

export default start;
