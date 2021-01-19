import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import SearchLocation from './SearchLocation';
import Location from '../components/Location';
import Weather from '../components/Weather';
import Dust from '../components/Dust';

const InformationWrapper = styled.div`
  display: flex;
`;

const Information = () => {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const API_KEY = 'b6429e46f5ed953325e73dc989ca4827';
        const API_URL = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

        const fetchData = async () => {
          await fetch(API_URL)
            .then((res) => {
              return res.json();
            })
            .then((json) => {
              setTemp(parseInt(json.main.temp, 10));
              setCity(json.name);
              setDescription(json.weather[0].main);
            })
            .catch((err) => console.error(err));
        };
        fetchData();
      });
    } else {
      alert('Cannot access location');
    }
  }, []);

  return (
    <InformationWrapper>
      <Location city={city} />
      <SearchLocation />
      <Weather temp={temp} description={description} />
      <Dust />
    </InformationWrapper>
  );
};

export default Information;
