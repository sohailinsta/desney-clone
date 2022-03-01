import React from 'react';
import styled from 'styled-components';

function Movie() {
  return <Container>
      <h3>Recommended for you</h3>
      <Wrap>
          <img src="/images/movie-icon.svg" />
          <img src="/images/original-icon.svg" />
          <img src="/images/play-icon-black.png" />
          <img src="/images/play-icon-white.png" />
      </Wrap>
  </Container>;
}

export default Movie;

const Container = styled.div`

`

const Wrap = styled.div`
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img{
    height: 200px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    margin-left: 75px; 
    cursor: pointer;
    border-radius: 10px;

    &:hover{
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
`