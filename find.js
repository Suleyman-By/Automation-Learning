const numbers = [5, 10, 15, 20, 25];
const newNum = numbers.find(function (number) {
  return number === 20;
});
console.log(newNum);

const names = ["Solo", "Ali", "Ahmet", "Ayşe"];
const newName = names.find(function (name) {
  return name === "Ahmet";
});
console.log(newName);

const users = [
  { id: 1, name: "Solo" },
  { id: 2, name: "Ahmet" },
  { id: 3, name: "Ayşe" },
];

const newUser = users.find(function (user) {
  return user.id === 3;
});
console.log(newUser);

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 8 },
];
const newStock = products.find(function (product) {
  return product.stock === 0;
});
console.log(newStock);

const scores = [45, 78, 92, 33, 60, 99];

const newScores = scores.find(function (score) {
  return score > 90;
});
console.log(newScores);
