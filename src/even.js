#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('----------------------------------------------------------------------------------');
  console.log('Welcome to the Brain Games!');

  return this;
};

const rules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  console.log('----------------------------------------------------------------------------------');

  return this;
};

const generateRandomNumber = () => {
  // returns a random integer between 0 and 100 (both included):
  const range = 100;

  return Math.floor(Math.random() * range);
};

const checkNumberIsEven = (generateNumber) => {
  if (generateNumber % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const askQuestion = (number) => {
  console.log(`Question: ${number}`);

  return readlineSync.question('Your answer: ');
};

const checkUserAnswer = () => {
  const roundsCount = 3;
  const userName = askUserName();

  let rightAnswerCount = 0;

  while (rightAnswerCount < roundsCount) {
    const randomNumber = generateRandomNumber();
    const usersAnswer = askQuestion(randomNumber);
    const rightAnswer = checkNumberIsEven(randomNumber);

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');

      rightAnswerCount += 1;
      console.log(`Count of right Answers: ${rightAnswerCount}`);
    }

    console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n Let's try again, "${userName}"!`);
    console.log('--------------------------------------------------------------------------------');

    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

const startEvenGame = () => {
  greetings();
  rules();
  checkUserAnswer();

  return this;
};

export default startEvenGame;
