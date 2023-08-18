import styled from 'styled-components';

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
        <Button>Home</Button>
        <Button>Portfolio</Button>
        <Button>About</Button>
        <Button>Contact</Button>
   </NavbarContainer>
  )
}

export default Navbar