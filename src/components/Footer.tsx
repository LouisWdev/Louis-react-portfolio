import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <FooterContainer>
              <Text>V0.1 © 2024 Louis W. All rights reserved. </Text>
              <Socials>My Socials
                <TwitterIconContainer>
                   <Link to="https://twitter.com/LouisWDev">
                      <TwitterIcon />
                   </Link>
                </TwitterIconContainer>

                <LinkedInIconContainer>
                     <Link to="https://www.linkedin.com/in/louis-wackenier-37463b255/">
                       <LinkedInIcon />
                     </Link>
                </LinkedInIconContainer>

                <GitHubIconContainer>
                   <Link to="https://github.com/LouisWackenier">
                      <GitHubIcon/>
                   </Link>
                </GitHubIconContainer>
              </Socials>
      </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
        background-color: transparent;
        display: inline-block;
        position: fixed;
        bottom: 0%;
        margin-bottom: 20px;
        margin-left: 40px;
        background-color: transparent;
   `;
   
   const TwitterIconContainer = styled.div`
       background-color: transparent;
       padding-left: 15px;
       cursor: pointer;
   `;
   
   const LinkedInIconContainer = styled.div`
      background-color: transparent;
      padding-left: 10px;
      cursor: pointer;
   `;
   
   const GitHubIconContainer = styled.div`
      background-color: transparent;
      padding-left: 10px;
      cursor: pointer;
   `;
   
   const Text = styled.div`
      background-color: transparent;
   `;
   
   const Socials = styled.div`
      background-color: transparent;
      display: flex;
   `;