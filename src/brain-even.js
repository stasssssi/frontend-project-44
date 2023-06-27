import readlineSync from 'readline-sync';
import greeting from './cli';

const brainEven = () => {
  const yourName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const numbers = 15;
  console.log(`Question: ${numbers}`);
  const answer = readlineSync.question('Your answer: ');
  if (numbers % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  }
  else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
    Let's try again, ${yourName}`);
  }
};

export default brainEven;
