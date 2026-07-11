/* import axios from "axios";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({
  input,
  output,
});

const getUser = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    const userAnswer = await rl.question(`===== USER MANAGER =====

1. List all users
2. Find user by ID
3. Exit

Choose:`);

    if (Number(userAnswer) === 1) {
      response.data.forEach((user) => {
        console.log(`User ID: ${user.id} - User name: ${user.name}`);
      });
    } else if (Number(userAnswer) === 2) {
      const enterId = await rl.question("Enter your ID: ");
      const newUser = response.data.find((user) => {
        return user.id === Number(enterId);
      });
      console.log(`==== USER ====
Name: ${newUser.name}
Username: ${newUser.username}
Email: ${newUser.email}`);
    } else if (Number(userAnswer) === 3) {
      console.log("You exited");
    } else {
      console.log("You entered invalid number. Try again");
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
};
getUser(); */

import axios from "axios";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({
  input,
  output,
});

const getUser = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    const userAnswer = await rl.question(`===== USER MANAGER =====

1. List all users
2. Find user by ID
3. Exit

Choose:`);
    switch (Number(userAnswer)) {
      case 1:
        response.data.forEach((user) => {
          console.log(`User ID: ${user.id} - User name: ${user.name}`);
        });
        break;
      case 2:
        const enterId = await rl.question("Enter your ID: ");
        const newUser = response.data.find((user) => {
          return user.id === Number(enterId);
        });
        console.log(`==== USER ====
Name: ${newUser.name}
Username: ${newUser.username}
Email: ${newUser.email}`);
        break;
      case 3:
        console.log("You exited");
        break;
      default:
        console.log("You entered invalid number. Try again");
        break;
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    rl.close();
  }
};
getUser();
