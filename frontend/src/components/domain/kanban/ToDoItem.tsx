import styled from "styled-components";

const ToDoItem = () => {
  return (
    <Container>
      <div>아하하하</div>
      <div>x</div>
    </Container>
  );
};

export default ToDoItem;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  background-color: green;
  border-radius: 6px;
  padding: 2px 5px;
  margin: 2px;
`;
