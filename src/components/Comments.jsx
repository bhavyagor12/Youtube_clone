import React from 'react'
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div ``;

const NewComment = styled.div `
display: flex;
align-items: center;
gap: 5px;
`;
const Avatar = styled.img `
height:50px;
width:50px;
border-radius: 50%;`;
const Input = styled.input `
border:none;
border-bottom: 1px solid ${({theme})=> theme.soft};
background-color: transparent ;
width: 100%;
outline: none;
padding:5px;
color: ${({theme}) => theme.text}


`;
const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://yt3.ggpht.com/Qvy3LrbqlBve3OrtJHHCK9cXyBgTA5weV-vJ04Cy_gY9nLHISmM0gDGBhhGU1AmPFilKa33WeA=s176-c-k-c0x00ffffff-no-rj"/>
            <Input placeholder="Add a comment" />
        </NewComment>
        <Comment/>
    </Container>
  )
}

export default Comments