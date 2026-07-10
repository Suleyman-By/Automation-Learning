import axios from "axios";
const getUser1 = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log(response.data[0].name);
};
getUser1();

const getUser = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  const users = response.data.map((user) => user.name);
  console.log(users);
};
getUser();

const info = {
  name: "Solo",
  age: 25,
};
const sendInfo = async () => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    info,
  );
  console.log(response.data);
};
sendInfo();
