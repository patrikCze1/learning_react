import React from "react";
import Loading from "../Loading";
import WeatherItem from "./WeatherItem";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { changeCity } from '../../actions/index';
import { useSelector } from "react-redux";

const FORECAST = gql`
  query forecasts($city: String!) {
    forecasts(city: $city) {
      list {
        dt_txt
        main {
          temp_min
          temp_max
        }
        weather {
          main
          description
          icon
        }
      }
      city {
        name
        country
        sunrise
        sunset
      }
    }
  }
`;

const Weather = (props) => {
  const state = useSelector(state => state)

  const { loading, error, data } = useQuery(FORECAST, {
    variables: { city: state.cityReducer },
  });

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const getDate = (date) => {
    const d = new Date(parseInt(date));
    return `${d.getHours()}:${d.getMinutes() + 1}`;
  };

  const city = data.forecasts.city;
  const { sunrise, sunset } = city;

  const cities = [
    {name: 'London', code: 'London'},
    {name: 'Prague', code: 'Prague'},
    {name: 'Paris', code: 'Paris'},
    {name: 'Sydney', code: 'Sydney'},
    {name: 'New York', code: 'New+York'},
    {name: 'Moscow', code: 'Moscow'},
  ];

  const options = cities.map(city => {
    return <button className='btn' onClick={() => props.dispatch(changeCity(city.code))}>{city.name}</button>
  });

  const forecasts = data.forecasts.list.filter((forecast, index) => {
    if (index % 8 === 0) {
      return forecast;
    }
  });

  return (
    <div>
      <div>
          {options}
      </div>
      <h1>
        {city.name} - {city.country}
      </h1>
      <p>
        Sunrise: {getDate(sunrise)} AM - Sunset: {getDate(sunset)} PM
      </p>
      <div className="row">
        {forecasts.map((forecast, index) => (
          <WeatherItem {...forecast} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
