import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Information from './Information';
import Image from './Image';

const BackgroundDayColor = `radial-gradient(circle farthest-corner at 12.3% 19.3%, rgba(85, 88, 218, 0.5) 0%, rgba(95, 209, 249, 0.5) 100.2%)`;
const BackgroundNightColor = `linear-gradient( 65.5deg,  rgba(23,205,205,1) -15.1%, rgba(23,25,95,1) 71.5% )`;

const BackgroundWrapper = styled.div`
  margin: 0px;
  background-image: ${(props) => {
    if (props.day) {
      return BackgroundDayColor;
    } else {
      return BackgroundNightColor;
    }
  }};
`;

const App = () => {
  const [day, isDay] = useState(true);

  useEffect(() => {
    const now = new Date();
    const time = now.getHours();

    // time check
    if (time <= 6 || time >= 18) {
      isDay(false);
    }
  }, []);

  return (
    <BackgroundWrapper day={day}>
      <Information />
      <Image />
    </BackgroundWrapper>
  );
};

export default App;
