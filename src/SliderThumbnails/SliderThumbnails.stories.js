import React from 'react';
import { storiesOf } from '@storybook/react';
import SliderThumbnails from './SliderThumbnails';

const sliderData = [
  {
    url:
      'https://m.media-amazon.com/images/I/81uNsxGJKLL._AC_UL320_.jpg',
  },
  {
    url:
      'https://m.media-amazon.com/images/I/815CEJI4NAL._AC_UL320_.jpg',
  },
  {
    url: 'https://m.media-amazon.com/images/I/71mK39EePwL._SX466_.jpg',
  },
  {
    url:
      'https://m.media-amazon.com/images/I/816ZArfjolL._AC_SX375_.jpg',
  },
  {
    url:
      'https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL320_.jpg',
  },
  {
    url:
      'https://m.media-amazon.com/images/I/81VWbVjvJqL._AC_UL320_.jpg',
  },
  {
    url:
      'https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL320_.jpg',
  },
  {
    url:
      'https://m.media-amazon.com/images/S/abs-image-upload-na/9/AmazonStores/ATVPDKIKX0DER/501d204ab74ad1800fbde6b7f4fe9da1.w1800.h1301._CR554%2C157%2C1033%2C1033_SX750_SY750_.jpg',
  },
]

storiesOf('SliderThumbnails', module)
  .add('default', () => {
    return (
      <>
        <SliderThumbnails>
          {sliderData.map(each => {
            return <div className='slider'>
              <img src={each.url} alt="img 1" />
            </div>
          })}
        </SliderThumbnails>

      </>
    );
  });
