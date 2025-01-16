import styled from "styled-components";
import { getProductsByCategory } from "../../../../data/productDTO.ts";

const SelectedProductContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  div ul{
    display: block;
    flex-direction: column;
  }
`;

type Props = {
  category: string;
};

const SelectedProduct = ({ category }: Props) => {
  const CategoryData = getProductsByCategory(category);

  return (
    <>
      <SelectedProductContainer>
        <div>
          <ul>{category && CategoryData.map((e) => <li>{e.items}</li>)}</ul>
        </div>
      </SelectedProductContainer>
    </>
  );
};

export { SelectedProduct };
