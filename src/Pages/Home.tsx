import styled from 'styled-components';


const Section = styled.div`
     height: 100vh
     
`;

const HeroSection = styled.div`
     display: flex;
     display: block;
     margin-top: 300px;
     margin-left: 300px;
`;

const WelcomeTitle = styled.h1`
      margin-top: 250px;
      margin-left: 400px;
      font-size: 50px;
      border-right: .15em solid rgb(0, 24, 2); /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: .15em; /* Adjust as needed */
      animation: 
      typing 3.5s steps(30, end),
      blink-caret .75s step-end infinite;

      /* The typing effect */
     @keyframes typing {
           from { width: 0 }
           to { width: 100% }
          }

     /* The typewriter cursor effect */
     @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: rgb(0, 68, 255); }
         }
`;

const TitleSubText = styled.div`
    font-size: large;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    
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