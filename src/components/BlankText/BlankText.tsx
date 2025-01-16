import styled from "styled-components";

const BlankTextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
type Props = {
  text: string;
};

const BlankText = ({ text }: Props) => {
  return (
    <>
      <BlankTextContainer>
        <h1>{text}</h1>
      </BlankTextContainer>
    </>
  );
};

export { BlankText };
