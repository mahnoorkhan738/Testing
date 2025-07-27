const axios = require('axios');

module.exports.getWeather = async (city) => {
  const apiKey = 'your_api_key_here';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  return await axios.get(url);
};