import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.div`
     height: 100vh
     scroll-snap-align: center;
`;

const HeroSection = styled.div`
     display: flex;
     display: block;
`;

const WelcomeTitle = styled.h1`
     font-size: 65px;
     margin-left: 20%;
     margin-top: 14%;
     font-family: 'Space Mono', monospace;
     color: white;
     padding: 0rem clamp(1rem, 2vw, 3rem);
     border-radius: clamp(0.4rem, 0.75vw, 1rem);
`;

const TitleSubText = styled.div`
    margin-left: 25%;
    font-size: large;
`;

// Define the breathing animation
const breathingAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

// Styled component with the breathing animation
const BackgroundContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BreathingSection = styled.section`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, transparent 80%);
  border-radius: 50%;
  margin-top: 30%;
  left: -1;
  margin-right: 100%;
  animation: ${breathingAnimation} 4s infinite;
`;



const Home = () => {

  return (
     <Section>
         <HeroSection>
            <BackgroundContainer>
                <BreathingSection></BreathingSection>
            </BackgroundContainer>
             <WelcomeTitle>Welcome to my website</WelcomeTitle>    
             <TitleSubText>My name is Louis and I am a fullstack developer</TitleSubText>
            
         </HeroSection>
     </Section>
  
  )
}

export default Home