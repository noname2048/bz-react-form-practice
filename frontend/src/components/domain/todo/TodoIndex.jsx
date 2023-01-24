import initialData from "./data.js";
import { useState } from "react";
import Column from "./Column";

const TodoIndex = () => {
  const [state, setState] = useState(initialData);

  return (
    <div>
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
    </div>
  );
};

export default TodoIndex;
