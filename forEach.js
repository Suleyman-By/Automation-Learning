const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});

const countries = ["Turkey", "Vietnam", "Japan"];
countries.forEach((country) => {
  console.log("Country: " + country);
});

const numbers = [5, 10, 15, 20];
numbers.forEach(function (number) {
  console.log(number * 3);
});
const names = ["Solo", "Ahmet", "Ayşe"];
names.forEach((name) => {
  if (name === "Ahmet") {
    console.log(name);
  }
});
const models = ["Claude", "GPT", "Gemini"];
models.forEach(function (model, index) {
  console.log(index + " - " + model);
});
