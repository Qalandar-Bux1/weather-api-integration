const express = require('express');
const axios = require('axios');
const WeatherRecord = require('../models/weatherRecord');

const router = express.Router();

router.get('/:city', async (req, res) => {
  const city = req.params.city;

  try {
    // 1. Get latitude & longitude for the city
    const geoResponse = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    // If no location found
    if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
      return res.status(404).json({ message: 'City not found' });
    }

    const { latitude, longitude, name } = geoResponse.data.results[0];

    // 2. Fetch current weather using Open-Meteo
    const weatherResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    const weatherData = {
      city: name,
      temperature: weatherResponse.data.current_weather.temperature,
      condition: `Wind Speed: ${weatherResponse.data.current_weather.windspeed} km/h`,
      date: new Date(),
    };

    // 3. Save to MongoDB
    const record = new WeatherRecord(weatherData);
    await record.save();

    // 4. Return response
    res.json({
      message: 'Weather data fetched and saved successfully',
      data: weatherData,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error fetching weather data', error: error.message });
  }
});

module.exports = router;
