/*import axios from "axios";
const getUser = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Done!");
  }
};
getUser(); */

import axios from "axios";
const getUserName = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log("==== USERS ====");
    response.data.forEach((user) => {
      console.log(`${user.id}  -  ${user.name}`);
    });
    console.log("Total Users: " + response.data.length);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Done!");
  }
};
getUserName();
