import styled from 'styled-components';
import { Link } from 'react-scroll';
import Home from '../Pages/Home';

const NavbarContainer = styled.div`
     background-color: black;
     width: 100%;
     display: flex;
     position: fixed;
     margin-left: 40%;
     top: 0;
`;

const Button = styled.h2`
     color: white;
     list-style: none; 
     display: flex;
     background-color: black;
     font-size: 20px;
     padding: 10px;
     border: none;
     cursor: pointer;

     &:hover {
        text-decoration: underline;
        color: gray;
     }
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="home"><Button>Home</Button></Link>
      <Link to="Portfolio"><Button>Portfolio</Button></Link> 
      <Link to="About"><Button>About</Button></Link>  
      <Link to="Contact"><Button>Contact</Button></Link>
   </NavbarContainer>
  )
}

export default Navbar