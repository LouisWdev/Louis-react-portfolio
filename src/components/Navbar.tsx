import styled from 'styled-components'

const NavbarContainer = styled.div`
     padding: 10px;
     margin-left: 40%;
     align-items: center;
     display: flex;
`;

const Button = styled.button`
     color: white;
     list-style: none;
     font-size: 20px;
     padding: 10px;
     margin-right: 20px;
     border: none;

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