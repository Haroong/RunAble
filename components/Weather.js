import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
  margin-left: 350px;
  padding-left: 20px;
`;

const TempWrapper = styled.div`
  display: flex;
  color: white;
`;

const Weather = ({ temp, description }) => {
  const [units, setUnits] = useState('℃');

  const onClickUnit = useCallback((e) => {
    if (units === '℃') {
      // to Fahrenheit
      setTemp(temp * 1.8 + 32);
      console.log(temp * 1.8 + 32);
      setUnits('℉');
    } else {
      // to Celsius
      setTemp((temp - 32) / 1.8);
      console.log((temp - 32) / 1.8);
      setUnits('℃');
    }
  }, []);

  return (
    <WeatherWrapper>
      <TempWrapper>
        <h1>{temp}</h1>
        <h1 onClick={onClickUnit}>{units}</h1>
      </TempWrapper>
      <h4>{description}</h4>
    </WeatherWrapper>
  );
};

export default Weather;
