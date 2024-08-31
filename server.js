const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;


app.use(express.json());


app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;

    if (!city) {
        return res.status(400).json({ error: 'Please provide a city name' });
    }

    const apiKey = process.env.WEATHERSTACK_API_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
   
        const response = await fetch(url);
        const weatherData = await response.json();

        if (weatherData.error) {
            res.status(404).json({ error: weatherData.error.info });

        } else {
       
            const cityName = weatherData.location.name;
            const temperature = weatherData.current.temperature;
            const description = weatherData.current.weather_descriptions[0];
            const icon = weatherData.current.weather_icons[0];

            res.json({
                city: cityName,
                temperature: temperature,
                description: description,
                icon: icon
            });
        }
        
    } catch (err) {
        console.error('Error fetching weather data:', err);
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});