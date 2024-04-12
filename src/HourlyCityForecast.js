import React from "react";
import "./card.css";

var moment = require("moment");

function HourlyForecast(props) {
  let _date = new Date();
  const weekday = props.data.dt * 1000;
  _date.setTime(weekday);
  const _img = `owf owf-${props.data.weather[0].id} owf-5x`;
  const fahrenheitMax = props.data.main.temp_max;

  const fahrenheitMin = props.data.main.temp_min;

  const farenheitTemp = props.data.main.temp;

  return (
    <div className="col-2" id="weatherCard">
      <div className="row" style={{ color: "#66ccff" }}>
        <div className="col">
          <h4 className="text-muted">
            {moment(_date).format("MMM - DD - YY")}
          </h4>
          <h5>
            {props.data.day} at {moment(_date).format("HH:mm:ss a")}
          </h5>
          <p>
            Min Temp: {fahrenheitMin}°F <br /> Max Temp: {fahrenheitMax}°F
          </p>
          <i className={_img}></i>
          <p>{props.data.weather[0].description}</p>
          <h5>Current Temp: {farenheitTemp}°F</h5>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
