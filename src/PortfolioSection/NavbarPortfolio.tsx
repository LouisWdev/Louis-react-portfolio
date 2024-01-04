//STYLED COMPONENTS
import styled from 'styled-components';

//REACT ROUTER DOM
import { Link } from 'react-router-dom';

//STYLING
const NavbarContainer = styled.div`
  background-color: rgba(7, 0, 27, 0.8);
  width: 100%;
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  position: fixed;
  z-index: 2;
  top: 0;
`;

const Button = styled.h2`
  color: white;
  list-style: none;
  display: flex;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0); /* Set a transparent background color */
  padding: 10px;
  border: none;
  cursor: pointer;

  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
    color: gray;
  }
`;


const Navbar = () => {
  


  return (
    <NavbarContainer className='navbar' id='navbar'>
      <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
         <Button>Back to the home page</Button>
       </Link>
   </NavbarContainer>
  )
}

export default Navbar