import React from 'react'

import { MdOutlineAccountCircle,MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div `
  position: sticky;
  top: 0;
  background: ${({theme}) => theme.bgLight};
  height: 56px;
`;
const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  margin:auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #cccccc;
  border-radius:3px;
`;
const Input = styled.input `
  border: none;
  background-color:transparent;
  width: 100%;
  outline: none;
  color:${({theme}) => theme.text};
`;
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
  cursor: pointer;
  
`
const Icon = styled.div`
color:${({theme}) => theme.text};
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search >
          <Input placeholder="Search" />
          <Icon><MdSearch/></Icon>
        </Search>
        <Link to="signin" style={{textDecoration:"none"}}><Button><MdOutlineAccountCircle/>Sign in</Button></Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar