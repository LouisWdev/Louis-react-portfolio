import styled from 'styled-components';
import Slider from '../components/Slider';

const Section = styled.div`
     height: 100vh
`;

const cardContent = [
  "Card 1 Content",
  "Card 2 Content",
  "Card 3 Content",
  // Add more card content as needed
];

const Portfolio = () => {
  return (
    <Section>
        <Slider cards={cardContent}/>
    </Section>
  )
}

export default Portfolio