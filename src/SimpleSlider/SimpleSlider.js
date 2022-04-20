import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SimpleSlider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slider"
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src='https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL320_.jpg' width='100%' alt="" />
          </div>
          <div>
            <h3>
              <img src='https://m.media-amazon.com/images/I/81uo7-al5qL._AC_UL320_.jpg' width='100%' alt="" />
            </h3>
          </div>
          <div>
            <h3> <img src='https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL320_.jpg' width='100%' alt="" /></h3>
          </div>
          <div>
            <h3> <img src='https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL320_.jpg' width='100%' alt="" /></h3>
          </div>
          <div>
            <h3> <img src='https://m.media-amazon.com/images/I/81VWbVjvJqL._AC_UL320_.jpg' width='100%' alt="" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}