import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { LoadingOutlined } from '@ant-design/icons';

import Location from './Location';
import Weather from './Weather';
import Dust from './Dust';

import { getWeather } from '../lib/api/weather';

const InformationWrapper = styled.div`
  display: flex;
`;

const Information = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const fetchData = async () => {
          try {
            await getWeather(lat, lon).then((res) => {
              console.log(res.data);
              setIsLoading(false);
              setTemperature(parseInt(res.data.main.temp, 10));
              setCity(res.data.name);
              setDescription(res.data.weather[0].main);
            });
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      });
    } else {
      alert('Cannot access location');
    }
  }, [navigator.geolocation]);

  return (
    <InformationWrapper>
      {isLoading ? (
        <LoadingOutlined style={{ fontSize: 12 }} spin />
      ) : (
        <Location city={city} />
      )}
      <Weather temp={temperature} description={description} />
      <Dust />
    </InformationWrapper>
  );
};

export default Information;
