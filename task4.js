import axios from "axios";
const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/3",
  );
  const user = response.data;
  console.log(user.name);
};
getUser();
