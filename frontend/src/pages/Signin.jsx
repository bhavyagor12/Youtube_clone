import axios from 'axios';
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import {useDispatch} from 'react-redux';
import {loginFailure,loginSuccess,loginStart} from '../redux/userSlice'
const Container = styled.div `
display: flex;
flex-direction: column;
height:calc(100vh - 56px);
align-items: center;
justify-content: center;
color: ${({theme}) => theme.text}
`;
const Wrapper = styled.div `
display: flex;
align-items: center;
flex-direction:column;
background-color: ${({theme}) => theme.bglight};
padding:20px 50px;
border:1px solid ${({theme}) => theme.soft};
gap: 10px;
`;

const Title = styled.h1`
font-size: 24px;
`;

const SubTitle = styled.h2`
font-style: 20px;
font-weight: 300;

`;
const Input = styled.input`
border:1px solid ${({theme}) => theme.soft};
border-radius:3px;
background-color: transparent;
padding:10px;
outline:none;
color: ${({theme}) => theme.text}
`;
const Button = styled.button`
border-radius: 3px;
border:none;
padding:10px 20px;
font-weight: 500;
cursor:pointer;
background-color: ${({theme}) => theme.soft};
color: ${({theme}) => theme.textSoft};
`;
const More = styled.div`
display: flex;
font-size: 10px;
color: ${({theme}) => theme.textSoft};
margin-top: 10px;
`;
const Link = styled.div`
margin-left:50px;

`;
const Links = styled.span`
display: flex;
margin-left:30px;`;
const Signin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  /* const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", { name,email, password });
      console.log(res.data);
    } catch (err) {

    }
  }; */

  return (
    <Container><Wrapper><Title>Signin</Title>
    <SubTitle>To continue to YTUBE</SubTitle>
    <Input placeholder="username" onChange={e => setName(e.target.value)} />
    <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
    <Button onClick={handleLogin}>Sign in</Button>
    <Title>or</Title>
    <Input placeholder="username" onChange={e => setName(e.target.value)} />
    <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
    <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
    <Button>Sign up</Button>
  
    </Wrapper>
    <More>
    English(USA)
    <Links>
    <Link>Help</Link>
    <Link>Privacy</Link>
    <Link>Terms</Link>
    </Links>
    </More>
    </Container>
  )
}

export default Signin