const numbers = [5, 10, 15, 20];

const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const users = [
  { name: "Solo", age: 25 },
  { name: "Ahmet", age: 16 },
  { name: "Ayşe", age: 30 },
];
const newUsers = users.filter((user) => user.age >= 18);
console.log(newUsers);

const users1 = [
  { name: "Solo", age: 25 },
  { name: "Ahmet", age: 16 },
  { name: "Ayşe", age: 30 },
];
const newName = users1.map((user) => user.name);
console.log(newName);

const products = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 8 },
];
const newProduct = products.find((product) => product.stock === 0);
console.log(newProduct);

const sayHello = (name) => {
  console.log("Hello " + name);
};

sayHello("Solo");
