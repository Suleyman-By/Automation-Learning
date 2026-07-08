const multiply = (...numbers) => {
  for (const number of numbers) {
    console.log(number * 2);
  }
};

multiply(2, 3, 4);

const showUser = (name, ...hobbies) => {
  console.log(name);
  console.log(hobbies);
};

showUser("Solo", "AI", "Crypto", "Programming");

