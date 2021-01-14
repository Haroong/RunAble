import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  let latitude;
  let longitude;

  const geoSuccess = (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude; 
  }
  const geoError = (err) => {
      console.log(err);
  }

  const apiKey = process.env.API_KEY;
  const apiUrl = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);


  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        res.json()
      })
      .then((data) => {
        console.log(data);
      })
    }, [apiUrl]);

  return (
    <div>
      this will be..{city}
    </div>
  );
}

export default Weather;