import axios from "axios";
const info = {
  name: "Solo",
  age: 26,
};
const updateUser = async () => {
  const response = await axios.put(
    "https://jsonplaceholder.typicode.com/users/1",
    info,
  );
  console.log(response.data);
};

updateUser();
