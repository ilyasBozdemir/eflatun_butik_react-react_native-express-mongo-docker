import React, { Component } from "react";
import Slider from "react-slick";
import { Stack } from "@chakra-ui/react";
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
    };
    return (
      <Stack>
        <div className="container mx-auto">
          <Slider {...settings}>
            <div>
              <img
                src="https://via.placeholder.com/1170x300/eb9534/808080?text=eflatunbutik.com+1"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1170x300/4287f5/808080?text=eflatunbutik.com+2"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1170x300/e01458/808080?text=eflatunbutik.com+3"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1170x300/deed0c/808080?text=eflatunbutik.com+4"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </Stack>
    );
  }
}
