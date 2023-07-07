import readlineSync from 'readline-sync';
import greeting from './cli.js';

function getRandomInt(min = 0, max = 20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const brainEven = () => {
  const yourName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const numbers = [getRandomInt(), getRandomInt(), getRandomInt()];
  let questions;
  for (const item of numbers) {
    console.log(`Question: ${item}`);
    const answer = readlineSync.question('Your answer: ');
    if (item % 2 === 0 && answer === 'yes') {
      questions = 'yes';
      console.log('Correct!');
    }
    else if (item % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      questions = 'no';
    } else {
      if (item % 2 === 0) {
        questions = 'yes';
      }
      else if (item % 2 !== 0) {
        questions = 'no';
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questions}'.
      Let's try again, ${yourName}`);
      return;
    }
  }
  console.log(`Congratulations, ${yourName}`);
};

export default brainEven;
