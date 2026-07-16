import dotenv from "dotenv";
dotenv.config();

console.log(`
Hello ${process.env.NAME}
Age: ${process.env.AGE}`);
