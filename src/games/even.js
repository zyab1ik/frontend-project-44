#!/usr/bin/env node

import readlineSync from 'readline-sync';
import * as cli from './cli.js';

const rules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  return this;
};

const checkNumberIsEven = (generateNumber) => {
  if (generateNumber % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const askQuestion = (number) => {
  console.log(`Question: ${number}`);

  return readlineSync.question('Your answer: ');
};

const checkUserAnswer = () => {
  const roundsCount = 3;
  const userName = cli.askUserName();

  let rightAnswerCount = 0;

  while (rightAnswerCount < roundsCount) {
    const randomNumber = cli.generateRandomNumber();
    const usersAnswer = askQuestion(randomNumber);
    const rightAnswer = checkNumberIsEven(randomNumber);

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
      rightAnswerCount += 1;
      console.log(`Count of right Answers: ${rightAnswerCount}`);
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n Let's try again, "${userName}"!`);
    }

    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

const startEvenGame = () => {
  cli.greetings();
  rules();
  checkUserAnswer();

  return this;
};

export default startEvenGame;
