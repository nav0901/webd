import React, { useState, useEffect } from "react";
import WeatherData from "./WeatherData";
import TextField from "@material-ui/core/TextField";
import { useHistoryState } from "./useHistroy";
var moment = require("moment");

function WeatherContainer() {
  const [completeData, setCompleteData] = useState([]);
  const [dailyData, setDailyData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [cityName, setCityName] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setDailyData(JSON.parse(localStorage.getItem("data")) || []);
    if (dailyData.length <= 0) refreshData();
  }, []);

  let display;
  if (completeData.length > 0 || hasError == false) {
    display = displayData();
  }
  function changeText(event) {
    setCityName(event.target.value);
  }

  function displayData() {
    return dailyData.map((reading, index) => (
      <WeatherData
        reading={reading}
        key={index}
        completeData={completeData}
        cityName={cityName}
      />
    ));
  }
  function refreshData() {
    const _url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&APPID=3981c77803578cc809ae7fa0836c638e`;
    fetch(_url)
      .then((res) => res.json())
      .then((data) => {
        const _data = data.list.filter((reading) => reading.dt_txt.includes("00:00:00"));
        data.list.map(function (name) {
          let _date = new Date();
          const weekday = name.dt * 1000;
          _date.setTime(weekday);
          name.day = moment(_date).format("dddd");
        });

        setCompleteData(data.list);
        setHasError(false);
        setDailyData(_data);
        localStorage.setItem("data", JSON.stringify(_data));
        setDailyData(JSON.parse(localStorage.getItem("data")) || []);
      })
      .catch((err) => {
        setCompleteData([]);
        setHasError(true);
        setDailyData([]);
      });
  }
  return (
    <div className="container" style={{ color: "white", background: "black" }}>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1>Weather Wonders!</h1>
        <br />
        <h2 style={{ color: "#4f4a45" }}>{cityName.toUpperCase()}</h2>
        <br />
        <br />

        <div>
          <label style={{ fontWeight: "bold", fontSize: "20px", color: "black" }}>
            Enter the city name:
          </label>
          <span>{"   "}</span>
          <input
            type="text"
            id="city-name"
            label="Enter City Name"
            value={cityName}
            onChange={changeText}
            style={{
              height: "20%",
              borderRadius: "5px",
            }}
          />
          <br />
          <input
            type="button"
            className="btn btn-info mt-3"
            value="Get Forecast"
            onClick={refreshData}
            disabled={cityName == 0}
          />
        </div>
        <br />
        <br />
        <br />
      </div>
      <div>{display}</div>
    </div>
  );
}

export default WeatherContainer;
