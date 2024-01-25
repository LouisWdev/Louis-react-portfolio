//REACT 
import styled from 'styled-components';

//IMG
import AboutmeImg from '../assets/images/AboutImage/VaporwaveRoom.png';
import NextGenImg from '../assets/images/AboutImage/Next-gen-image.png';
import CryptoImg from '../assets/images/AboutImage/crypto-image.png';
import AiImage from '../assets/images/AboutImage/Ai-image.png';

const Section = styled.div`
     height: auto;
`;


const Container = styled.div`
     margin-top: 50px;
`;

const GlowingImage = styled.img`
  height: 50vh;
  width: 60vw;
  
  border: 2px solid transparent;
  border-radius: 10px;
  z-index: 1;
  
  transition: border-color 0.3s ease-in-out;
  animation: glow 1s infinite alternate;
  border-color: #00aaff; /* Change this to your desired glowing color */  

  @keyframes glow {
    0% {
      border-color: transparent;
      box-shadow: 0 0 5px rgba(0, 170, 255, 0.5);
    }
    100% {
      border-color: #00aaff; /* Change this to your desired glowing color */
      box-shadow: 0 0 20px rgba(0, 170, 255, 0.8), 0 0 30px rgba(0, 170, 255, 0.6), 0 0 40px rgba(0, 170, 255, 0.4);
    }
  }
`;

const SectionContainer = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;
`;

const Title = styled.h2`
   font-size: 28px;
   margin-bottom: 20px;
   animation: textGlow 5s infinite alternate;

   @keyframes textGlow {
       0% {
        color: #54d7ee;
       }

       50% {
        color: #068686;
       }

       100% {
        color: #5470ee;
       }
   }
`;

const Description = styled.p`
   font-size: 16px;
   width: 20vw;
   margin-left: 40vw;
   text-align: center;
   line-height: 1.6;
`;


const About = () => {
  return (
    <Section id="About">
    <SectionContainer>
      <Container>
        <GlowingImage src={AboutmeImg}/>
      </Container>
      <Title>About Me</Title>
      <Description>
          I started coding from a young age and was already amazed by how coding works.<br /> 
          And so I strive to become a 10x developer.<br />
          Besides coding I also do fitness and long distance running.
      </Description>
      <Container>
         <GlowingImage src={NextGenImg} />
      </Container>
        <Title>Next Generation</Title>
      
      <Description>
          Throughout my journey of Learning how to code I have learned how to use different technologies.<br /> 
          And now I have a good understanding of these powerful last generation technologies<br />
          Some of these you may know like NextJS, React, etc. These frameworks are an essential part of what a business needs to succeed in the modern sphere of IT.
      </Description>

      <GlowingImage src={CryptoImg} />
      <Title>Crypto</Title>
      <Description>
          The decentralized crypto market has been booming and lots of people and businesses are using it and yet there are people that are missing out, as for me<br /> 
          I have been studying this market ever since it has been becoming mainstream and have been working on projects that have to do with this trend<br />
      </Description>

      <GlowingImage src={AiImage}/>
      <Title>
        AI
      </Title>
      <Description>
          From a young age I have had a passion and interest in sci fi and I fell in love with the genre, And I have been waiting for the chance to learn about AI and now that it has been<br />
          becoming popular I have been having a keen interest in AI technology and I see it as an essential part in humanity's strive towards the future so I am expecting to be working on some AI projects. 
      </Description>
    </SectionContainer>
    </Section>
  )
}

export default About