import React from 'react';
import Information from './Information';
import Image from './Image';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  margin: 0;
  background-image: radial-gradient(
    circle farthest-corner at 12.3% 19.3%,
    rgba(85, 88, 218, 0.5) 0%,
    rgba(95, 209, 249, 0.5) 100.2%
  );
`;

const Content = () => {
  return (
    <BackgroundWrapper>
      <Information />
      <Image />
    </BackgroundWrapper>
  );
};

export default Content;
