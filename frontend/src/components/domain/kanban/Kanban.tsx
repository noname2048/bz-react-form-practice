import styled from "styled-components";
import KanbanNav from "./KanbanNav";
import KanbanBoard from "./KanbanBoard";

const Kanban = (props: {}) => {
  return (
    <Container>
      <KanbanNav />
      <KanbanBoard />
    </Container>
  );
};

export default Kanban;

const Container = styled.div`
  margin: 2rem 0rem;
  height: 10rem;
  background-color: grey;
`;

const ToDoContainer = () => {
  return <div></div>;
};

const ToDoList = () => {
  return <div></div>;
};
