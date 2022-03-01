import React from 'react';
import styled from 'styled-components'
function Header() {
  return <Nav>
      <Logo src="/images/logo.svg"/>
      <NavMenu>
          <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
          </a>
          <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
          </a>
          <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
          </a>
          <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
          </a>
          <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
          </a>
          <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
          </a>
      </NavMenu>
      <UserImg src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg"/>
  </Nav>;
}

export default Header;

const Nav = styled.nav`
height: 70px;
background: black;
display: flex;
align-items: center;
`
const Logo = styled.img`
width: 80px;
cursor: pointer;
`
const NavMenu = styled.div`
color: white;
display: flex;
flex: 1;
margin-left: 270px; 

a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img{
        height: 20px;
    }

    span{
        font-size: 13px;
        letter-spacing: 1.42px;
        

    &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        top: 0;
        left: 0;
        rght: 0;
        bottom: -6px;
    }
  } 
}
` 
const UserImg = styled.img`
height: 50px;
border-radius: 50%;
display: flex;
cursor: pointer;
`