//REACT 
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import  Link  from 'react-scroll';

//PAGES
import About from "./About";
import Contact from "./Contact"

//ASSETS
import BackgroundImg from '../assets/images/HomeBackground.png'


 const Section = styled.div`
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
 `;

 const Background = styled.div`
      display: flex;
      background-image: url(${BackgroundImg});
      background-position: center;
 `;


const typingAnimation = keyframes`
         from { width: 0 }
         to { width: 100% }
`;

const blinkCaretAnimation = keyframes`
  from, to { border-color: transparent }
  50% { border-color: rgb(0, 68, 255); }
`;

const Container = styled.div`
  margin-top: 5%;
  display: flex;
`;

const Text = styled.div`
  font-size: 50px;
  white-space: nowrap;
  display: flex;
  overflow: hidden;
  border-right: .15em solid rgb(0, 24, 2);
  animation: ${typingAnimation} 3.5s steps(40, end),
             ${blinkCaretAnimation} 0.75s step-end infinite;
`;

const SubText = styled.div`
   font-size: large;
`;



const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500); // Adjust the delay to match the cursor animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Section id='home'>
    <Container>
       <Background>
       <div>
         <Text>
          {showText ? 'Welcome to my website' : ''}
         </Text>
        <SubText>
          My name is Louis and I am a fullstack developer
        </SubText>
       </div>
       </Background>
      </Container>
      </Section>
        <Section>
          <About />
        </Section>
      <Section>
        <Contact />
      </Section>
    </>
  );
};

export default Home;
