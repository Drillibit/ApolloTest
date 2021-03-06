import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StoryBookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${({ dark }) => (dark ? '#333' : '#fff')};
  padding: 50px 20px;
`;

const StoryBookItem = styled.div`
  margin: 4px 6px;
`;

export const Container = ({ children, dark, ...props }) => (
  <StoryBookContainer dark={dark} {...props}>
    {React.Children.map(children, child => (
      <StoryBookItem >{child}</StoryBookItem>
    ))}
  </StoryBookContainer>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  dark: PropTypes.bool,
};

Container.defaultProps = {
  dark: false,
};
