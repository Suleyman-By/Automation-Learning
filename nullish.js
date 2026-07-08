const product = {
  name: "Laptop",
};
console.log(product?.price ?? "Price not available");

const company = {
  location: {
    country: "USA",
  },
};
console.log(company?.location?.country ?? "Unknown Country");

const company2 = {};
console.log(company2?.location?.country ?? "Unknown Country");
