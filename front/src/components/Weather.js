import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import IconRain from '../icons/rainy.svg';
import IconSnow from '../icons/snow.svg';
import IconSun from '../icons/sun.svg';
import IconNight from '../icons/night.svg';
import IconMist from '../icons/mist.svg';
import IconCloudyNight from '../icons/cloudy-night.svg';
import IconCloudyDay from '../icons/cloudy-day.svg';

const WeatherWrapper = styled.div`
  color: white;
  display: flex;
`;

const Icon = styled.img`
  width: 8rem;
  margin: 3rem;
`;

const Weather = ({ temp, description }) => {
  const [convertedTemp, setConvertedTemp] = useState('');
  const [units, setUnits] = useState('℃');
  const [iconSrc, setIconSrc] = useState('');

  const onClickUnit = useCallback(() => {
    console.log('clicked');
    if (units === '℃') {
      // convert to Fahrenheit
      setConvertedTemp(temp * 1.8 + 32);
      setUnits('℉');
    } else {
      // convert to Celsius
      setConvertedTemp((temp - 32) / 1.8);
      setUnits('℃');
    }
  }, []);

  const setWeatherIcon = useCallback((description, time) => {
    console.log(description, time);

    switch (description) {
      case 'Haze':
        setIconSrc(IconMist);
        break;
      case 'Clouds':
        if (time <= 6 || time >= 19) {
          setIconSrc(IconCloudyNight);
        } else {
          setIconSrc(IconCloudyDay);
        }
        break;
      case 'Snow':
        setIconSrc(IconSnow);
        break;
      case 'Rain':
        setIconSrc(IconRain);
        break;
      case 'Clear':
        if (time <= 6 || time >= 19) {
          setIconSrc(IconNight);
        } else {
          setIconSrc(IconSun);
        }
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    const now = new Date();
    const time = now.getHours();

    setWeatherIcon(description, time);
  }, []);

  return (
    <WeatherWrapper>
      <h1>{temp}</h1>
      <h1 onClick={onClickUnit}>{units}</h1>
      <Icon src={iconSrc}></Icon>
      <h4>{description}</h4>
    </WeatherWrapper>
  );
};

export default Weather;
