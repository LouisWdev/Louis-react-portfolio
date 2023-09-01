import styled from 'styled-components';
import Slider from '../components/Slider';

const Section = styled.div`
     height: 100vh
`;

const Portfolio = () => {
  return (
    <Section id="Portfolio">
          <Slider />
    </Section>
  )
}

export default Portfolio