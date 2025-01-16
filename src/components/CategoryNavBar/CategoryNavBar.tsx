import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryNavBarContainer = styled.nav`
  width: 80%;
  margin: 0 auto;
  padding: 20px;

  background-color: #c7c7c7;
  color: #000;

  display: flex;
  gap: 20px;

  a {
    color: #000;
  }
`;

const CategoryNavBar = () => {
  return (
    <>
      <CategoryNavBarContainer>
        <Link to="/products/computers">
          <h3>Computadores</h3>
        </Link>
        <Link to="/products/electronics">
          <h3>Eletrônicos</h3>
        </Link>
        <Link to="/products/books">
          <h3>Livros</h3>
        </Link>
      </CategoryNavBarContainer>
    </>
  );
};

export { CategoryNavBar };
