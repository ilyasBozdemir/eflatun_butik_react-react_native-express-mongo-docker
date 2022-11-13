import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "@chakra-ui/react";
import SliderItem from "./SliderItem";

export default class index extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    };

    return (
      <Container maxW='container.xl' >
        <div>
          <Slider {...settings}>
     
            <SliderItem
              src={
                "https://via.placeholder.com/1170x300/eb9534/FFFFFF?text=place+holder+image"
              }
              alt={"text slider image"}
            />
            <SliderItem
              src={
                "https://via.placeholder.com/1170x300/ce3456/FFFFFF?text=place+holder+image"
              }
              alt={"text slider image"}
            />
          </Slider>
        </div>
      </Container>
    );
  }
}
