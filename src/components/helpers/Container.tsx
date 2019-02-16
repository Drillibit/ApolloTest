import React from 'react';
import styled from 'styled-components';

type StoryBookContainerType = {
  dark: boolean
};

const StoryBookContainer = styled.div<StoryBookContainerType>`
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

type ContainerProps = {
  children: React.ReactNode,
  dark: boolean
};

export const Container = ({ children, dark, ...props }:ContainerProps) => (
  <StoryBookContainer dark={dark} {...props}>
    {React.Children.map(children, child => (
      <StoryBookItem >{child}</StoryBookItem>
    ))}
  </StoryBookContainer>
);

Container.defaultProps = {
  dark: false,
};
