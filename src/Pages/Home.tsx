import styled from 'styled-components';

const HeroSection = styled.div`
     display: flex;
`;

const WelcomeTitle = styled.h1`
     font-size: 50px;
     margin-left: 20%;
     margin-top: 10%;
`;


const Home = () => {
  return (
   <HeroSection>
         <WelcomeTitle>Welcome to my site</WelcomeTitle>   
    </HeroSection>
  )
}

export default Home