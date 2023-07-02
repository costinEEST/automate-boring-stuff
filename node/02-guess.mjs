import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface({
  input,
  output,
});
const secretNumber = Math.floor(Math.random() * 20) + 1;
console.log("I am thinking of a number between 1 and 20.");

let guessesTaken = 0;
// TODO: read the prompt using `rl.question()`
rl.on("line", (input) => {
  const guess = parseInt(input);
  guessesTaken++;

  if (guess < secretNumber) {
    console.log("Your guess is too low.");
  } else if (guess > secretNumber) {
    console.log("Your guess is too high.");
  } else {
    console.log(`Good job! You guessed my number in ${guessesTaken} guesses!`);
    rl.close();
  }

  if (guessesTaken === 6) {
    console.log(`Nope. The number I was thinking of was ${secretNumber}`);
    rl.close();
  } else {
    console.log("Take a guess:");
  }
});

rl.on("close", () => process.exit(0));
