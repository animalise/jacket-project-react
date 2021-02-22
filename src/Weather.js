import react, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
  return (
    <div className="searchForm">
      <form>
        <input type="search"
        placeholer="Enter a city..."
        className="formControl"
        autoComplete="off"
        autoFocus="true"
        />
       
        <button type="button"
          className="btn btn-outline-dark">Search</button>
           
        <button type="button" 
          className="btn btn-outline-light">Current Location</button>
      </form>
      
    </div>
  )
}