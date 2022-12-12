#!/usr/bin/env node
import * as helpers from '../helpers/helpers.js';
import startGame from '../index.js';

export const getGcdRules = () => 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const getRoundData = () => {
  const randomNumber1 = helpers.getRandomOption(1, 20);
  const randomNumber2 = helpers.getRandomOption(1, 20);
  const randomOperation = `${randomNumber1} ${randomNumber2}`;

  return [randomOperation, String(gcd(randomNumber1, randomNumber2))];
};

export const startGcdGame = () => {
  startGame(getGcdRules(), getRoundData);
};
