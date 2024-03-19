import styled from 'styled-components';

//PORTFOLIO IMAGES
import krypt from '../assets/images/ProjectImages/Blockchain.png';

//REACT ROUTER
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return ( 
    <Section id="Portfolio">    
         <PortfolioTitle>Welcome to my Portfolio</PortfolioTitle> 
         <TitleSubText>Here you can view all my latest projects.</TitleSubText>

        {/*Project 1*/}
         <Container>
            <Image src={krypt}></Image>
            <TextContainer>
               <ParagraphTitle>Blockchain App</ParagraphTitle>
               <TextParagraph>A web app built with tailwindCSS. It is a crypto wallet web app</TextParagraph>
             </TextContainer>
             <Link to="https://github.com/LouisWackenier?tab=repositories" style={{ textDecoration: 'none'}}>
              <ButtonContainer>
                <VisitButton>View Project</VisitButton> 
                <VisitButton>Github Repo</VisitButton>
              </ButtonContainer>
             </Link>
         </Container>

         {/*Project 2*/}
         <Container>
             <ParagraphTitle>Responsive Admin panel</ParagraphTitle>
             <TextParagraph>This admin panel was built with html and CSS.</TextParagraph>
             
             <Link to="https://github.com/LouisWackenier?tab=repositories" style={{ textDecoration: 'none'}}>
             <ButtonContainer>
               <VisitButton>View Project</VisitButton>
               <VisitButton>Github Repo</VisitButton>
             </ButtonContainer>
             </Link>
         </Container>

         {/*Project 3*/}
         <Container>
             <ParagraphTitle>Typescript e-commerce store</ParagraphTitle>
             <TextParagraph>One of my biggest projects in Java is this cool Typescript store. 
               To me it is one of my most interesting projects. It is built in TypeScript Java.</TextParagraph>
             
             <Link to="https://github.com/LouisWackenier?tab=repositories" style={{ textDecoration: 'none'}}>
             <ButtonContainer>
              <VisitButton>View Project</VisitButton>
              <VisitButton>Github Repo</VisitButton>
             </ButtonContainer>
             </Link>
         </Container>
    </Section>
  )
}

export default Portfolio

const Section = styled.div`
     height: 100vh;
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

const TitleSubText = styled.h2`
    border-bottom: 3px solid white;
    width: 50vw;
    text-align: center;
    margin-left: 25vw;
    padding-bottom: 50px;
`;

const Container = styled.div`
    border-radius: 2vh;
    margin-top: 2%;
    margin-left: 34%;
    width: 27vw;
    padding-top: 1vh;
    padding-left: 1vh;
    padding-right: 1vh;
    border: 2px solid white;
    height: 43vh;
    justify-content: flex-start;
    z-index: -1;
    background: rgb(2,0,36);
    background: linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(20,131,164,0.8533788515406162) 100%);
    transition: background-color 1s, box-shadow 1s; /* Added box-shadow transition */

    &:hover {
        background-color: #ffffff;
        color: black;
        box-shadow: 0 0 10px rgba(243, 243, 243, 1); /* Slight shadow on hover */
    }
`;


const Image = styled.img`
     width: 500px;
     border: solid darkgray 2px;
`;

const ParagraphTitle = styled.div`
     font-size: 30px;
     display: flex;
     font-weight: 500;
     text-shadow: 2px 2px 2px black;
     background-color: transparent;

     animation: textGlow 5s infinite alternate;
`;

const TextParagraph = styled.div`
     background-color: transparent;
     display: flex;
     font-size: 16px;
     text-shadow: 2px 2px 2px black;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background-color: transparent;
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
     transition: background-color 1s;

     &:hover {
       background-color: #757575;
       color: lightblue;
       border: solid black 2px;
   }
`;

const ButtonContainer = styled.div`
     background-color: transparent;
     display: flex;
     margin-left: 3vw;
     margin-right: 3vw;
     justify-content: space-between;
`;