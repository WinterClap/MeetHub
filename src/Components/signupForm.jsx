import { ParticlesC } from "./particles";
import {
  bg_color_dimmedBlack,
  bg_color_pink,
  Container,
  ImageBox,
  SideColumn,
  SigninBox,
  SigninColumn,
  SmallText,
  Subtitle,
} from "./signinForm";
import { Link } from "react-router-dom";
import SignUpImg from "../Assets/signupBg.svg";
import { motion } from "framer-motion";
import { Marginer } from "./Marginer/index";
import { useMediaQuery } from "react-responsive";
export function SignUp() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  return (
    <Container>
      <SideColumn color={bg_color_dimmedBlack}>
        <ParticlesC size="200" Top="300" color="#58001f" direction="down" />
        <ParticlesC size="500" Top="500" color="#58001f" direction="down" />
        <ParticlesC size="300" Top="200" color="#58001f" direction="down" />
      </SideColumn>
      <SideColumn color={bg_color_pink}>
        <ParticlesC size="500" Top="200" Right="100" color="#fff" />
        <ParticlesC size="300" Top="500" Right="50" color="#fff" />
        <ParticlesC size="100" Top="100" Right="50" color="#fff" />
        <ParticlesC size="50" Top="100" Right="50" color="#fff" />
        <ParticlesC size="75" Top="100" Right="50" color="#fff" />
      </SideColumn>
      <SigninBox>
        <SigninColumn>
          <Subtitle>
            Create an <br /> account
          </Subtitle>
          <SmallText> Complete the form to create a new account</SmallText>

          {isMobile ? "" : <ImageBox image={SignUpImg}></ImageBox>}
          <SmallText>
            Already have an account? <Link to="/signin">Sign in</Link>
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
              Sign up
            </motion.button>
          </form>
        </SigninColumn>
      </SigninBox>
    </Container>
  );
}
