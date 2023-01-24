import styled from "styled-components";
import Task from "./Task";
import { StrictModeDroppable } from "./StrictModeDroppable";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = ({ tasks, column }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <StrictModeDroppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </StrictModeDroppable>
    </Container>
  );
};

export default Column;
