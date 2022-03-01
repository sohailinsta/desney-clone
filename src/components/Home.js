import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movie from './Movie';
import Viewers from './Viewers';
function Home() {
  return (
  <Container>
      <ImgSlider/>
      <Viewers/>
      <Movie/>
  </Container>
  )
}

export default Home;

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
background: #040714;
color: white;
background: url("/images/Home-background.png") center center / cover no-repeat fixed;
`
 