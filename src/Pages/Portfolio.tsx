import styled from 'styled-components';

//PORTFOLIO IMAGES
import krypt from '../assets/images/ProjectImages/Blockchain.png';

//REACT ROUTER
import { Link } from 'react-router-dom';

const Section = styled.div`
     height: auto;
`;

const PortfolioTitle = styled.h1`
     margin-top: 100px;
     margin-left: 35%;
`;

const BreakLine = styled.div`
      margin-left: 28%;
      width: 40%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgba(255, 255, 255, 0.5); /* Color of the separate line */
`;

const TitleSubText = styled.h2`
    margin-left: 27%;
`;

const Container = styled.div`
          margin-top: 5%;
          margin-left: 30%;
          justify-content: flex-start;
`;

const Image = styled.img`
     width: 500px;
     display: flex;   
`;

const ParagraphTitle = styled.div`
     font-size: 30px;
     display: flex;
`;

const TextParagraph = styled.div`
     font-size: 16px;
     width: 400px;
     margin: 10px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const VisitButton = styled.button`
     margin-top: 5px;
     font-size: large;
     cursor: pointer;

     background-color: transparent;
     letter-spacing: 3px;
     border-radius: 5px;
     height: 50px;
     width: 175px;

     &:hover {
       background-color: #ffffff;
       color: black;
  }
`;

const Portfolio = () => {
  return (
    <Section id="Portfolio">    
         <PortfolioTitle>Welcome to my Portfolio section</PortfolioTitle> 
         <TitleSubText>Here you can view all my latest projects and other's that I have built</TitleSubText>
        <BreakLine />

        {/*Project 1*/}
         <Container>
            <TextContainer>
               <ParagraphTitle>Blockchain App</ParagraphTitle>
               <TextParagraph>A web app built with tailwindCSS. It is a crypto wallet web app</TextParagraph>
             </TextContainer>
                <Image src={krypt}></Image>
             <Link to="/Krypt">
               <VisitButton>View Project</VisitButton>
             </Link>
         </Container>

         {/*Project 2*/}
         <Container>
             <ParagraphTitle>Project 2</ParagraphTitle>
             <TextParagraph>Lore Ipsum Some long text I guess to test if the text paragraph works or something like that</TextParagraph>
             <Image></Image>
             <VisitButton>View Project</VisitButton>
         </Container>

         {/*Project 3*/}
         <Container>
             <ParagraphTitle>Project 3</ParagraphTitle>
             <TextParagraph>Lore Ipsum Some long text I guess to test if the text paragraph works or something like that</TextParagraph>
             <Image></Image>
             <VisitButton>View Project</VisitButton>
         </Container>
    </Section>
  )
}

export default Portfolio