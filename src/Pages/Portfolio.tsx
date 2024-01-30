import styled from 'styled-components';

//PORTFOLIO IMAGES
import krypt from '../assets/images/ProjectImages/Blockchain.png';

//REACT ROUTER
import { Link } from 'react-router-dom';

const Section = styled.div`
     height: 110vh;
`;

const PortfolioTitle = styled.h1`
     margin-top: 100px;
     text-align: center;
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

const BreakLine = styled.div`
      margin-left: 25%;
      width: 50%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgba(255, 255, 255, 0.5); /* Color of the separate line */
`;

const TitleSubText = styled.h2`
    text-align: center;
`;

const Container = styled.div`
          border-radius: 2vh;
          margin-top: 5%;
          margin-left: 30%;
          width: 27vw;
          padding-top: 1vh;
          padding-left: 1vh;
          padding-right: 1vh;
          height: 43vh;
          justify-content: flex-start;
          z-index: -1;
          background-color: #4d4747;
          transition: background-color 2s;

          &:hover {
           background-color: #ffffff;
           color: black;
           box-shadow: darkblue;
  }
`;

const Image = styled.img`
     width: 500px;
     border: solid darkgray 2px;
`;

const ParagraphTitle = styled.div`
     font-size: 30px;
     display: flex;

     background-color: darkgray;

     animation: textGlow 5s infinite alternate;
`;

const TextParagraph = styled.div`
     background-color: darkgray;
     display: flex;
     font-size: 16px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const VisitButton = styled.button`
     z-index: 1;
     font-weight: 700;
     margin-top: 1vh;
     font-size: large;
     cursor: pointer;

     border: 2px solid white;
     background-color: black;
     letter-spacing: 3px;
     border-radius: 5px;
     height: 50px;
     width: 175px;

     transition: background-color 0.5s;

     &:hover {
       background-color: #ffffff;
       color: black;
  }
`;

const Portfolio = () => {
  return ( 
    <Section id="Portfolio">    
         <PortfolioTitle>Welcome to my Portfolio</PortfolioTitle> 
         <TitleSubText>Here you can view all my latest projects that I have built</TitleSubText>
        <BreakLine />

        {/*Project 1*/}
         <Container>
            <Image src={krypt}></Image>
            <TextContainer>
               <ParagraphTitle>Blockchain App</ParagraphTitle>
               <TextParagraph>A web app built with tailwindCSS. It is a crypto wallet web app</TextParagraph>
             </TextContainer>
                
             <Link to="https://github.com/LouisWackenier?tab=repositories">
               <VisitButton>View Project</VisitButton>
               <VisitButton>Github Repo</VisitButton>
             </Link>
         </Container>
         {/*Project 2*/}
         <Container>
             <ParagraphTitle>Responsive Admin panel</ParagraphTitle>
             <TextParagraph>This admin panel was built with html and CSS.</TextParagraph>
             
             <Link to="https://github.com/LouisWackenier?tab=repositories">
             <VisitButton>View Project</VisitButton>
             <VisitButton>Github Repo</VisitButton>
             </Link>
         </Container>

         {/*Project 3*/}
         <Container>
             <ParagraphTitle>Typescript e-commerce store</ParagraphTitle>
             <TextParagraph>One of my biggest projects in Java is this cool Typescript store. 
               To me it is one of my most interesting projects. It is built in TypeScript Java.</TextParagraph>
             
             <Link to="https://github.com/LouisWackenier?tab=repositories">
             <VisitButton>View Project</VisitButton>
             <VisitButton>Github Repo</VisitButton>
             </Link>
         </Container>
    </Section>
  )
}

export default Portfolio