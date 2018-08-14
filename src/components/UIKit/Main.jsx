import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = ({ children }) => (
  <StyledMain>
    {children}
  </StyledMain>
);


Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Main.defaultProps = {
  children: null,
};
