import styled from 'styled-components';

const FooterContainer = styled.div`
     display: flex;
     position: fixed;
     align-items: center;
     bottom: 0%;
`;

const Footer = () => {
  return (
    <FooterContainer>
             <p>© 2023 Louis W. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer