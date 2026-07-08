const numbers = [5, 10, 15, 20, 25, 30];
const bigger = numbers.filter(function (number) {
  return number >= 20;
});
console.log(bigger);

const names = ["Solo", "Ali", "Ahmet", "Ayşe", "Mehmet"];
const nameWithA = names.filter(function (name) {
  return name.startsWith("A");
});
console.log(nameWithA);

const users = [
  { name: "Solo", age: 25 },
  { name: "Ahmet", age: 16 },
  { name: "Ayşe", age: 30 },
  { name: "Ali", age: 14 },
];
const bigAge = users.filter(function (user) {
  return user.age >= 18;
});
console.log(bigAge);

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 8 },
  { name: "Monitor", stock: 0 },
];
const newList = products.filter(function (product) {
  return product.stock > 0;
});
console.log(newList);

const scores = [45, 78, 92, 33, 60, 99];
const passedScores = scores.filter(function (score) {
  return score >= 60;
});
console.log(passedScores);
