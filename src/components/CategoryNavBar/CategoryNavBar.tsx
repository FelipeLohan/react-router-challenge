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

const CategoryNavBar = () => {
  return (
    <>
      <CategoryNavBarContainer>
        <h3>Computadores</h3>
        <h3>Eletrônicos</h3>
        <h3>Livros</h3>
      </CategoryNavBarContainer>
    </>
  );
};

export { CategoryNavBar };
