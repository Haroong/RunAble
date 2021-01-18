import React, { useState } from 'react';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
  margin-left: 350px;
  padding-left: 20px;
`;

const Weather = ({ temp, description }) => {
  const [units, setUnits] = useState('℃');

  const handleUnit = (e) => {
    setUnits('℉');
  };

  return (
    <WeatherWrapper>
      <h1 onClick={handleUnit}>
        {temp}
        {units}
      </h1>
      <h4>{description}</h4>
    </WeatherWrapper>
  );
};

export default Weather;
