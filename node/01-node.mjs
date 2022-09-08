/**
 * https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions
 * https://nodejs.org/api/readline.html#rlclose
 * https://nodejs.org/api/process.html#processstdin
 * https://nodejs.org/api/process.html#processstdout
 * https://nodejs.org/api/os.html#oseol
 * */

import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { EOL } from "node:os";

const rl = createInterface({ input, output });
const prompt = (strInput) =>
  new Promise((resolve) => rl.question(strInput, resolve));

try {
  const myName = await prompt("What is your name? ");

  console.log(
    `My name is ${myName}${EOL}The lenght of my name is: ${myName.length}`
  );

  rl.close();
} catch (e) {
  console.error(e);
}

rl.on("close", () => process.exit(0));
