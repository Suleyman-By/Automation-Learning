import axios from "axios";
const deleteUser = async () => {
  const response = await axios.delete(
    "https://jsonplaceholder.typicode.com/users/1",
  );
  console.log(response.data);
};
deleteUser();
