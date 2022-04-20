import React, { Component } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slick from "react-slick";
import './SliderThumbnails.css';

export default class SliderThumbnails extends Component {

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
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      centerPadding: '0px',
      arrows: true,
    };
    return (
      <div className="slider-wrapper">

        <Slick
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          className="sliderMain"
          {...this.settings}
        >
          {this.props.children}
        </Slick>
        <div className="thumbnail-slider-wrap">
          <Slick
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            {...this.settings}
            centerPadding="10px"
            // variableWidth
            // infinite={false}
            // adaptiveHeight
            slidesToShow={this.props.children.length >= 6 ? 6 : this.props.children.length}
            swipeToSlide={true}
            focusOnSelect={true}
            className="sliderThumbnails"
          >
            {this.props.children}

          </Slick>
        </div>
      </div >
    );
  }
}