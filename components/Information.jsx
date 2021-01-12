import React from 'react';
import Location from '../components/Location';
import Weather from '../components/Weather';
import Dust from '../components/Dust';

const Information = () => {
  return (
    <div>
      <Location />
      <Weather />
      <Dust />
    </div>
  );
};

export default Information;