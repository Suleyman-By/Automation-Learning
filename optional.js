const company = {
  name: "OpenAI",
  location: {
    country: "USA",
  },
};

console.log(company.location?.country);

const company2 = {
  name: "OpenAI",
};

console.log(company2.location2?.country2);