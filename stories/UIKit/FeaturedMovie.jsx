import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Rating } from '$components/UIKit/Rating';
import { Button } from '$components/UIKit/Button';
import { Icon } from '$components/UIKit/Icon';
import { LargeText, H1 } from '$components/UIKit/Typography';
import { Container } from '../helpers/Container';

/*
  LargeText 18px bold and normal

*/ 

const stories = storiesOf('UIKit/FeaturedMovie', module);
const propsThreeMd = { voteAverage: 2.7, voteCount: 4.546, size: 'lg' };
const somefilm = {
  'name': 'Мстители: Война бесконечности'
}

stories.addWithJSX('FeaturedMovie', () => (
  <Container dark>
    <div>
      <div>
        <LargeText><strong>Сейчас в кино</strong></LargeText>
        <H1>Мстители</H1>
        <div>
          <div>Фантастика Экшн Драма</div>
          <div>133 минуты</div>
        </div>
      </div>
      <div>
        <div>
          <Button btnType="primary" btnSize="big" onClick={action('click')}>Подробнее</Button> 
          <Button btnType="transparent-white" btnSize="small" onClick={action('click')}><Icon icon="heart" />В избранное</Button>
        </div>
        <div><Rating {...propsThreeMd} /></div>
      </div>
    </div>
  </Container>
));
