import React, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

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
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

    return (
      <div className="searchForm">
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
        <div className="weatherInfo">
          <ul>
            <li>
              <h2> {city} </h2>
            </li>
            <li>Temperature: {weather.temperature}°F </li>
            <li>Description: {weather.description}</li>
            <li>Do I need a Jacket? {props.jacket}</li>
            <li>
              <img src={weather.icon} alt="weather icon"></img>
            </li>
          </ul>
        </div>
      </div>
    ); 
  }