import styled from "styled-components";
import Task from "./Task";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { Draggable } from "react-beautiful-dnd";
import { selector } from "recoil";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "skyblue" : "white"};
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({
  tasks,
  column,
  isDropDisabled,
  index,
}: {
  tasks: Array<{ id: string; content: string }>;
  column: { id: string; title: string; taskIds: Array<string> };
  isDropDisabled: boolean;
  index: number;
}) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(props) => (
        <Container {...props.draggableProps} ref={props.innerRef}>
          <Title {...props.dragHandleProps}>{column.title}</Title>
          <StrictModeDroppable
            droppableId={column.id}
            isDropDisabled={isDropDisabled}
            type="task"
          >
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index: number) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </StrictModeDroppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
