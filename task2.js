import axios from "axios";

const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1",
  );
  const user = response.data;

  console.log(`${user.name} (${user.username})`);
  console.log(`${user.email}`);
};

getUser();
