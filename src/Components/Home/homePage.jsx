import { Nav } from "./nav";
import styled from "styled-components";
import { Header } from "./header";
import BgDark from "../../Assets/BlackBG.png";

const Container = styled.section`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${BgDark});
  background-color: #242424;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 0;
`;

const Curve1 = styled.div`
  height: ${(props) => props.height || "250"}px;
  overflow: hidden;
  position: absolute;
  backdrop-filter: blur(5px);
  width: 100%;
  bottom: ${(props) => props.bottom || null}px;
  z-index: 1;
  transform: rotate(${(props) => props.degs || "180"}deg);
  transform: scaleX(${(props) => (props.flip ? "-1" : "null")});
  svg {
    height: 100%;
    width: 100%;
    path {
      stroke: none;
      fill: rgba(15, 15, 15, 0.5);
    }
  }
`;
export function Home() {
  return (
    <Container>
      <Header></Header>
      <Curve1>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </Curve1>
      <Nav></Nav>
      <Curve1 height="150" bottom="0" degs="0" flip>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </Curve1>
    </Container>
  );
}
