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
 `;

 const Section = styled.div`
      height: 100vh;
 `;


const typingAnimation = keyframes`
         from { width: 0 }
         to { width: 100% }
`;

const blinkCaretAnimation = keyframes`
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
`;


const Text = styled.div`
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
  text-shadow: 0 0 10px rgba(216, 0, 205, 0.5); /* Adjust the color and size for the glow effect */
  font-size: 50px;
  color: #ffffff;
  opacity: 100%;
  white-space: nowrap;
  display: flex;
  overflow: hidden;
  border-right: .15em solid rgb(170, 22, 255);
  animation: ${typingAnimation} 3.5s steps(40, end),
             ${blinkCaretAnimation} 0.75s step-end infinite;
  
`;

const BreakLine = styled.div`
      margin-left: 25%;
      width: 50%;
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
     border-radius: 5px;
     height: 50px;
     width: 175px;
`;

const BtnContact = styled.button`
     margin: 10px;
     font-size: 25px;
     cursor: pointer;

     background-color: transparent;
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
          {showText ? 'Welcome to my Portfolio' : ''}
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
