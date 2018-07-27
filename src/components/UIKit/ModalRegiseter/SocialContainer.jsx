import React from 'react';
import styled from 'styled-components';
// import facebookSvg from './icons/facebook.svg';
// import googleSvg from './icons/google-plus.svg';
import twitterSvg from './icons/twitter.svg';

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialLink = styled.a`
    padding: 20px;
    font-size: 30px;
    width: 30px;
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

export const SocialContainer = () => (
  <SocialWrapper>
    <TwitterLink>
      <img alt="twitter" src={twitterSvg} />
    </TwitterLink>
    {/* <FacebookLink>
      <img alt="facebook" src={facebookSvg} />
    </FacebookLink>
    <GoogleLink>
      <img alt="google" src={googleSvg} />
    </GoogleLink> */}
  </SocialWrapper>
);
