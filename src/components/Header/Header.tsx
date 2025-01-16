import styled from "styled-components";
import HomeIcon from "../../../public/HomeIcon.svg";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  padding: 40px 0;
  background-color: #2d28ff;
  color: #fff;

  margin-bottom: 40px;

  a{
    color: #fff;
  }
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

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderInsideBox>
          <NavHeaderContainer>
            <Link to="/">
              <h2>Início</h2>
            </Link>
            <Link to="/products">
              <h2>Produtos</h2>
            </Link>
            <Link to="/about">
              <h2>Sobre nós</h2>
            </Link>
          </NavHeaderContainer>
          <IconHeaderContainer>
            <Link to="/">
              <img src={HomeIcon} alt="Home Icon" />
            </Link>
          </IconHeaderContainer>
        </HeaderInsideBox>
      </HeaderContainer>
    </>
  );
};

export { Header };
