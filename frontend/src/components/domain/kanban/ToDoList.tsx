import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import ToDoInserter from "./ToDoInserter";

const ToDoList = () => {
  return (
    <Container>
      <Title>title</Title>
      <ListContainer>
        <ToDoItem />
        <ToDoItem />
        <ToDoInserter />
      </ListContainer>
    </Container>
  );
};

export default ToDoList;

const Container = styled.div`
  background-color: bisque;
  width: 15rem;
  border-radius: 5px;
  padding: 20px;
`;

const Title = styled.div`
  border: solid 1px #213547;
  width: 100%;
  padding: 5px 10px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 0.4rem;
  border: solid 1px red;
  margin: 6px 0;
`;
