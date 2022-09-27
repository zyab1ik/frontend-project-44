#!/usr/bin/env node

import readlineSync from 'readline-sync';
import * as cli from './cli.js';

const operations = ['+', '-', '*'];

const calculateOperation = (firstOperand, secondOperand, operation) => {
  if (operation === '+') {
    return String(firstOperand + secondOperand);
  }
  if (operation === '-') {
    return String(firstOperand - secondOperand);
  }
  if (operation === '*') {
    return String(firstOperand * secondOperand);
  }

  return 'error';
};

const rules = () => {
  console.log('What is the result of the expression?');

  return this;
};

const askQuestion = (firstOperand, secondOperand, operation) => {
  rules();
  console.log(`Question: ${firstOperand} ${operation} ${secondOperand}`);

  return readlineSync.question('Your answer: ');
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkUserAnswer = () => {
  const roundsCount = 3;
  const userName = cli.askUserName();

  let rightAnswerCount = 0;

  while (rightAnswerCount < roundsCount) {
    const operation = operations[getRandom(0, 2)];
    const firstOperand = cli.generateRandomNumber();
    const secondOperand = cli.generateRandomNumber();
    const usersAnswer = askQuestion(firstOperand, secondOperand, operation);
    const rightAnswer = calculateOperation(firstOperand, secondOperand, operation);

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

const startCalcGame = () => {
  cli.greetings();
  checkUserAnswer();

  return this;
};

export default startCalcGame;
