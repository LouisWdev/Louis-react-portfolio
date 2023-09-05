import styled from 'styled-components';

//PORTFOLIO IMAGES

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
          margin-top: 10%;
          margin-left: 30%;
`;




const Image = styled.img``;

const ParagraphTitle = styled.div``;

const TextParagraph = styled.div`
`;

const VisitButton = styled.div``;

const Portfolio = () => {
  return (
    <Section id="Portfolio">    
         <PortfolioTitle>Welcome to my Portfolio section</PortfolioTitle> 
         <TitleSubText>Here you can view all my latest projects and other's that I have built</TitleSubText>
        <BreakLine />

        {/*Project 1*/}
         <Container>
             <ParagraphTitle>Project 1</ParagraphTitle>
             <TextParagraph>Lore Ipsum Some long text I guess to test if the text paragraph works or something like that</TextParagraph>
             <Image></Image>
             <VisitButton></VisitButton>
         </Container>

         {/*Project 2*/}
         <Container>
             <ParagraphTitle>Project 2</ParagraphTitle>
             <TextParagraph>Lore Ipsum Some long text I guess to test if the text paragraph works or something like that</TextParagraph>
             <Image></Image>
             <VisitButton></VisitButton>
         </Container>

         {/*Project 3*/}
         <Container>
             <ParagraphTitle>Project 3</ParagraphTitle>
             <TextParagraph>Lore Ipsum Some long text I guess to test if the text paragraph works or something like that</TextParagraph>
             <Image></Image>
             <VisitButton></VisitButton>
         </Container>
    </Section>
  )
}

export default Portfolio