import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/chat_f50057.svg";

const Container = styled.div`
  position: absolute;
  font-size: 5rem;

  font-weight: 600;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
`;

const ImageBox = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  img {
    width: 300px;
    height: 300px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(-80%, -80%);
`;

const HeaderText = styled.h1`
  font-size: 10rem;
  font-family: "Alatsi", sans-serif;
  font-weight: 800;
  text-shadow: 0 10px 20px rgba(255, 255, 255, 0.5);

  color: #e7e7f5;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div`
  width: 630px;
  text-align: center;
  color: #f50057;
  font-size: 3rem;
  font-family: "Caveat", sans-serif;
  line-height: 0.2;
  text-shadow: 0 5px 10px rgba(245, 0, 87, 0.8);
`;
export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <ImageBox>
          <img src={Logo} alt="chat-icon" />
        </ImageBox>
        <Column>
          <HeaderText>MeetHub</HeaderText>
          <Banner>Discover · Meet · Talk · Share </Banner>
        </Column>
      </HeaderContainer>
    </Container>
  );
};
