import React from 'react';
import styled from 'styled-components';

const LocationWrapper = styled.div`
  height: 100%;
  width: 350px;
  position: relative;
  z-index: 1;
  top: 100px;
  left: 2%;
  overflow-x: hidden;
  text-align: center;
  color: white;
`;

const getToday = () => {
  const now = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  const date = now.getDate();
  const month = months[now.getMonth()];
  const day = days[now.getDay()];

  const today = `${day} ${date}, ${month}`;
  return today;
};

const Location = ({ city }) => {
  return (
    <LocationWrapper>
      <h1>{city}</h1>
      <div>{getToday()}</div>
    </LocationWrapper>
  );
};

export default Location;
