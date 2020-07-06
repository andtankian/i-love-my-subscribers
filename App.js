import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import heart from "./heart.svg";
import youtube from "./youtube.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import github from "./github.svg";

const zoomIn = {
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.6,
      ease: [0, 1.1, 0.19, 1.02],
    },
  },
  initial: {
    scale: 0,
    opacity: 0,
  },
};

const slideUp = {
  animate: {
    y: 0,
    opacity: 1,
  },
  initial: {
    y: "100%",
    opacity: 0,
  },
  exit: {
    y: "100%",
    opacity: 0,
  },
};

const fade = {
  animate: {
    opacity: 0.1,
  },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

function App() {
  const [contact, setContact] = useState(false);
  return (
    <Container>
      <Reset />
      <Message initial="initial" animate="animate" variants={zoomIn}>
        Eu{" "}
        <Heart
          src={heart}
          alt="Coração em svg"
          whileTap={{ scale: 0.9 }}
          onTap={() => setContact(!contact)}
        />{" "}
        vocês.
      </Message>
      <AnimatePresence exitBeforeEnter>
        {contact && <Contact onClose={() => setContact(!contact)} />}
      </AnimatePresence>
    </Container>
  );
}

function Contact({ onClose }) {
  return (
    <Transparent
      onTap={onClose}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        animate: {
          backgroundColor: "rgba(234, 60, 60, 0.2)",
          transition: {
            staggerChildren: 0.2,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <InfoContainer>
        <Info
          variants={slideUp}
          href="https://github.com/andtankian/"
          target="tab"
        >
          <Icon src={github} />
          @andtankian
        </Info>
        <Info
          variants={slideUp}
          href="https://www.youtube.com/channel/UCn3cvX-lGZT2CPgyIUIPOjw"
          target="tab"
        >
          <Icon src={youtube} />
          Andrew Ribeiro
        </Info>
        <Info
          variants={slideUp}
          href="https://facebook.com/andtankian"
          target="tab"
        >
          <Icon src={facebook} />
          @andtankian
        </Info>
        <Info
          variants={slideUp}
          href="https://www.instagram.com/andrewribeirodev/"
          target="tab"
        >
          <Icon src={instagram} />
          @andrewribeirodev
        </Info>
      </InfoContainer>
    </Transparent>
  );
}

const Reset = createGlobalStyle`
    html,body {
        padding: 0;
        margin: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: rgb(100,100,100);
        * {
            box-sizing: border-box;
        }
    }
`;

const Transparent = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Message = styled(motion.h1)`
  margin: 0;
  text-align: center;
  flex: 1;
  height: 100%;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heart = styled(motion.img)`
  width: 100px;
  margin: 0 15px;
`;

const Icon = styled(motion.img)`
  width: 40px;
  margin: 0 15px;
`;

const Info = styled(motion.a)`
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: black;
  text-decoration: none;
`;

const InfoContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 10%;
  display: flex;
  justify-content: space-around;
`;

export default App;
