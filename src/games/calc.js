#!/usr/bin/env node
import * as helpers from '../helpers/helpers.js';
import startGame from '../index.js';

export const getCalcRules = () => 'What is the result of the expression?';

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

export const getRoundData = () => {
  const operation = operations[helpers.getRandomOption(0, 2)];
  const firstOperand = helpers.generateRandomNumber();
  const secondOperand = helpers.generateRandomNumber();
  const answer = calculateOperation(firstOperand, secondOperand, operation);

  return [`${firstOperand}${operation}${secondOperand}?`, answer];
};

export const startCalcGame = () => {
  startGame(getCalcRules(), getRoundData);
};
