import styled from "styled-components";
import ToDoList from "./ToDoList";

const KanbanBoard = () => {
  return (
    <Container>
      <ToDoList />
      <ToDoList />
      <ToDoList />
    </Container>
  );
};

export default KanbanBoard;

const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;
