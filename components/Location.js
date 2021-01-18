import React from 'react';
import styled from 'styled-components';

const LocationWrapper = styled.div`
  height: 100%;
  width: 350px;
  z-index: 1;
  top: 50%;
  left: 3%;
  overflow-x: hidden;
  text-align: center;
`;

const getDate = () => {
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

const Location = ({ name }) => {
  return (
    <>
      <LocationWrapper>
        <h1>{name}</h1>
        <div>{getDate()}</div>
      </LocationWrapper>
    </>
  );
};

export default Location;
