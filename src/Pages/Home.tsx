import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const HeroSection = styled.div`
     display: flex;
`;

const WelcomeTitle = styled.h1`
     font-size: 50px;
     margin-left: 20%;
     margin-top: 10%;
     font-family: 'Space Mono', monospace;
     color: white;
     padding: 0rem clamp(1rem, 2vw, 3rem);
     border-radius: clamp(0.4rem, 0.75vw, 1rem);
`;



const Home = () => {

  return (
   <HeroSection>
         <WelcomeTitle>Welcome to my website</WelcomeTitle>    
    </HeroSection>
  )
}

export default Home