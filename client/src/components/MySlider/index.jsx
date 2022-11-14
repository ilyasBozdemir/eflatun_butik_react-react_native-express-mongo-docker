import React from "react";
import Slider from "react-slick";
import { Container } from "@chakra-ui/react";
import SliderItem from "./SliderItem";
import { data } from "./data";

function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Container maxW="container.xl">
      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <SliderItem key={item.id} src={item.url} alt={item.alt} />
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default index;
