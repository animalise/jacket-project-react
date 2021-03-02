import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import './Weather.css';


export default function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({loaded: false});
  
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
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      jacket: "YES!"
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

if (weather.loaded)  {
    return (
        <div className="weatherInfo">
          {searchForm}
          <div className="row">
          <div className="col-6">
          <ul>
            <li><h2>{city}</h2></li>
            <li> <FormattedDate date={weather.date} /> </li>
            <li><h3>
              {weather.temperature}
                <span className="units"><span className="fahrenheit">°F</span> | <span className="celsius">C</span></span>
            </h3></li>
          </ul>
            </div>
            <div className="col-6">
          <ul>
            <li><img src={weather.icon} alt="weather icon"></img></li>
            <li className="text-capitalize">{weather.description}</li>
            <li>Wind: {weather.wind} mph </li>
            <li>Do I need a jacket? {weather.jacket}</li>
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
