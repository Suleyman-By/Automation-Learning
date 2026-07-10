import axios from "axios";
const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  const users = response.data.map((user) => {
    return `${user.name} (${user.username})`;
  });
  console.log(users);
};
getUser();
