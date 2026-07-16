import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({
  input,
  output,
});

const getWeather = async () => {
  try {
    const cityName = await rl.question(`===== WEATHER APP =====

Enter city:`);
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?q=${cityName}&key=${process.env.WEATHER_API_KEY}`,
    );
    const data = response.data;

    console.log(`===== WEATHER =====
City: ${data.location.name}
Country: ${data.location.country}
Temperature: ${data.current.temp_c}
Condition: ${data.current.condition.text}
Humidity: ${data.current.humidity}
Wind: ${data.current.wind_kph}`);
  } catch (error) {
    console.log("City not found");
  } finally {
    rl.close();
  }
};
getWeather();
