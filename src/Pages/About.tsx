import styled from 'styled-components';

const Section = styled.div`
     height: 100vh
`;

const SectionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const ProfileImage = styled.img`
  max-width: 200px;
  border-radius: 50%;
  margin: 20px auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;


const About = () => {
  return (
    <Section id='About'>
    <SectionContainer>
      <Title>About Me</Title>
      <ProfileImage
        src="profile.jpg" // Replace with your profile image URL
        alt="Profile"
      />
      <Description>
          So I started coding from a young age and was already amazed by how coding works and so I strive to become a 10x developer. Besides coding I also do fitness and long distance running.
      </Description>
    </SectionContainer>
    </Section>
  )
}

export default About