//REACT 
import styled, { keyframes } from 'styled-components';

//PAGES
import About from "./About";
import Contact from "./Contact"

//ASSETS
import BackgroundImg from '../assets/images/HomeBackground.png'
import Opacity from '../assets/images/opacity.png'

//REACT ROUTER 
import { Link } from 'react-router-dom';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
`;

 const Section = styled.div`
      height: 100vh;
 `;

 const BackgroundSection = styled.div`
      height: 100vh;
      display: flex;
      background-image: url(${BackgroundImg});
      z-index: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      background-position: center;
 `;

const GlowingMiddle = styled.div`
  width: 1000px; /* Adjust the size as needed */
  height: 750px; /* Adjust the size as needed */
  border-radius: 50%;
  position: absolute;
  background: radial-gradient(circle, rgba(167, 74, 255, 0.8) 0%, transparent 100%);
  animation: ${pulse} 2s infinite;
  z-index: -1; /* Place it above the background image */
`;

const typingAnimation = keyframes`
         from { width: 0 }
         to { width: 100% }
`;

// Keyframes for cursor animation
const blinkCaret = keyframes`
   from, to { border-color: transparent; }
   50% { border-color: rgb(0, 68, 255); }
`;

const Container = styled.div`
   background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
`;


const Text = styled.div`
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
  text-shadow: 0 0 10px rgba(216, 0, 240, 1); /* Text shadow: horizontal-offset vertical-offset blur-radius color */
  font-size: 50px;
  color: #ffffff;

  font-size: 50px;
  overflow: hidden;
  border-right: 0.15em solid rgb(0, 24, 2);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typingAnimation} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
`;

const BreakLine = styled.div`
      margin-left: 25%;
      width: 40%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgba(255, 255, 255, 0.5); /* Color of the separate line */
`;

const SubText = styled.div`
     margin-left: 16%;
     background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
     text-shadow: 0 0 10px rgba(216, 0, 240, 1); /* Text shadow: horizontal-offset vertical-offset blur-radius color */
     font-size: 20px;
`;

const BtnPortfolio = styled.button`
     margin: 10px;
     margin-left: 20%;
     font-size: 25px;
     cursor: pointer;

     background-color: transparent;
     letter-spacing: 3px;
     border-radius: 5px;
     height: 50px;
     width: 175px;

     &:hover {
       background-color: #ffffff;
       color: black;
  }
`;

const BtnContact = styled.button`
     margin: 10px;
     font-size: 25px;
     cursor: pointer;

     background-color: transparent;
     letter-spacing: 3px;
     border-radius: 5px;
     height: 50px;
     width: 175px;

     &:hover {
       background-color: #ffffff;
       color: black;
  }
`;

const Home = () => {

  return (
    <>
    <Section id='Home'>
        <BackgroundSection>
          <GlowingMiddle />
       <Container>
         <Text>
          Welcome to my Portfolio
         </Text>
           <BreakLine/>
            <SubText>
              My name is Louis and I am a fullstack developer
            </SubText>
             <Link to="/Portfolio" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
                <BtnPortfolio>Portfolio</BtnPortfolio>
              </Link>
            <BtnContact>Contact</BtnContact>
       </Container>
       </BackgroundSection>
      </Section>
       {/*ABOUT ME SECTION*/}
   
          <About />
    
        {/*CONTACT SECTION*/}
  
        <Contact />

    </>
  );
};

export default Home;
