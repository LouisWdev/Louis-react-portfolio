import styled from 'styled-components';


const Section = styled.div`
     height: 100vh
     
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

const Home = () => {

  return (
     <Section>
         <HeroSection>
             <WelcomeTitle>Welcome to my website</WelcomeTitle>    
             <TitleSubText>My name is Louis and I am a fullstack developer</TitleSubText>
         </HeroSection>
     </Section>
  
  )
}

export default Home