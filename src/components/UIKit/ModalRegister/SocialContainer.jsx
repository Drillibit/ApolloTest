import React from 'react';
import styled from 'styled-components';
import facebookSvg from './icons/facebook.svg';
import googleSvg from './icons/google-plus.svg';
import twitterSvg from './icons/twitter.svg';

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 20px auto 0 auto;
`;

const SocialLink = styled.a`
    width: 64px;
    height: 64px;
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
      <StyledImage alt="twitter" src={twitterSvg} />
    </TwitterLink>
    <FacebookLink>
      <StyledImage alt="facebook" src={facebookSvg} />
    </FacebookLink>
    <GoogleLink>
      <StyledImage alt="google" src={googleSvg} />
    </GoogleLink>
  </SocialWrapper>
);
