import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview (props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

  function showForecastDay() {
    let forecastDay = new Date(props.data.dt * 1000);
    return (days[forecastDay.getDay()]);
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°`;
  }
  
  return (
    <div className="WeatherForecastPreview col">
      {showForecastDay()}
      <WeatherIcon code={props.data.weather[0].icon}/>
      {temperature()}
    </div>
  );
}