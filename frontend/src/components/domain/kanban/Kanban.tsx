import styled from "styled-components";

const Kanban = (props: {}) => {
  return (
    <Container>
      <KanbanNav>
        <li>+</li>
        <li>save</li>
      </KanbanNav>
    </Container>
  );
};

export default Kanban;

const Container = styled.div`
  margin: 2rem 0rem;
  height: 10rem;
  background-color: grey;
`;

const KanbanNav = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  background-color: darkslateblue;
  list-style: none;
  li {
    background-color: beige;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0.25rem;
  }
`;

const ToDoContainer = () => {
  return <div></div>;
};

const ToDoList = () => {
  return <div></div>;
};
