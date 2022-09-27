#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const generateRandomNumber = () => {
  // returns a random integer between 0 and 100 (both included):
  const range = 100;

  return Math.floor(Math.random() * range);
};
