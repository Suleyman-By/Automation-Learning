import axios from "axios";
const getUser = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/12333",
    );
    console.log(response.data.name);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("İşlem bitti.");
  }
};

getUser();
