import React from 'react';
import styled from 'styled-components';

const StoryBookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const StoryBookItem = styled.div`
  margin: 4px 6px;
`;


export const Container = ({ children }) => (
  <StoryBookContainer>
    {
      children.map(item => (
        <StoryBookItem>{item}</StoryBookItem>
      ))
    }
  </StoryBookContainer>
);
