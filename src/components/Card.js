import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: ${(props) => props.type !== "small" && "360px"};
  margin-bottom: ${(props) => (props.type === "small" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "small" && "flex"};
  gap: 10px;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "small" && "16px"};
  gap: 12px;
  flex: 1;
`;
const Image = styled.img`
  height: ${(props) => (props.type === "small" ? "120px" : "202px")};
  background-color: #999;
  ${(props) => (props.type === "small" ? "10px" : "45px")}
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36xpx;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "small" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://i.ytimg.com/vi/f_6xYgf6K3E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClWVh1IXuagrDfl6v_E9_B2L5-rA"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/Qvy3LrbqlBve3OrtJHHCK9cXyBgTA5weV-vJ04Cy_gY9nLHISmM0gDGBhhGU1AmPFilKa33WeA=s176-c-k-c0x00ffffff-no-rj"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Tenz</ChannelName>
            <Info>698k views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
