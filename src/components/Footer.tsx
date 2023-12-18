import styled from 'styled-components';

const FooterContainer = styled.div`
     display: inline-block;
     position: fixed;

     background-color: transparent;

     bottom: 0%;
     width: 90vw;

     margin-bottom: 20px;
     margin-left: 40px;
`;

const Text = styled.div`
   display: inline;
   background-color: transparent;
`;

const Socials = styled.div`
   display: inline;
   text-align: end;
`;

const Footer = () => {
  return (
    <FooterContainer>
             <Text>© 2023 Louis W. All rights reserved.</Text>
             <Socials>My Socials</Socials>
    </FooterContainer>
  )
}

export default Footer