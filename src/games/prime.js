#!/usr/bin/env node
import startGame from '../index.js';
import { getRandomOption } from '../helpers/helpers.js';

export const getPrimeRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i < number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getRoundData = () => {
  const userQuestion = getRandomOption(2, 100);
  const correctAnswer = isPrime(userQuestion) ? 'yes' : 'no';
  return [userQuestion, correctAnswer];
};

export const startPrimeGame = () => {
  startGame(getPrimeRules(), getRoundData);
};
