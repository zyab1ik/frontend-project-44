#!/usr/bin/env node
import startGame from '../index.js';
import { getRandomOption } from '../helpers/helpers.js';

export const getProgressionRules = () => 'What number is missing in the progression?';

const generateProgression = (firstItem, step, Length) => {
  const array = [];
  for (let i = 0; i < Length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

const getRoundData = () => {
  const first = getRandomOption(1, 10);
  const step = getRandomOption(1, 10);
  const length = getRandomOption(5, 10);
  const progression = generateProgression(first, step, length);
  const randomIndex = Math.floor(Math.random() * progression.length);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export const startProgressionGame = () => {
  startGame(getProgressionRules(), getRoundData());
};
