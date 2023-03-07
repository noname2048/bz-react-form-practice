import { ColumnType } from "./types";
import Task from "./Task";
import styled from "styled-components";

const Column = ({ column }: { column: ColumnType }) => {
  return (
    <Container>
      {column.title}
      <TaskContainer>
        {column.tasks.map((task, index) => {
          return <Task task={task} key={index} />;
        })}
      </TaskContainer>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 5px;
  border: 2px solid black;
  padding: 10px;

  &:hover {
    border: 2px solid #888888;
  }
`;
const TaskContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export default Column;
