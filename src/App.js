import './App.css';
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import SliderThumbnails from './SliderThumbnails/SliderThumbnails';

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


function App() {
  return (
    <div className="App">
      <SliderThumbnails>
          {sliderData.map(each => {
            return <div className='slider'>
              <img src={each.url} alt="img 1" />
            </div>
          })}
        </SliderThumbnails>
    </div>
  );
}

export default App;