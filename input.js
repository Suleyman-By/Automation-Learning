import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
  input,
  output,
});

const id = await rl.question("Enter your user ID:");
const name = await rl.question("Enter your name: ");
console.log(`Hello ${name}, your ID is ${id}`);
rl.close();