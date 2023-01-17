import styled from "styled-components";
import Button from "@mui/material/Button";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <Container>
      <span>title</span>
      <ToDoItem />
      <ToDoItem />
      <Button variant="contained">추가하기</Button>
    </Container>
  );
};

export default ToDoList;

const Container = styled.div`
  background-color: bisque;
  width: 15rem;
  height: 20rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  gap: 12px;
`;

const Span = styled.span``;
