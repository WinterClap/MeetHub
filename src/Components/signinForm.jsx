import React from "react";
import styled from "styled-components";
import WelcomeBg from "../Assets/welcome.svg";
import { motion } from "framer-motion";
import { Marginer } from "./Marginer/index";
import { ParticlesC } from "./particles";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
export const bg_color_pink = "#F50057";
export const bg_color_dimmedBlack = "#242424";
export const Container = styled.div`
  display: flex;
  flex: 1 0 100%;
  min-height: 100vh;
`;
export const SideColumn = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const ImageBox = styled.div`
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => (props.image ? props.image : "none")});
  @media screen and (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;
export const SigninColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 600px;
  padding: 30px;

  form {
    margin: auto;
    height: 100%;
    width: 100%;
    font-size: 1.2rem;
    font-family: inherit;
  }
  button {
    padding: 8px 22px;
    border-radius: 20px;
    display: block;
    margin: 50px auto 0px auto;
    width: 120px;
    border: none;
    font-size: 1.3rem;
    font-family: inherit;
    font-weight: 500;
    color: #fff;

    background-color: #bb0042;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      margin-top: 40px;
    }
  }
  input::placeholder {
    letter-spacing: normal;
  }
  input {
    margin-top: 15px;
    font-family: inherit;
    height: 30px;
    width: 100%;
    color: inherit;
    font-size: 1.3rem;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    padding: 7px 2px 7px 3px;
    background-color: transparent;
    outline: none;
    &:focus {
      border-bottom: 2px solid #f50057;
    }
    transition: all 200ms ease-in-out;
    &[type="password"] {
      letter-spacing: 5px;
    }

    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    min-height: 200px;
    padding: 10px;
  }
`;
export const SmallText = styled.div`
  color: rgb(216, 216, 216);
  font-size: 1.5rem;
  margin-top: 15px;
  text-align: center;
  a {
    text-decoration: none;
    color: #f50057;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    font-size: 1.3rem;
  }
`;
export const Subtitle = styled.h2`
  color: inherit;
  font-weight: 500;
  font-family: inherit;
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
    font-size: 2.5rem;
  }
`;
export const SigninBox = styled.div`
  position: absolute;
  left: 50%;
  flex: 1 0 100%;
  color: #fff;
  font-family: "Roboto";
  font-weight: 500;
  top: 50%;
  width: 870px;
  height: 660px;
  padding: 20px;
  border-radius: 35px;
  background-color: #100e0e;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 30px rgba(15, 15, 15, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 95vh;
    width: 90%;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) and (min-width: 480px) {
    height: 95vh;
    width: 90%;
  }
`;
export function SignIn() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <Container>
      <SideColumn color={bg_color_pink}>
        <ParticlesC size="500" Top="500" color="#58001f" direction="down" />
        <ParticlesC size="300" Top="300" color="#58001f" direction="down" />
        <ParticlesC size="200" Top="100" color="#58001f" direction="down" />
      </SideColumn>
      <SideColumn color={bg_color_dimmedBlack}>
        <ParticlesC size="200" Top="100" Right="0"></ParticlesC>
        <ParticlesC size="300" Top="500" Right="200" />
        <ParticlesC size="150" Top="500" Right="500" />
      </SideColumn>
      <SigninBox>
        <SigninColumn>
          <Subtitle>
            Welcome <br /> back
          </Subtitle>
          <SmallText> Please, sign in</SmallText>

          {isMobile ? "" : <ImageBox image={WelcomeBg}></ImageBox>}
          <SmallText>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </SmallText>
        </SigninColumn>
        <SigninColumn>
          <form>
            <SmallText> Username</SmallText>
            <input type="text" placeholder="Username" />
            <Marginer direction="vertical" margin={30}></Marginer>
            <SmallText> Password</SmallText>
            <input type="password" placeholder="Password" />
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              whileHover={{
                textShadow: "0px 0px 25px rgba(96,0,34,1)",
                boxShadow: "0px 0px 28px #db004d",
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
            >
              Sign in
            </motion.button>
          </form>
        </SigninColumn>
      </SigninBox>
    </Container>
  );
}
