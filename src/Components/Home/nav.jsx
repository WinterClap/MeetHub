import React from "react";
import Logo from "../../Assets/MeetHubWhite.svg";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Container = styled.nav`
  box-shadow: 0 10px 20px rgba(15, 15, 15, 0.5);
  background-color: #100e0e;
  display: flex;
  flex: 1 0 100%;
  position: relative;
  z-index: 5;
  justify-content: space-around;
  align-items: center;
  padding: 5px 50px;
  height: 100px;
  border-radius: 50px;
  margin: 20px 5px 20px 5px;
  img {
    width: 185px;
    height: 100px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #e7e7f5;
    padding: 10px 10px;
    font-size: 1.2rem;
    margin-left: 15px;
    &:active {
      color: #f50057;
    }
    &:hover {
      color: rgba(255, 255, 255, 0.75);
    }
    transition: all 200ms ease-in-out;
  }
`;
const LinksContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    &:nth-child(1) {
      color: #e7e7f5;
      border-radius: 15px;
      box-shadow: 0 10px 15px rgba(245, 0, 87, 0.5);
      background-color: #f50057;
      margin: 0;
    }
  }
`;
const SignBox = styled.div`
  box-shadow: 0 10px 15px ${(props) => props.boxShadow};
  padding: 15px 30px;
  background-color: ${(props) => props.bgColor};
  border-radius: 15px;
  font-size: 1.3rem;
  border: none;

  font-weight: 600;
  cursor: pointer;
  a {
    color: ${(props) => (props.textColor ? props.textColor : "#e7e7f5")};
    margin: 0;
    &:hover {
      color: rgba(${(props) => (props.textColor ? "15,15,15,0.8" : "255, 255, 255, 0.75")});
    }
  }
`;

const SignContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  &:nth-child(2) {
    margin-left: 15px;
  }
  width: 320px;
`;
export const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <LinksContainer>
        <Link to="/">Start</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </LinksContainer>
      <SignContainer>
        <SignBox bgColor="#f50057" boxShadow="rgba(245, 0, 87, 0.5)">
          <Link to="/signin"> Sign in</Link>
        </SignBox>
        <SignBox bgColor="#e7e7f5" boxShadow="rgba(231,231,245,0.5)" textColor="#242424">
          <Link to="/signup"> Sign up</Link>
        </SignBox>
      </SignContainer>
    </Container>
  );
};
