import initialData from "./data.js";
import { useState } from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const TodoIndex = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {};
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          return (
            <Column
              key={column.id}
              title={column.title}
              column={column}
              tasks={tasks}
            />
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default TodoIndex;
