import React from 'react';
import styled from 'styled-components';
import Snowflakes from './Snowflakes';

const Wrap = styled.div`
  position: relative;
`;

export default ({ children, className }) => (
  <Wrap className={className}>
    <Snowflakes />
    {children}
  </Wrap>
);
