const numbers = [2, 4, 6, 8];
const threeTimes = numbers.map(function (number) {
  return number * 3;
});
console.log(threeTimes);

const countries = ["turkey", "vietnam", "japan"];
const newName = countries.map(function (country) {
  return country.toUpperCase();
});
console.log(newName);

const prices = [100, 250, 80];
const newPrice = prices.map(function (price) {
  return price + 20;
});
console.log(newPrice);

const users = [
  { name2: "Solo", age: 25 },
  { name2: "Ahmet", age: 30 },
  { name2: "Ayşe", age: 28 },
];
const names = users.map(function (user) {
  return user.name2;
});
console.log(names);

const users1 = [
  { name: "Solo", age: 25 },
  { name: "Ahmet", age: 30 },
  { name: "Ayşe", age: 28 },
];
const info = users1.map(function (user1) {
  return user1.name + " (" + user1.age + ")";
});
console.log(info);

