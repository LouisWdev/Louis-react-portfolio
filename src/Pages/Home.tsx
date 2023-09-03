//REACT 
import {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';

//PAGES
import About from "./About";
import Contact from "./Contact"

//ASSETS
import BackgroundImg from '../assets/images/HomeBackground.png'


 const BackgroundSection = styled.div`
      height: 100vh;
      display: flex;
      background-image: url(${BackgroundImg}); 
      justify-content: center;
      align-items: center;
      display: flex;
      background-position: center;

      &::before {
        content: "";
        position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    opacity: 0.5; /* Change the opacity value (0.7) as needed */
  }
 `;

 const Section = styled.div`
      height: 100vh;
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
   margin-left: 15%;
   background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
   font-size: large;
`;

const BtnPortfolio = styled.button`
     margin: 10px;
     margin-left: 18%;
     font-size: 25px;
     cursor: pointer;

     background-color: transparent;
     letter-spacing: 3px;
     border-radius: 5px;
     height: 50px;
     width: 175px;
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
    <Section>
    <BackgroundSection id='home'>
       <Container>
         <Text>
          Welcome to my Portfolio
         </Text>
           <BreakLine/>
            <SubText>
              My name is Louis and I am a fullstack developer
            </SubText>
            <BtnPortfolio>Portfolio</BtnPortfolio>
            <BtnContact>Contact</BtnContact>
       </Container>
      </BackgroundSection>
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
