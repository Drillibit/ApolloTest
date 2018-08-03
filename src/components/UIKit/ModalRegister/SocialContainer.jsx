import React from 'react';
import styled from 'styled-components';

import { colors } from '../../helpers/colors';
import { Icon } from '../Icon';

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 74%;
  margin: 27px auto 0 auto;
`;

const SocialLink = styled.a`
    width: 64px;
    height: 64px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    font-size: 25px;
`;

const FacebookLink = SocialLink.extend`
  background-color: ${colors.blue};
`;

const GoogleLink = SocialLink.extend`
  background-color: ${colors.red};
`;

const TwitterLink = SocialLink.extend`
  background-color: ${colors.cyan};
`;

const StyledImage = styled(Icon)`
    width: 60%;
    height: 60%;
    margin-top: 20%;
    color: #fff;
`;

export const SocialContainer = () => (
  <SocialWrapper>
    <TwitterLink href="/#">
      <StyledImage icon="twitter" />
    </TwitterLink>
    <FacebookLink href="/#">
      <StyledImage icon="facebook" />
    </FacebookLink>
    <GoogleLink href="/#">
      <StyledImage icon="google-plus" />
    </GoogleLink>
  </SocialWrapper>
);
