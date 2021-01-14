import React from 'react';
import { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  
  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  }
  const handleGeoError = (err) => {
    console.log(err);
  }
  const getWeather = (lat, lon) => {
    console.log(lat, lon);
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const apiKey = 'b6429e46f5ed953325e73dc989ca4827';
    const apiUrl = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        setTemp(json.main.temp);
        setCity(json.name);
      });
  }

  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  
  return (
    <div>
      {temp} @{city}
    </div>
  );
}

export default Weather;