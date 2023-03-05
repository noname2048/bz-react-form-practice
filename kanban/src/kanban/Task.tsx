import styled from "styled-components";
import { TaskType } from "./types";

const Task = ({ task }: { task: TaskType }) => {
  return (
    <Container>
      <input
        type="checkbox"
        name="is_done"
        id="is_done"
        checked={task.is_done}
      />
      {task.content}
    </Container>
  );
};

export default Task;

const Container = styled.div`
  border: 1px solid blue;
`;

