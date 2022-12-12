#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');

  return this;
};

export const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const startBrainGames = () => {
  greetings();
  askUserName();

  return this;
};
