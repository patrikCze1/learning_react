import React, { Component } from "react";
import Loading from "../Loading";
import WeatherItem from "./WeatherItem";

class Weather extends Component {
  state = {
    forecasts: [],
    city: {},
    loading: true,
    cityOption: "London"
  };

  componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityOption}&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .catch(err => console.log(err))
      .then((
        res //console.log(res)
      ) =>
        this.setState({
          forecasts: res.list,
          city: res.city,
          loading: false
        })
      )
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cityOption !== this.state.cityOption) {
      this.componentDidMount();
    }
  }

  getIcon(weather) {
    const url = "http://openweathermap.org/img/wn/";
    const end = "@2x.png";

    return `${url}${weather}${end}`;
  }

  getCelsius(temp) {
    return Math.floor(temp - 273.15);
  }

  getDate(date) {
    const d = new Date(date);

    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  render() {
    const { forecasts, city } = this.state;
    let data = forecasts.filter((f, index) => index % 8 === 0);

    data = data.map((f, index) => {
      return (
        <div
          key={index}
          title={f.weather[0].description}
          className="uk-card uk-card-default uk-card-body uk-margin-small-left uk-margin-small-right uk-width-1-5 "
        >
          <img src={this.getIcon(f.weather[0].icon)} alt="icon" />
          <div className="weatherName">
            <span>{f.weather[0].main}</span>

            <span className="date">{this.getDate(f.dt_txt)}</span>
          </div>

          <hr></hr>

          <div style={{ padding: "0px 2%" }}>
            <span style={floatLeft}>
              Min: {this.getCelsius(f.main.temp_min)} °C
            </span>
            <span style={floatRight}>
              Max: {this.getCelsius(f.main.temp_max)} °C
            </span>
          </div>
        </div>
      );
    });

    return (
      <div className="uk-padding">
          <select className="uk-select"
            onChange={e =>
              this.setState({ cityOption: e.target.value, loading: true })
            }
          >
            <option value="London">London</option>
            <option value="Prague">Prague</option>
            <option value="Taipei">Taipei</option>
          </select>
            
        {this.state.loading ? (
          <Loading />
        ) : (
          <WeatherItem forecasts={data} cityName={city.name} />
        )}
      </div>
    );
  }
}

const apiKey = "536f1b860110f17fbf49e75fe53d3601";

const floatRight = {
  float: "right"
};

const floatLeft = {
  float: "left"
};

export default Weather;
