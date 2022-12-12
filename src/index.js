#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');

  return this;
};

const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

const getAnswer = (usersAnswer, rightAnswer, userName) => {
  console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\n`);
  console.log(`Let's try again, "${userName}"!`);

  return this;
};

const roundsCount = 3;

const startGame = (gameRules, roundGame) => {
  greetings();
  const userName = askUserName();
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    console.log(`Count of game is: ${roundsCount}`);
    const [question, correctAnswer] = roundGame();
    console.log(roundGame());

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(correctAnswer)) {
      getAnswer(userAnswer, correctAnswer, userName);

      break;
    } else {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
