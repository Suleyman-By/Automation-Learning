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
    const userId = await rl.question("Enter your user ID:");
    const newUser = response.data.find((user) => {
      return user.id === Number(userId);
    });
    console.log(`==== USER ====
Name: ${newUser.name}
Username: ${newUser.username}
Email: ${newUser.email}`);
    rl.close();
  } catch (error) {
    console.log(error.message);
  }
};
getUser();
