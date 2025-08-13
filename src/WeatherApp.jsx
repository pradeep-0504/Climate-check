import React from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
    city:"Vinukonda",
    feels_like: 24.35,
    humidity: 90,
    temp: 23.59,
    tempMin: 23.59,
    tempMax: 23.59,
    weather: "overcast clouds",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Weather Application</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}