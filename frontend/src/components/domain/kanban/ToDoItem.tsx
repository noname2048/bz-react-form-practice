import styled from "styled-components";
import { itemPaddingY, itemPaddingX } from "./const";

const ToDoItem = () => {
  return (
    <Container>
      <Text>아하하하</Text>
      <Icon>x</Icon>
    </Container>
  );
};

export default ToDoItem;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border: solid 1px green;
  border-radius: 5px;
`;

const Text = styled.span`
  padding: ${itemPaddingY} ${itemPaddingX};
`;

const Icon = styled.div`
  padding: ${itemPaddingY} 10px;
`;
