import initialData from "./data.js";
import { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const TodoIndex = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

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
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
};

export default TodoIndex;
