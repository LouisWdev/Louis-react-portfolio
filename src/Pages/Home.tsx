//REACT 
import styled, { keyframes } from 'styled-components';

//COMPONENT
import Navbar from '../components/Navbar';

//ASSETS
import BackgroundImg from '../assets/images/HomeBackgroundEdited.png'

//REACT ROUTER 
import { Link } from 'react-router-dom';

 const BackgroundSection = styled.div`
      height: 100vh;
      display: flex;
      background-image: url(${BackgroundImg});
      z-index: -1;
      justify-content: center;
      align-items: center;
      display: flex;
      background-position: center;
      opacity: 100%;
 `;

 const BackgroundAnimation = styled.div`
     max-width: 100%;
     height: auto;
     display: block;
     border-radius: 10px; /* Optional: add border-radius for a rounded image */
     box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2); /* Adjust the values for the glow effect */
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
  margin-top: 10px;

  font-size: 50px;
  overflow: hidden;
  border-right: 0.15em solid rgb(0, 24, 2);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typingAnimation} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
  z-index: 1;
`;

const BreakLine = styled.div`
      margin-left: 14%;
      width: 60%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgba(0, 0, 0, 0.5); /* Color of the separate line */
      z-index: 1;
`;

const SubText = styled.div`
     margin-left: 16%;
     background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
     text-shadow: 0 0 10px rgba(216, 0, 240, 1); /* Text shadow: horizontal-offset vertical-offset blur-radius color */
     z-index: 1;
     font-size: 20px;
     font-weight: 700;
`;

const BtnPortfolio = styled.button`
     font-weight: bolder;
     margin: 10px;
     margin-left: 20%;
     font-size: 25px;
     cursor: pointer;

     color: black;
     background-color: #6846ff;
     border: 3px solid black;
     letter-spacing: 3px;
     border-radius: 5px;
     height: 50px;
     width: 175px;

     transition: background-color 2s;
     transition: color 2s;

     &:hover {
       background-color: black;
       color: white;
  }
`;

const BtnContact = styled.button`
     font-weight: bolder;
     margin: 10px;
     font-size: 25px;
     cursor: pointer;
     color: black;
     background-color: #6846ff;
     border: 3px solid black;

     letter-spacing: 3px;
     border-radius: 5px;
     height: 50px;
     width: 175px;

     transition: background-color 2s;
     transition: color 2s;

     &:hover {
       background-color: black;
       color: white;
  }
`;

const Home = () => {

  return (
    <>
        <Navbar />
        <BackgroundAnimation>
        <BackgroundSection>
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
             <Link to="Contact" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
                <BtnContact>Contact</BtnContact>
            </Link> 
          </Container>
         </BackgroundSection>
         </BackgroundAnimation>
    </>
  );
};

export default Home;
