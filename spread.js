const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(numbers);
console.log(newNumbers);

const first = ["A", "B"];
const second = ["C", "D"];

const total = [...first, ...second];
console.log(total);

const user = {
  name: "Solo",
};
const userInfo = {...user, age : 25};
console.log(userInfo);

const product = {
  name: "Laptop",
  price: 1500,
};
const newProduct = {...product, price: 1700};
console.log(newProduct);

