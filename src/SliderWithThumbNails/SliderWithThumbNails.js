import React, { Component } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SliderWithThumbNails.css';

export default class SliderWithThumbNails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          className="slider2"
        >
          <div>
            <img src='https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/81uo7-al5qL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/81VWbVjvJqL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <h3>6</h3>
          </div>
          {/*<div>
            <img src='https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/81uo7-al5qL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/81VWbVjvJqL._AC_UL320_.jpg' alt="" />
          </div> */}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider3"
        >

          <div>
            <img src='https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/81uo7-al5qL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/81VWbVjvJqL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <h3>6</h3>
          </div>
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
          {/* <div>
            <img src='https://m.media-amazon.com/images/I/61K6cQhw4EL._AC_UL320_.jpg' alt="" />
          </div>
          <div>

            <img src='https://m.media-amazon.com/images/I/81uo7-al5qL._AC_UL320_.jpg' alt="" />

          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/819Zt6VqJYL._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/61S7BrCBj7L._AC_UL320_.jpg' alt="" />
          </div>
          <div>
            <img src='https://m.media-amazon.com/images/I/81VWbVjvJqL._AC_UL320_.jpg' alt="" />
          </div> */}


        </Slider>

      </div >
    );
  }
}