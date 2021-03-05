import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <h2>{props.data.city}</h2>
            </li>
            <li>
              {" "}
              <FormattedDate date={props.data.date} />{" "}
            </li>
            <li>
              <h3>
                {props.data.temperature}
                <span className="units">
                  <span className="fahrenheit">°F</span> |{" "}
                  <span className="celsius">C</span>
                </span>
              </h3>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <div className="icon">
              <WeatherIcon code={props.data.icon} />{" "}
            </div>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Wind: {props.data.wind} mph </li>
            <li><strong>{props.data.jacket}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
}