import { CircularProgress, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from './search.svg';

function App() {
  const [cityName] = useState("Sangli"); // Set default location to Sangli
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isCelsius] = useState(true);

  const fetchData = (city) => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=${isCelsius ? "metric" : "imperial"
      }`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setData(data);
        updateRecentSearches(city);
      })
      .catch(() => {
        window.alert("Location not found");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(cityName);
  }, [cityName, isCelsius]);

  const handleSearch = (e) => {
    fetchData(inputText);
    setInputText("");
  };

  const updateRecentSearches = (city) => {
    setRecentSearches((prevSearches) => {
      const updatedSearches = [city, ...prevSearches];
      return updatedSearches.slice(0, 5);
    });
  };

  return (
    <div className="bg_img">
      <div className='app'>
        <h1>Weather App</h1>
        {!loading ? (
          <>
            <div className='search'>
              <input
                placeholder='Search location'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <img
                src={SearchIcon}
                alt='search'
                onClick={handleSearch}
              />
            </div>
            <h1 className="city">{data.name}</h1>

            <h2 className="temp">Temperature: {data.main.temp.toFixed()} °C </h2>

            <Slide direction="right" timeout={800} in={!loading}>
              <div className="box_container">
                <div className="box">
                  <p>Humidity</p>
                  <h1>{data.main.humidity.toFixed()}%</h1>
                </div>

                <div className="box">
                  <p>Wind Speed</p>
                  <h1>{data.wind.speed.toFixed()} m/s</h1>
                </div>

                <div className="box">
                  <p>Weather Description</p>
                  <h1>{data.weather[0].description}</h1>
                </div>
              </div>
            </Slide>

            <div className="recent-searches">
              <p>Recent Searches: </p>
              {recentSearches.map((search, index) => (
                <span key={index}>{search}</span>
              ))}
            </div>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
}

export default App;


