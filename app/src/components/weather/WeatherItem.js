import React from "react";

function WeatherItem({ dt_txt, main, weather }) {
  const { description, icon } = weather[0];
  const mainW = weather[0].main;
  const { temp_min, temp_max } = main;

  const getIcon = (weather) => {
    const url = "http://openweathermap.org/img/wn/";
    const end = "@2x.png";
    return `${url}${weather}${end}`;
  };

  const getCelsius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  const getDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  return (
    <div className="col">
      <div className="card">
        <div className="card-image">
          <img src={getIcon(icon)} title={description} className="image" />
        </div>
        <div className="card-content">
          <div className="card-title">
            {mainW}
            <p className="date">{getDate(dt_txt)}</p>
          </div>
          <div style={{ marginBottom: 20, marginTop: 10 }}>
            <p className="temp right">
              <i className="tiny material-icons">arrow_drop_down</i>
              {getCelsius(temp_min)}
              <i className="tiny material-icons">arrow_drop_up</i>
              {getCelsius(temp_max)} °C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherItem;
