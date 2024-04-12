import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./card.css";

var moment = require("moment");

function WeatherData(props) {
  let _date = new Date();
  const weekday = props.reading.dt * 1000;
  _date.setTime(weekday);
  const _img = `owf owf-${props.reading.weather[0].id} owf-5x`;
  const fahrenheitMax = props.reading.main.temp_max;

  const fahrenheitMin = props.reading.main.temp_min;

  const farenheitTemp = props.reading.main.temp;

  return (
    <div className="col-2" id="weatherCard">
      <Link
        to={{
          pathname: `/hourlyForecast/${props.reading.day}`,
          state: {
            completeData: props.completeData,
            cityName: props.cityName,
          },
        }}
      >
        <div className="col-14">
          <div className="row">
            <div className="col">
              <h4 className="text-secondary">
                {moment(_date).format("MMM - DD - YY")}
              </h4>
              <h5>{props.reading.day}</h5>
              <p>
                Min Temp: {fahrenheitMin}°F <br />
                Max Temp: {fahrenheitMax}°F
              </p>
              <i className={_img}></i>
              <p>{props.reading.weather[0].description}</p>
              <h5>Current Temp: {farenheitTemp}°F</h5>
              <p></p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default withRouter(WeatherData);
