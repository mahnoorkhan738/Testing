
const { getWeather } = require('../utils/weatherApi');

test('Weather API returns temperature for Islamabad with status 200', async () => {
  const response = await getWeather('Islamabad');
  expect(response.status).toBe(200);
  expect(typeof response.data.main.temp).toBe('number');
});