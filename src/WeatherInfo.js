import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-7">
          <ul>
            <li>
              <h2 className="text-uppercase">{props.data.city}</h2>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <h3>
                <WeatherTemperature fahrenheit={props.data.temperature} />
              </h3>
            </li>
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <div className="icon">
              <WeatherIcon code={props.data.icon} />{" "}
            </div>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Wind: {props.data.wind} mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}