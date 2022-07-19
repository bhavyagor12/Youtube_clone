import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { AiOutlineHome,AiOutlineSearch } from 'react-icons/ai';
import {MdSubscriptions,MdOutlineVideoLibrary,MdHistory,MdOutlineLibraryMusic,MdSportsSoccer,MdSportsEsports,MdOutlineLocalMovies,MdOutlineLiveTv, MdOutlineReport, MdHelpOutline, MdOutlineAccountCircle} from 'react-icons/md';
import {IoMdSettings} from "react-icons/io"
import {SiGooglenews} from 'react-icons/si';
import {VscColorMode} from 'react-icons/vsc'
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  background-color:${({theme}) => theme.bg};
  height: 100vh;
  color:${({theme}) => theme.text};
  font-size:14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 font-weight:bold;
 margin-bottom: 25px;
 
`;
const Item = styled.div`
display: flex;
align-items: center;
cursor: pointer;
gap: 20px;
padding: 7.5px 0;

&:hover{
  background-color: ${({theme}) => theme.soft}
}
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`
const Img = styled.img`
height: 25px;
`;

const Login = styled.div`
  
`
const Button = styled.button`
display: flex;
align-items: center;
gap: 5px;
  padding:5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius:3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`
const Menu = ({darkMode,setDarkMode}) => {
  return <Container>
    <Wrapper>
    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
    <Logo >
      <Img src={logo}/>
      YTUBE
    </Logo>
    </Link>
    <Item>
      <AiOutlineHome/>
      Home
    </Item>
    <Item>
      <AiOutlineSearch/>
      Explore
    </Item>
    <Item>
      <MdSubscriptions/>
      Subscriptions
    </Item>
    <Hr />
    <Item>
      <MdOutlineVideoLibrary/>
      Library
    </Item>
    <Item>
      <MdHistory/>
      History
    </Item>
    <Hr />
    <Login>
     Sign in to like videos,comment and subscribe
     <Link to="signin" style={{textDecoration:"none"}}><Button><MdOutlineAccountCircle/>Sign in</Button></Link>
    </Login>
    <Hr />
    <Item>
      <MdOutlineLibraryMusic/>
      Music
    </Item>
    <Item>
      <MdSportsSoccer/>
      Sports
    </Item>
    <Item>
      <MdSportsEsports/>
      Gaming
    </Item>
    <Item>
      <MdOutlineLocalMovies/>
      Movies
    </Item>
    <Item>
      <SiGooglenews/>
      News
    </Item>
    <Item>
      <MdOutlineLiveTv/>
     Live
    </Item>
    <Hr />
    <Item>
      <IoMdSettings/>
     Settings
    </Item>
    <Item>
      <MdOutlineReport/>
     Report
    </Item>
    <Item>
      <MdHelpOutline/>
    Help
    </Item>
    <Item onClick={() =>setDarkMode(!darkMode)}>
      <VscColorMode/>
   {darkMode ? "Light" : "Dark"}
    </Item>
    
    </Wrapper></Container>;
};

export default Menu;
