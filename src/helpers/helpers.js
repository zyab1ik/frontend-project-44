#!/usr/bin/env node

const generateRandomNumber = () => {
  // returns a random integer between 0 and 100 (both included):
  const range = 100;

  return Math.floor(Math.random() * range);
};

function getRandomOption(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { generateRandomNumber, getRandomOption };
