import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
const Span = styled(motion.span)`
  border-radius: 50%;
  position: absolute;
  z-index: 0;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color || "white"};
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
`;
export function ParticlesC(props) {
  return (
    <Span
      color={props.color}
      size={props.size}
      top={props.Top}
      right={props.Right}
      drag={true}
      dragConstraints={{ left: -200, right: 200, bottom: 200, top: -200 }}
      initial={{
        x: props.Right,
        y: props.Top,
      }}
      animate={{
        x: Math.floor(Math.random() * -300 + 500),
        y: Math.floor(Math.random() * 300 - (props.direction === "down" ? -500 : 500)),
      }}
      transition={{
        duration: 2,
      }}
      whileHover={{ scale: 1.1, transition: 0.1 }}
      whileTap={{ scale: 0.85, transition: 0.1 }}
    ></Span>
  );
}
