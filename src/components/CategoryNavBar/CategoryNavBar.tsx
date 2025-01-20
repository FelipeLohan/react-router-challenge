import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";



const CategoryNavBarContainer = styled.nav`
  width: 80%;
  margin: 0 auto;
  padding: 20px;

  background-color: #c7c7c7;
  color: #000;

  display: flex;
  gap: 20px;

 
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: ${(props) => (props.isActive ? "#2d28ff" : "#000")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};

  &:hover {
    color: #2d28ff;
  }
`;

const CategoryNavBar = () => {

  const location = useLocation();

  return (
    <>
      <CategoryNavBarContainer>
        <StyledLink to="/products/computers" isActive={location.pathname === "/products/computers"}>
          <h3>Computadores</h3>
        </StyledLink>
        <StyledLink to="/products/electronics" isActive={location.pathname === "/products/electronics"}>
          <h3>Eletrônicos</h3>
        </StyledLink>
        <StyledLink to="/products/books" isActive={location.pathname === "/products/books"}>
          <h3>Livros</h3>
        </StyledLink>
      </CategoryNavBarContainer>
    </>
  );
};

export { CategoryNavBar };
