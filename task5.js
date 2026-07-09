import axios from "axios";
const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/5",
  );
  const user = response.data;
  const { name, email, username } = user;

  console.log(` ${name} (${username})`);
};
getUser();
