import React from 'react';
import { Card } from 'antd';
import { WiCloud } from 'react-icons/wi'

const Weather = ({temp, description}) => { 
  return (
    <Card style={{ width: 300 }}>
      <h1><WiCloud /></h1>
      <p>{temp}</p>
      <p>{description}</p>
    </Card>
  );
};

export default Weather;