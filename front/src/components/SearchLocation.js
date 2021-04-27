import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

const SearchWrapper = styled.div`
  overflow: hidden;
  float: right;
`;

const { Search } = Input;

const SearchLocation = () => {
  const onSearch = useCallback((e) => {
    console.log(e.target.value);
  }, []);

  return (
    <SearchWrapper>
      <Search placeholder='search' onSearch={onSearch} enterButton />
    </SearchWrapper>
  );
};

export default SearchLocation;
