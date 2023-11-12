Get real-time weather information with our React.js Weather App.  Search for locations, view current temperature, humidity, wind speed, and weather description. The app features a user-friendly design, recent search functionality, and real-time data from OpenWeatherMap API, ensuring you're ready for any forecast.

# Weather-App-ReactJs

A React.js application that provides current weather information for a specified location. Users can search for weather details, view temperature, humidity, wind speed, and weather description. The app also displays recent searches for quick access to frequently checked locations.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

  
## Features

- Display current weather information, including temperature, humidity, wind speed, and weather description.
- Support for searching weather details for different locations.
- Display recent searches for quick access to frequently checked locations.
- Responsive design for optimal user experience on various devices.


## Technologies Used

- React.js
- Material-UI (CircularProgress, Slide)
- OpenWeatherMap API for weather data
- SVG for search icon


## Installation

1. Clone the repository:

   ```bash
     git clone https://github.com/onkaryemul/Weather-App-ReactJs.git
   ```

2. Navigate to the project folder:

   ```bash
     cd Weather-App-ReactJs
   ```

3. Install dependencies:

   ```bash
     npm install
   ```


## Usage

Stay informed about the weather with our React.js Weather App! The app utilizes the OpenWeatherMap API to provide real-time weather information for any location.

1. ### Getting OpenWeatherMap API Key:

   To use this Weather App, you'll need to obtain an API key from OpenWeatherMap. Follow these steps:

   a. Visit [OpenWeatherMap]([https://www.omdbapi.com/apikey.aspx](https://home.openweathermap.org/)).

   b. Sign up for a free account or log in if you already have one.

   c. Once logged in, navigate to the "API keys" section in your account dashboard.

   d. Generate a new API key and copy it. 

2. Create a .env file in the project root and add your OpenWeatherMap API key:

   ```env
     REACT_APP_API_KEY=your_openweathermap_api_key
   ```
   
   Replace your_openweathermap_api_key with your actual API key.

3. Start the development server:

   ```bash
     npm start
   ```
   
4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the weather app website in action.

5. Now you're ready to explore the Weather App and access up-to-date weather information by searching for a location, and viewing weather details.
