import styled from "styled-components";
import HomeIcon from "../../../public/HomeIcon.svg";

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

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderInsideBox>
          <NavHeaderContainer>
            <h2>Início</h2>
            <h2>Produtos</h2>
            <h2>Sobre nós</h2>
          </NavHeaderContainer>
          <IconHeaderContainer>
            <img src={HomeIcon} alt="Home Icon" />
          </IconHeaderContainer>
        </HeaderInsideBox>
      </HeaderContainer>
    </>
  );
};

export { Header };
