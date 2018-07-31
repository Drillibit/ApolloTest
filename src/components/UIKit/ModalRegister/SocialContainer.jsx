import React from 'react';
import styled from 'styled-components';


const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 77%;
  margin: 20px auto 0 auto;
`;

const SocialLink = styled.a`
    width: 59px;
    height: 59px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
`;

const FacebookLink = SocialLink.extend`
  background-color: #3b5998;
`;

const GoogleLink = SocialLink.extend`
  background-color: #dd4b39;
`;

const TwitterLink = SocialLink.extend`
  background-color: #55acee;
`;

const StyledImage = styled.img`
    width: 60%;
    height: 60%;
    margin-top: 20%;
`;

export const SocialContainer = () => (
  <SocialWrapper>
    <TwitterLink>
      <StyledImage alt="twitter" src="/" />
    </TwitterLink>
    <FacebookLink>
      <StyledImage alt="facebook" src="/" />
    </FacebookLink>
    <GoogleLink>
      <StyledImage alt="google" src="/" />
    </GoogleLink>
  </SocialWrapper>
);
