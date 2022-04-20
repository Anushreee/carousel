import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleSlider from './SimpleSlider';



storiesOf('Simple Slider', module)
  .add('default', () => {
    return (

      <SimpleSlider />



    );
  });
