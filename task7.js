import axios from "axios";
const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  const users = response.data.map((user) => user.name);
  console.log(users);
};

getUser();
