import styled from "styled-components";
import { itemPaddingY, itemPaddingX } from "./const";

const TodoInserter = () => {
  return <Container />;
};

export default TodoInserter;

const Container = styled.input.attrs({ type: "text", placeholder: "오호" })`
  display: flex;
  border: dashed 1px black;
  border-radius: 5px;
  padding: ${itemPaddingY} ${itemPaddingX};
  font-size: 16px;
  background: none;
  color: grey;
`;
