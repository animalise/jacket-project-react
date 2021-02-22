import react, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
  const [city, setCity] = useState("");

  function updateCity(response) {
    setCity(response.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "af173d370d3263e90c511e8cd78a494a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateCity);
  }
  
  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input type="search"
        placeholer="Enter a city..."
        className="formControl"
        autoComplete="off"
        autoFocus="true"
        onChange={updateCity}
        />
       
        <button type="button"
          className="btn btn-outline-dark">Search</button>
           
        <button type="button" 
          className="btn btn-outline-light">Current Location</button>
      </form>
      <div className="weatherInfo">
      <h2> {city} </h2>
      </div>
    </div>
  )
}