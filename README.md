# Weather-API
Weather Information Service


# Weather Information Services API

This is a simple weather information API built with **Express.js**. It fetches weather data from the [WeatherStack API](https://weatherstack.com/) for a given city.

## Features

- Fetches the current weather for a specific city.
- Provides information such as temperature, weather description, and an icon representing the current weather.

## Requirements

To run this project, you need to have:

- [Node.js](https://nodejs.org/)
- A [WeatherStack API](https://weatherstack.com/) key.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-info-api.git
    cd weather-info-api
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your WeatherStack API key and port number:

    ```
    WEATHERSTACK_API_KEY=your_api_key
    PORT=3000
    ```

## Running the Application

Start the server:

```bash
node index.js
