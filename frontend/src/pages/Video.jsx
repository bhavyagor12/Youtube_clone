import React from 'react'
import styled from 'styled-components'
import {VscThumbsdown,VscThumbsup,VscLiveShare,VscSave} from "react-icons/vsc";
import Comments from "../components/Comments"
import Card from '../components/Card';
const Container = styled.div`
 display: flex;
 gap:24px;

`;
const Content = styled.div`
flex:5;`;
const VideoWrapper = styled.div`


`;
const Title = styled.h1`
font-size:18px;
font-weight:400 ;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: ${({ theme }) => theme.textSoft};

`;
const Info = styled.span`


`;
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text}


`;
const Button = styled.button`
display: flex;
align-items: center;
gap:2px;
cursor: pointer;
border:none;
`;
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5 px solid ${({theme }) => theme.soft};
`
const Recommendation = styled.div`flex:2;`;
const Channel = styled.div`
 display: flex;
 justify-content: space-between;

`;
const ChannelInfo = styled.div`
display: flex;
gap: 20px;

`;
const Image = styled.img`
height:50px;
width:50px;
border-radius: 50%;
`;
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({theme }) => theme.text}
`;
const ChannelName = styled.span`
font-weight: 500;

`;
const ChannelCounter = styled.div`
margin-top:5px;
margin-bottom: 20px;
color: ${({theme }) => theme.textSoft};
font-size:12px;
`;
const Description = styled.p`
font-size:14px;
`;
const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color:white;
border:none;

border-radius:3px;
height:max-content;
padding:10px;
cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      
     <Content>
       <VideoWrapper>
         <iframe width="100%" height="720" title="CP" frameborder="0" allowfullscreen allow="autoplay;"src="https://www.youtube.com/72df2c1a-5d11-4681-99ad-35301fe0d41b" />
       </VideoWrapper>
       <Title>
         Test video
       </Title>
       <Details>
         <Info>698k views • 1 day ago</Info>
         <Buttons>
           <Button><VscThumbsup/>123</Button>
           <Button><VscThumbsdown/>456</Button>
           <Button><VscLiveShare/>Share</Button>
           <Button><VscSave/>Save</Button>
         </Buttons>
       </Details>
       <Hr/>
       <Channel>
       <ChannelInfo>
       <Image src="https://yt3.ggpht.com/Qvy3LrbqlBve3OrtJHHCK9cXyBgTA5weV-vJ04Cy_gY9nLHISmM0gDGBhhGU1AmPFilKa33WeA=s176-c-k-c0x00ffffff-no-rj" alt="" />
       <ChannelDetail>
       <ChannelName>TENz</ChannelName>
       <ChannelCounter>200k Subscribers</ChannelCounter>
       <Description>Hi there I am a Competitive Valorant ESPORTS Player for SEN</Description>
       </ChannelDetail>
       </ChannelInfo>
       <Subscribe>Subscribe</Subscribe>
       </Channel>
       <Hr/>
       <Comments  />
     </Content>
     <Recommendation>
     
     <Card type="small"/>
     <Card type="small"/>
     <Card type="small"/>
     </Recommendation>
      
      </Container>
  )
}

export default Video