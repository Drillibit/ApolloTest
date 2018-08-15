import React from 'react';
import styled from 'styled-components';

import { MainHeader } from '../UIKit/MainHeader';

import { TabPane } from '../UIKit/Tabs';
import { Dropdown } from '../UIKit/Dropdown';
import { Preview } from '../UIKit/Preview';
import { Preloader } from '../UIKit/Preloader';

export const FrontPage = () => (
  <div>
    <MainHeader />
    <div>
      <TabPane>
        <Dropdown />
      </TabPane>
      <Preview />
      <Preloader />
    </div>
  </div>
);
