import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import Location from '../components/Location';
import Weather from '../components/Weather';
import Dust from '../components/Dust';

const infoWrapper = styled.div`
  
`

const Information = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');

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
    const apiUrl = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json);
        setTemp(json.main.temp);
        setCity(json.name);
        setDescription(json.weather[0].main);
      });
  }

  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

  return (
    <div>
      <Location name={city}/>
      <Weather temp={temp} description={description}/>
      <Dust />
    </div>
  );
};

export default Information;