import styled from "styled-components";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

import ComfortTyper from "./ComfortTyper";
import { useRecoilState } from "recoil";
import { InitData } from "./dataTypes";
import data from "./data";

const Container = styled.div<{ isDragging: boolean; isDragDisabled: boolean }>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({ isDragDisabled, isDragging }) =>
    isDragDisabled ? "lightgrey" : isDragging ? "lightgreen" : "white"};

  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

const Input = ({ taskId, value }: { taskId: string; value: string }) => {
  const [disable, setDisable] = useState<boolean>(true);
  const [state, setState] = useRecoilState<InitData>(data);
  // const [memo, setMemo] = useState<string>(value);
  // const [click, setClick] = useState<boolean>(false);

  // if (click) {
  //   return (
  //     <div
  //       onChange={() => {
  //         setClick(!click);
  //       }}
  //     >
  //       {memo}
  //     </div>
  //   );
  // }

  return (
    // <ComfortTyper value={memo}/>
    <input
      type="text"
      value={value + taskId}
      onClick={() => {
        console.log("toggle");
        setDisable(!disable);
      }}
      onChange={(e) => {
        e.target.value;
      }}
    />
  );
};

const Task = ({
  task,
  index,
}: {
  task: { id: string; content: string };
  index: number;
}) => {
  const isDragDisabled: boolean = task.id === "task-1";
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          isDragDisabled={isDragDisabled}
        >
          <Handle {...provided.dragHandleProps} />
          <Input value={task.content} taskId={task.id} />
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
