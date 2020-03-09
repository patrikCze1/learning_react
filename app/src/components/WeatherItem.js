import React from 'react';

function WeatherItem(props) {
    return (
        <div className="fade-in">
            <h1>{props.cityName}</h1>
            <div style={weatherItems}>{props.forecasts}</div>
        </div>
    );
}

const weatherItems = {
    display: "flex"
};

export default WeatherItem;