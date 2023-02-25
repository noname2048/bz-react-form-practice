import data from "./data";
import { useState } from "react";
import Column from "./Column";
import styled from "styled-components";
import {DragDropContext, DroppableProvided} from "react-beautiful-dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { InitData } from "./dataTypes";
import { DragStart, DragUpdate, DropResult } from "react-beautiful-dnd";
import { atom, useRecoilState } from "recoil";

const Container = styled.div`
  display: flex;
`;


const TodoIndex = () => {
  const [state, setState] = useRecoilState(data);
  const {columns, columnOrder} = state;
  const onDragStart = ({ draggableId, type }: DragStart): void => {
    // document.body.style.color = "orange";
    // document.body.style.transition = "background-color 0.2s ease";
    // if (type === "task") {
    //
    // }
  };

  const onDragUpdate = (update: DragUpdate) => {
    // const { destination } = update;
    // const opacity = destination
    //   ? destination.index / Object.keys(state.tasks).length
    //   : 0;
    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };

  const onDragEnd = ({
    destination,
    source,
    draggableId,
    type,
  }: DropResult) => {
    // setHomeIndex(null);

    // document.body.style.color = "inherit";
    // document.body.style.backgroundColor = "inherit";
    // 목적지가 없는경우
    if (!destination) return;
    // source 와 destination 이 완전 같은 경우
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (type === "column") {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      };
      setState(newState);
      return;
    } else if (type === "task") {
      const startColumn = state.columns[source.droppableId];
      const finishColumn = state.columns[destination.droppableId];

      if (startColumn.id === finishColumn.id) {
        const column = state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColum = {
          ...column,
          taskIds: newTaskIds,
        };

        const newState = {
          ...state,
          columns: { ...state.columns, [newColum.id]: newColum },
          // 무슨 문법인지 알아볼것 -> 계산된 속성이름 구조 분해 (computed property name)
          // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        };
        setState(newState);
        return;
      }

      // startColumn != finishColumn
      const renewStartTaskIds = Array.from(startColumn.taskIds);
      const renewFinishTaskIds = Array.from(finishColumn.taskIds);

      renewStartTaskIds.splice(source.index, 1);
      renewFinishTaskIds.splice(destination.index, 0, draggableId);

      const newStartColumn = {
        ...startColumn,
        taskIds: renewStartTaskIds,
      };
      const newFinishColumn = {
        ...finishColumn,
        taskIds: renewFinishTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStartColumn.id]: newStartColumn,
          [newFinishColumn.id]: newFinishColumn,
        },
      };
      setState(newState);
      return;
    }

    // no matched types?
  };

  return (
    <div>
      <DragDropContext
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
      >
        <StrictModeDroppable
          droppableId="board"
          direction="horizontal"
          type="column"
        >
          {({droppableProps, innerRef, placeholder}: DroppableProvided) => (
            <Container {...droppableProps} ref={innerRef}>
              {columnOrder.map((columnId, index) => {
                const column = columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => state.tasks[taskId]
                );
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    isDropDisabled={false}
                    index={index}
                  />
                );
              })}
              {placeholder}
            </Container>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
};

export default TodoIndex;
