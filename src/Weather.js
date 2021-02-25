import React, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function updateCityData(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "af173d370d3263e90c511e8cd78a494a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

let searchForm = (
   <div className="searchForm">
        <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholer="Enter a city..."
            autoComplete="off"
            autoFocus={true}
            onChange={updateCityData}
          />
          <button type="button" className="btn btn-outline-dark">
            Search
          </button>
          <button type="button" className="btn btn-outline-light">
            Current Location
          </button>
        </form>
        </div>
        </div>
);

if (loaded)  {
    return (
        <div className="weatherInfo">
          {searchForm}
          <div className="row">
          <div className="col-6">
          <ul>
            <li><h2>{city}</h2></li>
            <li> time and date </li>
            <li><h3>
              {weather.temperature}
                <span className="units"><span className="fahrenheit">°F</span> | <span className="celsius">C</span></span>
            </h3></li>
          </ul>
            </div>
            <div className="col-6">
          <ul>
            <li><img src={weather.icon} alt="weather icon"></img></li>
            <li>{weather.description}</li>
            <li>wind: {weather.wind} mph </li>
            <li>do I need a jacket? {props.jacket}</li>
          </ul>
            </div>
        </div>
        </div>
    );
    } else {
      return (
        (searchForm)
        );
        };
}
