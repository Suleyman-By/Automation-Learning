import axios from "axios";
const userInfo = {
  name: "Solo",
  age: 25,
};
const postInfo = async () => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    userInfo,
  );
  console.log(response.data);
};

postInfo();
