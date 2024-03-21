//REACT 
import styled, { keyframes } from 'styled-components';

//COMPONENT
import Navbar from '../components/Navbar';

//ASSETS
import BackgroundImg from '../assets/images/HomeBackgroundEdited.png'


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
            <SubText>
              My name is Louis and I am a fullstack developer
            </SubText>
          </Container>
         </BackgroundSection>
         </BackgroundAnimation>
              <CurrentContainer>
                  <CurrentContainerTitle>Current Projects</CurrentContainerTitle>
                  <ItemContainer>
                  <Item>
                       <ItemText>Portfolio</ItemText>
                       <ProjectImage>
                       </ProjectImage>
                  </Item>
                  <Item>
                       <ItemText>Crypto app</ItemText>
                       <ProjectImage>
                       </ProjectImage>
                  </Item>
                  <Item>
                       <ItemText>Neural Network</ItemText>
                       <ProjectImage>
                       </ProjectImage>
                  </Item>
                  </ItemContainer>
              </CurrentContainer>
          <Section>
              
         </Section>
    </>
  );
};

export default Home;

//STYLING CSS
/* GENERAL STYLINGS */
const Section = styled.div`
    height: 90vh;
    background-color: #001da0;
`;

/* PROJECTS BEING WORKED ON */
const CurrentContainer = styled.div`
    text-align: center;
    margin-top: 4vh;
`;

const CurrentContainerTitle = styled.div`
    padding-bottom: 3vh;
    font-size: 1.5vw
`;

const ItemContainer = styled.div`
    display: flex; 
    margin-top: 1vh;
    margin-left: 7vw;
    padding-bottom: 8vh; 
`;

const Item = styled.div`
    font-size: 1.5vw;
    margin-left: 3vh;
`;

const ItemText = styled.div`
     font-weight: 400;
     margin-bottom: 1vh;
`;

const ProjectImage = styled.div`
     background-color: white;
     width: 500px;
     height: 250px;
`;


/* LANDING SECTION */
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
 
 const SubText = styled.div`
      margin-left: 16%;
      background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
      text-shadow: 0 0 10px rgba(216, 0, 240, 1); /* Text shadow: horizontal-offset vertical-offset blur-radius color */
      z-index: 1;
      font-size: 20px;
      font-weight: 700;
 `;