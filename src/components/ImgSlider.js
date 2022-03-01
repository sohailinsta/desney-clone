import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import slider from 'react-slick/lib/slider';

function ImgSlider() {
  return (
   <Carousel>
       <Wrap>
          <img src="/images/slider-badging.jpg" alt="" />
          </Wrap>
          <Wrap>
          <img src="/images/slider-badag.jpg" alt="" />
          </Wrap>
  </Carousel>
  )
}

export default ImgSlider;

const Carousel = styled(Slider)`

`
const Wrap = styled.div`
img{
    cursor: pointer;
    border: 4px solid transparent;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    box-shadow: rgb (0 0 0 / 69%) 0px 26px 30px -10px,
    rgb (0 0 0 / 73%) 0px 16px 10px -10px;
    

    &:hover {
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
`
