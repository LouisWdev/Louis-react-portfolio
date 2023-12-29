//STYLED COMPONENTS
import styled from 'styled-components';

//REACT ROUTER DOM
import { Link } from 'react-router-dom';
import {Link as Link2 } from 'react-scroll';


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
  window.addEventListener("scroll", windowScroll);

   /**
   * Window scroll
   */
  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }


  return (
    <NavbarContainer className='navbar' id='navbar'>
      <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
        <Button>Home</Button>
       </Link>
      <Link2 to="About" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
        <Button>About</Button>
      </Link2>
      <Link2 to="Contact" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}>
         <Button>Contact</Button>
      </Link2>
      {/*Link to Portfolio Section*/}
      <Link to="Portfolio" style={{ textDecoration: 'none', backgroundColor: 'transparent'}}><Button>Portfolio</Button></Link>
   </NavbarContainer>
  )
}

export default Navbar