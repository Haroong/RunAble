import React from 'react';
import Information from '../components/Information';
import Image from '../components/Image';
import styled from 'styled-components';

const contentWrapper = styled.div`
  margin-top: 10px;
`

const Content = () => {
  return (
    <contentWrapper>
      <Information />
      <Image />
    </contentWrapper>
  );
};

export default Content;