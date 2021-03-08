import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import './Weather.css';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);


    function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
    });
  }

   function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCityData(event) {
    setCity(event.target.value);
  }

 
  function search() {
    const apiKey = "af173d370d3263e90c511e8cd78a494a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiKey = "af173d370d3263e90c511e8cd78a494a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

if (weatherData.ready)  {
    return (
      <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
              type="search"
              placeholer="Enter a city..."
              autoFocus="on"
              onChange={updateCityData}
            />
            <button type="button" className="btn btn-outline-dark">
              🔎
          </button>
            <button type="button" className="btn btn-outline-dark" onClick={getCurrentLocation}>
              📍
          </button>
          </div>
          </form>
        <div className="WeatherInfoContainer">
      <WeatherInfo data={weatherData}/>
      <WeatherForecast city={weatherData.city}/> 
      </div>
      </div>  
    );
    } else {
          search();
          return (
          <div>
            <br />
          <Loader type="TailSpin" color="#EC7E33" height={60} width={80} />
          </div>
          )
        };
}
