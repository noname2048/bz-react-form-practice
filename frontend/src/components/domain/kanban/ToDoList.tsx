import styled from "styled-components";
import Button from "@mui/material/Button";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <Container>
      <Title>title</Title>
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
  border-radius: 7px;
  padding: 20px;
`;

const Title = styled.div`
  border-radius: 10px;
  border: solid 3px #213547;
  width: 100%;
  padding: 6px;
`;
