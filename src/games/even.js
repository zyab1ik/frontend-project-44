#!/usr/bin/env node
import startGame from '../index.js';
import { generateRandomNumber } from '../helpers/helpers.js';

export const getEvenRules = () => 'Answer "yes" if the number is even, otherwise answer "no"';

const checkNumberIsEven = (generateNumber) => {
  if (generateNumber % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

export const getRoundData = () => {
  const randomNumber = generateRandomNumber();
  const question = `${randomNumber}`;
  const answer = checkNumberIsEven(randomNumber);

  return [question, answer];
};

export const startEvenGames = () => {
  startGame(getEvenRules(), getRoundData);
};
