import styled from "styled-components";
import { TaskType } from "./types";
import { DragEvent } from "react";

const Task = ({ task }: { task: TaskType }) => {
  const onDragStart = (e: DragEvent<HTMLDivElement>): void => {
    console.log(e.target);
  };

  return (
    <Container draggable={true} onDragStart={onDragStart}>
      <input
        type="checkbox"
        name="is_done"
        id="is_done"
        checked={task.is_done}
        onChange={() => {
          console.log("hi");
        }}
      />
      {task.content}
    </Container>
  );
};

export default Task;

const Container = styled.div`
  width: 200px;
  margin: 5px;
  padding: 5px;
  border: 1px solid blue;
`;
