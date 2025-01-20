import styled from "styled-components";
import HomeIcon from "../../../public/HomeIcon.svg";
import { Link, useLocation} from "react-router-dom";



const HeaderContainer = styled.header`
  padding: 40px 0;
  background-color: #2d28ff;
  color: #fff;
  margin-bottom: 40px;

`;

const HeaderInsideBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavHeaderContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

const IconHeaderContainer = styled.div`
  display: flex;
`;


const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};

  &:hover {
    color: #fff;
  }
`;

const Header = () => {
  const location = useLocation(); // Correção na declaração do location

  return (
    <HeaderContainer>
      <HeaderInsideBox>
        <NavHeaderContainer>
          <StyledLink to="/" isActive={location.pathname === "/"}>
            <h2>Início</h2>
          </StyledLink>
          <StyledLink to="/products" isActive={location.pathname === "/products"}>
            <h2>Produtos</h2>
          </StyledLink>
          <StyledLink to="/about" isActive={location.pathname === "/about"}>
            <h2>Sobre nós</h2>
          </StyledLink>
        </NavHeaderContainer>
        <IconHeaderContainer>
          <StyledLink to="/">
            <img src={HomeIcon} alt="Home Icon" />
          </StyledLink>
        </IconHeaderContainer>
      </HeaderInsideBox>
    </HeaderContainer>
  );
};

export { Header };