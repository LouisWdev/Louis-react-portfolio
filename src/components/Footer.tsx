import styled from 'styled-components';

const FooterContainer = styled.div`
     display: flex;
     position: absolute;
     align-items: center;
     bottom: 0%;
     margin-left: 1%;
`;

const Footer = () => {
  return (
    <FooterContainer>
             <p>© 2023 Louis W. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer