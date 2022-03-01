import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from 'react-slick/lib/slider';
function Viewers() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
  <Carousel {...settings}>
    <Wrap>
          <img src="/images/viewers-disney.png" alt="" />
          <img src="/images/viewers-marvel.png" alt="" />
          <img src="/images/viewers-national.png" alt="" />
          <img src="/images/viewers-pixar.png" alt="" />
          <img src="/images/viewers-starwars.png" alt="" />
          </Wrap>
            </Carousel>
  )
};

export default Viewers;

const Carousel = styled.div`
`
const Wrap = styled.div`
img{
  border: 3px solid rgba(249, 249, 249, 0.1);
  height: 150px;
  width: 150px;
  margin: 25px 45px;
  cursor: pointer;
  
  &:hover{
    border: 4px solid white;
  }
}
`