import React from 'react';

function WeatherItem(props) {
    return (
        <div className="fade-in">
            <h1 className="uk-heading-small">{props.cityName}</h1>
            <div className="uk-flex">{props.forecasts}</div>
        </div>
    );
}

export default WeatherItem;